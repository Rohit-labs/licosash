"use client";

import { useRef, useState } from "react";
import { useReveal } from "@/lib/reveal";
import Media from "./Media";
import { ArrowRight } from "./icons";

export default function Contact() {
  const scope = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  useReveal(scope);

  return (
    <section id="talk" className="contact" ref={scope}>
      <div className="container">
        <div className="contact__grid">
          <div className="contact__copy">
            <span className="eyebrow" data-reveal>
              Let&apos;s Talk
            </span>
            <h2 className="h2" data-reveal data-delay="0.08" style={{ marginTop: 18 }}>
              Let&apos;s build something{" "}
              <span className="serif serif--teal">together.</span>
            </h2>
            <p className="lead" data-reveal data-delay="0.14">
              Every great campaign starts with a conversation.
            </p>

            {sent ? (
              <p className="contact__sent" style={{ marginTop: 36 }}>
                Thank you — we&apos;ll get back to you within 24 hours.
              </p>
            ) : (
              <form
                className="contact__form"
                data-reveal
                data-delay="0.2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="field">
                  <input name="name" placeholder="Your name" required aria-label="Your name" />
                </div>
                <div className="field">
                  <input name="company" placeholder="Company" aria-label="Company" />
                </div>
                <div className="field">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    aria-label="Email"
                  />
                </div>
                <div className="field">
                  <input
                    name="message"
                    placeholder="What are we building together?"
                    aria-label="What are we building together?"
                  />
                </div>
                <button type="submit" className="btn btn--dark">
                  Let&apos;s Talk <ArrowRight />
                </button>
              </form>
            )}
          </div>

          <div className="contact__media" data-reveal data-delay="0.15">
            <Media tone="pine" label="motion reel / brand video" />
            <div className="contact__quote">
              Creative. Unique. Made for marketing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
