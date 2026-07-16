#!/usr/bin/env python3
"""Novagent Chat Webhook Server"""
import json, os, time, sys, urllib.request
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

MESSAGES_FILE = os.path.expanduser("~/novagent-website/chat-messages.json")
HOST = "0.0.0.0"
PORT = 8080
TBOT = os.environ.get("TELEGRAM_BOT_TOKEN", "")
TCID = os.environ.get("TELEGRAM_CHAT_ID", "")


class Handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/health":
            self.json(200, {"status": "ok", "time": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "msgs": self.count_msgs()})
        else:
            self.json(404, {"error": "Not found"})

    def do_POST(self):
        path = urlparse(self.path).path
        if path != "/api/chat":
            self.json(404, {"error": "Not found"})
            return
        try:
            data = json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0))))
        except Exception:
            self.json(400, {"error": "Invalid JSON"})
            return
        name = data.get("name", "").strip()
        msg = data.get("message", "").strip()
        email = data.get("email", "").strip()
        if not name or not msg:
            self.json(400, {"error": "Name and message required"})
            return

        entry = {
            "name": name, "email": email, "message": msg,
            "source": data.get("source", "website"),
            "received_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "id": str(int(time.time() * 1000))
        }
        msgs = []
        if os.path.exists(MESSAGES_FILE):
            try:
                with open(MESSAGES_FILE) as f:
                    msgs = json.load(f)
            except Exception:
                msgs = []
        msgs.append(entry)
        if len(msgs) > 100:
            msgs = msgs[-100:]
        with open(MESSAGES_FILE, "w") as f:
            json.dump(msgs, f, indent=2)

        tg_sent = False
        if TBOT:
            try:
                display_name = name
                if email:
                    display_name = name + " (" + email + ")"
                text = "\u2709\ufe0f *New Chat*\n*" + display_name + "*: " + msg
                payload = json.dumps({
                    "chat_id": TCID, "text": text, "parse_mode": "Markdown"
                }).encode()
                req = urllib.request.Request(
                    "https://api.telegram.org/bot" + TBOT + "/sendMessage",
                    data=payload, headers={"Content-Type": "application/json"}
                )
                resp = urllib.request.urlopen(req, timeout=10)
                tg_sent = json.loads(resp.read()).get("ok", False)
            except Exception as e:
                print("Telegram forward failed:", e, file=sys.stderr)

        self.json(200, {"status": "ok", "id": entry["id"], "telegram_forwarded": tg_sent})

    def json(self, status, data):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def count_msgs(self):
        if os.path.exists(MESSAGES_FILE):
            try:
                with open(MESSAGES_FILE) as f:
                    return len(json.load(f))
            except Exception:
                pass
        return 0

    def log_message(self, fmt, *args):
        print("[ChatServer]", args[0], args[1], args[2], file=sys.stderr)


if __name__ == "__main__":
    print("[ChatServer] Novagent Chat Webhook starting on port", PORT)
    print("[ChatServer] Telegram configured:", bool(TBOT))
    print("[ChatServer] Messages file:", MESSAGES_FILE)
    try:
        HTTPServer((HOST, PORT), Handler).serve_forever()
    except KeyboardInterrupt:
        print("\n[ChatServer] Stopped")
