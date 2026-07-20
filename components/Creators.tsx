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
  src: string;
}[] = [
  { name: "Aarav Mehta", handle: "@aaravcreates", niche: "Tech", tone: "deep", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { name: "Sofia Reyes", handle: "@sofiaglow", niche: "Beauty", tone: "clay", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
  { name: "Kai Tanaka", handle: "@kaidaily", niche: "Lifestyle", tone: "moss", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" },
  { name: "Priya Nair", handle: "@priyaeats", niche: "Food", tone: "sand", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Leo Whitman", handle: "@leomoves", niche: "Fitness", tone: "pine", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" },
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
      transform: `translateX(${off * 50}%) scale(${off === 0 ? 1 : 0.82}) rotateY(${off * -9}deg)`,
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
                  <Media src={c.src} alt={c.name} />
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
