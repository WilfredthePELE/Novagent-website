// Monoline stroke icons — single consistent 1.6 weight, currentColor.
const P = {
  video: <><rect x="3" y="5" width="14" height="14" rx="2" /><path d="M17 9l4-2v10l-4-2" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.6" /><path d="M4 17l5-5 4 3 3-3 4 4" /></>,
  cube: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 21V12M12 12l8-4.5M12 12L4 7.5" /></>,
  audio: <><path d="M4 12h2M8 8v8M12 5v14M16 8v8M20 12h-2" /></>,
  code: <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></>,
  research: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>,
  data: <><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>,
  content: <><path d="M5 4h11l3 3v13H5z" /><path d="M8 10h8M8 14h8M8 18h5" /></>,
  business: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  education: <><path d="M12 4l10 5-10 5L2 9l10-5z" /><path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5" /></>,
  support: <><path d="M14.5 5.5a4 4 0 00-5.4 5.4l-5.3 5.3a1.5 1.5 0 002.1 2.1l5.3-5.3a4 4 0 005.4-5.4l-2.3 2.3-2.1-2.1 2.3-2.3z" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  shield: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  gauge: <><path d="M4 18a8 8 0 1116 0" /><path d="M12 18l4-5" /><circle cx="12" cy="18" r="1" /></>,
  trend: <><path d="M4 16l5-5 3 3 7-7" /><path d="M15 7h5v5" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  chat: <><path d="M4 5h16v11H8l-4 3V5z" /><path d="M8 10h8M8 13h5" /></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="2.5" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  box: <><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" /><path d="M3 7l9 4 9-4M12 11v10" /></>,
};

export default function Icon({ name, size = 22, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name] || P.cube}
    </svg>
  );
}
