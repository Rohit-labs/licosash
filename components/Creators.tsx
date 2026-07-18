"use client";

import { useRef, useState, type CSSProperties } from "react";
import { useReveal } from "@/lib/reveal";
import Media, { type MediaTone } from "./Media";
import { ChevronLeft, ChevronRight } from "./icons";

const CREATORS: {
  name: string;
  handle: string;
  niche: string;
  tone: MediaTone;
}[] = [
  { name: "Aarav Mehta", handle: "@aaravcreates", niche: "Tech", tone: "deep" },
  { name: "Sofia Reyes", handle: "@sofiaglow", niche: "Beauty", tone: "clay" },
  { name: "Kai Tanaka", handle: "@kaidaily", niche: "Lifestyle", tone: "moss" },
  { name: "Priya Nair", handle: "@priyaeats", niche: "Food", tone: "sand" },
  { name: "Leo Whitman", handle: "@leomoves", niche: "Fitness", tone: "pine" },
];

export default function Creators() {
  const scope = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(2);
  useReveal(scope);

  const n = CREATORS.length;
  const cardStyle = (i: number): CSSProperties => {
    let off = i - current;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const abs = Math.abs(off);
    return {
      transform: `translateX(${off * 62}%) scale(${off === 0 ? 1 : 0.82}) rotateY(${off * -9}deg)`,
      opacity: abs > 2 ? 0 : 1 - abs * 0.28,
      zIndex: 20 - abs,
      filter: off === 0 ? "none" : "brightness(0.92)",
      pointerEvents: abs > 2 ? "none" : "auto",
    };
  };

  return (
    <section id="creators" className="creators" ref={scope}>
      <div className="container">
        <div className="creators__head">
          <span className="eyebrow" data-reveal>
            The Right Voices
          </span>
          <h2 className="h2" data-reveal data-delay="0.08">
            The right <span className="serif serif--teal">voices.</span>
          </h2>
          <p data-reveal data-delay="0.16">
            Every collaboration begins with finding the right creator for the
            story.
          </p>
        </div>

        <div className="creators__stage" data-reveal data-delay="0.2">
          <div className="creators__ring">
            {CREATORS.map((c, i) => (
              <div
                key={c.name}
                className="creator-card"
                style={cardStyle(i)}
                onClick={() => setCurrent(i)}
                role="button"
                tabIndex={i === current ? -1 : 0}
                aria-label={`Focus ${c.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setCurrent(i);
                }}
              >
                <div className="creator-card__img">
                  <Media tone={c.tone} label="creator" />
                </div>
                <div className="creator-card__name">{c.name}</div>
                <div className="creator-card__meta">
                  {c.handle} · {c.niche}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="creators__nav">
          <button
            aria-label="Previous creator"
            onClick={() => setCurrent((c) => (c - 1 + n) % n)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next creator"
            onClick={() => setCurrent((c) => (c + 1) % n)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
