"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();

  return (
    <div className="topbar">
      <div className="brand">
        <span className="dot" />
        <span>Ground Control LLC</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
        <div className="pill">IA · NE · KS · MO · SD · CO</div>
        <nav className="nav" aria-label="Primary">
          {tabs.map((t) => {
            const active = path === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`tab ${active ? "tabActive" : ""}`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
