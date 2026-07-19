"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Media from "./Media";
import { ArrowRight, ChevronLeft, ChevronRight, GridIcon } from "./icons";

const SLIDES = [
  {
    label: "Celebrity Campaigns",
    text: "Placing our clients' needs at the heart of every project — ensuring reach that actually earns trust.",
  },
  {
    label: "Owned 20+ Set Studio",
    text: "From podcast sets to wedding backdrops — shot on our sets, on our clock, no rental scramble.",
  },
  {
    label: "18,000+ Vetted Creators",
    text: "The right voice for every brand truth — matched by fit, not just follower count.",
  },
];

const CHIPS = ["Client-Centric", "Celebrity Access", "Owned Studio", "Craft-Led"];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();
        tl.from(".hero__line-inner", {
          yPercent: 112,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.14,
        }, 0.1)
          .from(
            [".hero__lead", ".hero__actions"],
            { y: 26, autoAlpha: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 },
            0.55
          )
          .from(
            ".hero__media",
            { y: 48, autoAlpha: 0, duration: 1.1, ease: "power3.out" },
            0.7
          )
          .from(
            ".hero__chip",
            { y: 18, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.07 },
            1.05
          );

        gsap.to(".hero__frame .media", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero__media",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope }
  );

  const active = SLIDES[slide];

  return (
    <header id="top" className="hero" ref={scope}>
      <div className="container">
        <div className="hero__grid">
          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__line-inner">
                Built with <span className="serif--teal">thought</span>
              </span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">
                delivered with <span className="serif--teal">purpose</span><span className="dot">.</span>
              </span>
            </span>
          </h1>
          <div>
            <p className="hero__lead">
              Human-first influencer &amp; celebrity marketing that turns reach
              into trust — and trust into business.
            </p>
            <div className="hero__actions">
              <a href="#talk" className="btn btn--teal">
                Start your campaign <ArrowRight />
              </a>
              <a href="#capabilities" className="hero__secondary">
                <span className="hero__secondary-icon">
                  <GridIcon />
                </span>
                Capabilities
              </a>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__frame">
            <Media tone="deep" label="studio + celebrity campaign still" />
            <div className="hero__scrim" />
          </div>
          <aside
            className="hero__card"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="hero__card-main" key={slide}>
              <p>{active.text}</p>
              <span className="hero__card-label">{active.label}</span>
            </div>
            <div className="hero__card-foot">
              <span className="hero__card-counter">
                {pad(slide + 1)}/{pad(SLIDES.length)}
              </span>
              <div className="hero__card-nav">
                <button
                  aria-label="Previous highlight"
                  onClick={() =>
                    setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)
                  }
                >
                  <ChevronLeft />
                </button>
                <button
                  aria-label="Next highlight"
                  onClick={() => setSlide((s) => (s + 1) % SLIDES.length)}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </aside>
        </div>

        <ul className="hero__chips">
          {CHIPS.map((c) => (
            <li key={c} className="hero__chip">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
