"use client";

import { useRef, useState } from "react";
import { useReveal } from "@/lib/reveal";
import Media, { type MediaTone } from "./Media";

const CAPS: { title: string; body: string; tone: MediaTone; src: string }[] = [
  {
    title: "Extended Arm",
    body: "LICOSASH™ acts as your dedicated influencer desk, managing end-to-end creator campaigns (scouting, negotiation, execution, reporting), engineered to earn attention and move metrics.",
    tone: "deep",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Expertise On-demand",
    body: "We bring niche expertise in influencer trends, categories, and pricing — knowledge that would otherwise take time to build in-house via a 'speed-dial access' to A-list talents and rising stars spanning diverse niches and types.",
    tone: "pine",
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Scalability & Flexibility",
    body: "Whether it's one-off influencer seeding or a large-scale campaign, LICOSASH™ adapts instantly — something an in-house setup cannot do without recurring costs.",
    tone: "moss",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Addressing creative fatigue",
    body: "Sync the brand objectives by leveraging effective storytelling techniques by understanding the audience, being authentic and adopting best practices.",
    tone: "clay",
    src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Capabilities() {
  const scope = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useReveal(scope);

  return (
    <section id="capabilities" className="caps" ref={scope}>
      <div className="container">
        <div className="caps__head">
          <span className="eyebrow" data-reveal>
            Our Capabilities
          </span>
          <h2 className="h2" data-reveal data-delay="0.08">
            Scope and <span className="serif serif--teal">Deliverables.</span>
          </h2>
        </div>
        <div className="caps__grid">
          <div data-reveal data-delay="0.1">
            {CAPS.map((c, i) => (
              <div key={c.title} className={`cap${i === active ? " is-open" : ""}`}>
                <button
                  className="cap__row"
                  aria-expanded={i === active}
                  onClick={() => setActive(i)}
                  suppressHydrationWarning
                >
                  <span className="cap__title">{c.title}</span>
                  <span className="cap__icon" aria-hidden="true" />
                </button>
                <div className="cap__body">
                  <div className="cap__body-inner">
                    <p>{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="caps__media" data-reveal data-delay="0.18">
            {CAPS.map((c, i) => (
              <div
                key={c.title}
                className={`caps__layer${i === active ? " is-active" : ""}`}
              >
                <Media src={c.src} alt={c.title} />
                <span className="caps__layer-name">{c.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
