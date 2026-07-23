"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/reveal";
import Media, { type MediaTone } from "./Media";
import { ArrowRight, ChevronLeft, ChevronRight } from "./icons";

const WORKS: {
  type: string;
  title: string;
  req: string;
  tone: MediaTone;
  src: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
}[] = [
  {
    type: "Audience & Consumption",
    title: "A Nation Hooked on Creator Content",
    req: "Over 650 Million Indian users actively consume content daily, turning creators into the most direct distribution channel for brands.",
    tone: "deep",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    stat1: { value: "~650 Mn", label: "Active Consumers" },
    stat2: { value: "55-60 Min", label: "Avg. Daily Time Spent" },
  },
  {
    type: "Creator Rise",
    title: "Authentic Voices Powering Engagement",
    req: "The creator pool has tripled since 2020, with high-converting Nano and Micro creators building deep trust and exceptional engagement rates.",
    tone: "pine",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    stat1: { value: "~4.5 Mn", label: "Creators (3X since 2020)" },
    stat2: { value: "Nano/Micro", label: "Highest Engagement Rates" },
  },
  {
    type: "Market Economy",
    title: "A Multi-Crore Advertising Shift",
    req: "Growing at a rapid 22% CAGR, creator marketing spends are led by e-Commerce and FMCG brands seeking high conversions.",
    tone: "moss",
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    stat1: { value: "₹3,000 Cr", label: "Market Size (22% CAGR)" },
    stat2: { value: "23% + 19%", label: "e-Commerce & FMCG Share" },
  },
  {
    type: "Format & Ecosystem",
    title: "Regional Formats and State Backing",
    req: "Culturally authentic regional narratives and short formats drive instant purchase intent, backed by major government initiatives.",
    tone: "clay",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    stat1: { value: "₹8,545 Cr", label: "Govt. Innovation Support" },
    stat2: { value: "Short Format", label: "Highest Purchase Influence" },
  },
];

export default function FeaturedWork() {
  const scope = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useReveal(scope);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % WORKS.length), 5200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="work" className="work" ref={scope}>
      <div className="container">
        <div className="work__head">
          <span className="eyebrow eyebrow--dark" data-reveal>
            Creator Economy
          </span>
          <h2 data-reveal data-delay="0.08">
            The Rise of <span className="serif">Creator Economy</span> in India.
          </h2>
        </div>

        <div
          className="tablet"
          data-reveal
          data-delay="0.15"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="tablet__nav tablet__nav--left"
            onClick={() => setIndex((i) => (i - 1 + WORKS.length) % WORKS.length)}
            aria-label="Previous campaign"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="tablet__nav tablet__nav--right"
            onClick={() => setIndex((i) => (i + 1) % WORKS.length)}
            aria-label="Next campaign"
          >
            <ChevronRight size={18} />
          </button>

          <div className="tablet__screen">
            <div
              className="tablet__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {WORKS.map((w) => (
                <article className="slide" key={w.title}>
                  <Media src={w.src} alt={w.title} />
                  <div className="slide__shade" />
                  <div className="slide__info">
                    <span className="slide__badge">{w.type}</span>
                    <h3>{w.title}</h3>
                    <p>{w.req}</p>
                    <div className="slide__stats-row">
                      <div className="slide__stat">
                        <span className="slide__stat-val">{w.stat1.value}</span>
                        <span className="slide__stat-lbl">{w.stat1.label}</span>
                      </div>
                      <div className="slide__stat">
                        <span className="slide__stat-val">{w.stat2.value}</span>
                        <span className="slide__stat-lbl">{w.stat2.label}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="work__dots" role="tablist" aria-label="Featured campaigns">
          {WORKS.map((w, i) => (
            <button
              key={w.title}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${w.title}`}
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
