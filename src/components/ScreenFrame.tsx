import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/food-factions", label: "Food Factions" },
  { to: "/char-lobster", label: "CHAR Lobster Rolls" },
  { to: "/food-decider", label: "Food Decider" },
  { to: "/factory", label: "The Factory" },
  { to: "/tasting-journal", label: "Tasting Journal" },
  { to: "/foundry-pass", label: "Foundry Pass" },
] as const;

export function ScreenFrame({ html, title }: { html: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [open, setOpen] = useState(false);

  // Resize iframe to fit content height (for natural scrolling within page chrome if needed).
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = title;
    }
  }, [title]);

  return (
    <div className="relative min-h-screen w-full bg-black">
      <iframe
        ref={ref}
        title={title}
        srcDoc={html}
        className="block h-screen w-full border-0"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />

      {/* Floating screens menu */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open screens menu"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border-2 border-black bg-[#E0AA3D] px-4 py-3 text-sm font-bold uppercase tracking-widest text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform active:translate-y-[2px] active:shadow-none"
      >
        <span aria-hidden>☰</span>
        <span className="hidden sm:inline">Screens</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute bottom-20 right-4 w-64 overflow-hidden rounded-md border-2 border-black bg-[#E0D0A5] shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b-2 border-black bg-[#9F1D21] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              Ridge Hall · Screens
            </div>
            <ul>
              {NAV.map((n) => (
                <li key={n.to} className="border-b border-black/20 last:border-b-0">
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-black hover:bg-[#E0AA3D]"
                    activeProps={{ className: "block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-black" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
