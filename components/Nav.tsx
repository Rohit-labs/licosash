"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Featured Work" },
  { href: "#creators", label: "Creators" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    // Disable all ScrollTrigger instances during the smooth scroll transit
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((t) => t.disable(false, false));

    // Smooth scroll to the target section
    target.scrollIntoView({ behavior: "smooth" });

    // Detect when scrolling has ended using a debounce scroll listener
    let resolved = false;
    const resolveScroll = () => {
      if (resolved) return;
      resolved = true;

      window.removeEventListener("scroll", onScroll);
      clearTimeout(backupTimeout);
      clearTimeout(scrollDebounce);

      // Re-enable all ScrollTrigger instances
      triggers.forEach((t) => {
        t.enable(true, false);
      });
      // Force refresh positions and trigger visible animations immediately on arrival
      ScrollTrigger.refresh();
    };

    let scrollDebounce: NodeJS.Timeout;
    const onScroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(resolveScroll, 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Backup safety timeout in case the browser does not scroll (e.g., already at target)
    const backupTimeout = setTimeout(resolveScroll, 800);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
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
          open ? " menu-open" : ""
        }`}
      >
        <div className="nav__inner">
          <a href="#top" className="nav__logo" onClick={(e) => scrollToSection(e, "#top")}>
            <img src="/logo_nav.jpeg" alt="LICOSASH" className="nav__logo-img" />
          </a>
          <div className="nav__links">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav__link"
                onClick={(e) => scrollToSection(e, l.href)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#talk"
              className="btn btn--teal nav__cta"
              onClick={(e) => scrollToSection(e, "#talk")}
            >
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
              onClick={(e) => scrollToSection(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="menu__foot">
          PAN INDIA · ARVIND@LICOSASH.COM
        </div>
      </div>
    </>
  );
}
