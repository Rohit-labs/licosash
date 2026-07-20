"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/reveal";
import Media, { type MediaTone } from "./Media";
import { ArrowRight, ChevronLeft, ChevronRight } from "./icons";

const WORKS: {
  type: string;
  title: string;
  req: string;
  brand: string;
  tone: MediaTone;
  src: string;
}[] = [
  {
    type: "Finance",
    title: "Scaling a Fintech Launch",
    req: "Drove 4.2M qualified impressions and 38k app installs across a 12-creator finance cohort.",
    brand: "NOVA Pay",
    tone: "deep",
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    type: "Sports",
    title: "Game Day Takeover",
    req: "A nationwide matchday activation with athlete creators — 9.1M reach in 72 hours.",
    brand: "ORBIT Athletics",
    tone: "pine",
    src: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    type: "Beauty",
    title: "The Glow Edit",
    req: "Creator-led tutorials that sold out the launch SKU in under two weeks.",
    brand: "Lumen Beauty",
    tone: "moss",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    type: "Tech",
    title: "Unboxed & Unfiltered",
    req: "A hero unboxing series that lifted branded search by 61% month over month.",
    brand: "Meridian Devices",
    tone: "clay",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
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
            Featured Work
          </span>
          <h2 data-reveal data-delay="0.08">
            Campaigns that <span className="serif">performed.</span>
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
                    <div className="slide__meta">
                      <span>{w.brand}</span>
                      <a href="#work" onClick={(e) => e.preventDefault()}>
                        Watch the reel <ArrowRight size={13} />
                      </a>
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
