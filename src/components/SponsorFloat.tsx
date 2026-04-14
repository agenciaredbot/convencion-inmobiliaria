export default function SponsorFloat() {
  return (
    <a
      href="/sponsors"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-5 py-3 bg-gold-500 rounded-full shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 transition-shadow duration-300 animate-sponsor-pulse"
      aria-label="Quiero Ser Sponsor"
    >
      <svg className="w-5 h-5 text-navy-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <span
        className="text-navy-950 font-bold text-xs uppercase tracking-wider hidden sm:inline"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "14px", letterSpacing: "0.08em" }}
      >
        Ser Sponsor
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-15 pointer-events-none" />
    </a>
  );
}
