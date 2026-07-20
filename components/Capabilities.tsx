"use client";

import { useRef, useState } from "react";
import { useReveal } from "@/lib/reveal";
import Media, { type MediaTone } from "./Media";

const CAPS: { title: string; body: string; tone: MediaTone; src: string }[] = [
  {
    title: "Influencer Marketing",
    body: "Full-funnel creator campaigns — from strategy and casting to briefing, delivery and reporting — engineered to earn attention and move metrics.",
    tone: "deep",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Celebrity Collaborations",
    body: "Access to A-list talent and rising stars, with negotiation, rights and rollout handled end to end.",
    tone: "pine",
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Campaign Strategy",
    body: "Platform-native strategy grounded in data — the right message, format and creator mix for every objective.",
    tone: "moss",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Content Production",
    body: "In-house and outsourced studio support for pre- and post-production, editing, and scroll-stopping creative.",
    tone: "clay",
    src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Brand Partnerships",
    body: "Long-term ambassador programs and co-created series that turn one campaign into an ongoing relationship.",
    tone: "sand",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
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
            What we <span className="serif serif--teal">do</span> — end-to-end
            influencer marketing.
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
