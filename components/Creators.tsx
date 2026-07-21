"use client";

import { useRef, useState, type CSSProperties } from "react";
import { useReveal } from "@/lib/reveal";
import Media, { type MediaTone } from "./Media";
import { ChevronLeft, ChevronRight, InstagramIcon } from "./icons";

const CREATORS: {
  name: string;
  handle: string;
  niche: string;
  tone: MediaTone;
  src: string;
  url: string;
}[] = [
  {
    name: "Aishwarya",
    handle: "@_theyogagirl",
    niche: "Wellness & Health",
    tone: "deep",
    src: "/reel_1.jpg",
    url: "https://www.instagram.com/reel/C80xtUdI1aa/",
  },
  {
    name: "Michael Ajay",
    handle: "@michaelajayofficial",
    niche: "Fitness & Lifestyle",
    tone: "pine",
    src: "/reel_2.jpg",
    url: "https://www.instagram.com/reel/C9AYs5iSWxd/",
  },
  {
    name: "Anita Chandhoke",
    handle: "@anita_chandhoke",
    niche: "Ayurveda & Living",
    tone: "clay",
    src: "/reel_3.jpg",
    url: "https://www.instagram.com/reel/C9AE0G8SBaX/",
  },
  {
    name: "Gaurav Khanna",
    handle: "@gauravkhannaofficial",
    niche: "Entertainment & Style",
    tone: "moss",
    src: "/reel_4.jpg",
    url: "https://www.instagram.com/reel/CsF1JLSA0kg/",
  },
  {
    name: "Abijeet Duddala",
    handle: "@abijeet11",
    niche: "Travel & Lifestyle",
    tone: "sand",
    src: "/reel_5.jpg",
    url: "https://www.instagram.com/reel/DGVbQS7pzgy/",
  },
  {
    name: "Kalyani Soudi",
    handle: "@kalyani_soudi",
    niche: "Fashion & Trends",
    tone: "deep",
    src: "/reel_6.jpg",
    url: "https://www.instagram.com/reel/DFfQtHtof33/",
  },
  {
    name: "Natasha Luthra",
    handle: "@thestylechair",
    niche: "Beauty & Fragrance",
    tone: "pine",
    src: "/reel_7.jpg",
    url: "https://www.instagram.com/reel/DBa1dmxKCpM/",
  },
];

export default function Creators() {
  const scope = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(3);
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

  const handleCardClick = (i: number, url: string) => {
    if (i === current) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      setCurrent(i);
    }
  };

  return (
    <section id="creators" className="creators" ref={scope}>
      <div className="container">
        <div className="creators__head">
          <span className="eyebrow" data-reveal>
            Our Creators
          </span>
          <h2 className="h2" data-reveal data-delay="0.08">
            The right <span className="serif serif--teal">voices.</span>
          </h2>
          <p data-reveal data-delay="0.16">
            Every collaboration begins with finding the right creator for the
            story. Click any creator to watch their Reel on Instagram.
          </p>
        </div>

        <div className="creators__stage" data-reveal data-delay="0.2">
          <div className="creators__ring">
            {CREATORS.map((c, i) => (
              <div
                key={c.url}
                className="creator-card"
                style={cardStyle(i)}
                onClick={() => handleCardClick(i, c.url)}
                role="button"
                tabIndex={0}
                aria-label={`View ${c.name}'s Reel`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(i, c.url);
                  }
                }}
              >
                <div className="creator-card__img">
                  <Media src={c.src} alt={c.name} />
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="creator-card__watch-badge"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${c.name}'s Reel in new tab`}
                  >
                    <InstagramIcon size={14} />
                    Watch Reel ↗
                  </a>
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
