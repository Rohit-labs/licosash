"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Featured Work" },
  { href: "#creators", label: "Creators" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 160) setHidden(false);
      else if (y > last + 4) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`nav${scrolled && !open ? " is-scrolled" : ""}${
          hidden && !open ? " is-hidden" : ""
        }${open ? " menu-open" : ""}`}
      >
        <div className="nav__inner">
          <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
            LICOSASH<em>.</em>
          </a>
          <div className="nav__links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">
                {l.label}
              </a>
            ))}
            <a href="#talk" className="btn btn--teal nav__cta">
              Let&apos;s Talk
            </a>
            <button
              className="nav__burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div>
          {[...LINKS, { href: "#talk", label: "Let's Talk" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="menu__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="menu__foot">
          PAN INDIA · HELLO@LICOSASH.COM
        </div>
      </div>
    </>
  );
}
