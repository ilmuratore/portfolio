const iconPaths = {
  code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  spark: <><path d="m12 3 1.9 5.9L20 11l-6.1 2.1L12 19l-1.9-5.9L4 11l6.1-2.1L12 3Z"/><path d="M19 18v4m-2-2h4" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></>,
  check: <><path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="10" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" /></>,
  github: <><path d="M9 19c-4.5 1.4-4.5-2.3-6.3-2.8M15 22v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.2A5.6 5.6 0 0 0 19.3 4a5.2 5.2 0 0 0-.1-3.5S17.9.1 15 2.2a13.7 13.7 0 0 0-6 0C6.1.1 4.8.5 4.8.5A5.2 5.2 0 0 0 4.7 4 5.6 5.6 0 0 0 3.2 8c0 5.6 3.5 6.8 6.8 7.2A3.5 3.5 0 0 0 9 18v4" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  terminal: <><rect x="2" y="3" width="20" height="18" rx="2"/><path d="m6 8 4 4-4 4M13 16h5"/></>,
  brain: <><path d="M12 7a4 4 0 0 0-7-2 4 4 0 0 0-2 6 4 4 0 0 0 0 6 4 4 0 0 0 7 2l2 1V7ZM12 7a4 4 0 0 1 7-2 4 4 0 0 1 2 6 4 4 0 0 1 0 6 4 4 0 0 1-7 2l-2 1"/></>,
  network: <><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v6M5 17v-4h14v4"/></>,
  book: <><path d="M4 19.5V4a2 2 0 0 1 2-2h15v18H6a2 2 0 0 0 0 4h15"/><path d="M8 8h9M8 12h7"/></>
};
export default function UiIcon({ name = "code", size = 18, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {iconPaths[name] ?? iconPaths.code}
    </svg>
  );
}
