"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/reveal";
import Media from "./Media";

const STATS = [
  { n: 18000, suffix: "+", label: "Vetted creators" },
  { n: 20, suffix: "+", label: "Owned studio sets" },
  { n: 250, suffix: "+", label: "Campaigns delivered" },
];

export default function About() {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".collage > div", {
          y: 44,
          autoAlpha: 0,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".collage", start: "top 80%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]", scope.current).forEach((el) => {
        const target = parseFloat(el.dataset.count ?? "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate() {
            el.textContent = Math.round(obj.v).toLocaleString("en-IN");
          },
        });
      });
    },
    { scope }
  );

  return (
    <section id="about" className="about" ref={scope}>
      <div className="container">
        <div className="about__grid">
          <div className="collage">
            <div className="collage__tall">
              <Media src="/about_1.jpg" alt="Creator Leadership" />
            </div>
            <div>
              <Media src="/about_2.jpg" alt="Content Creation" objectPosition="center 20%" />
            </div>
            <div>
              <Media src="/about_3.jpg" alt="Brand Endorsement Campaign" objectPosition="center top" />
            </div>
          </div>
          <div className="about__copy">
            <span className="eyebrow" data-reveal>
              About Licosash™
            </span>
            <h2 className="h2" data-reveal data-delay="0.08">
              We don&apos;t just connect brands with creators. We create
              campaigns people{" "}
              <span className="serif serif--teal">remember.</span>
            </h2>
            <p className="lead" data-reveal data-delay="0.16">
              From first brief to final cut, we build creator-led campaigns end
              to end — strategy, casting, production and reporting under one
              roof. The result is work that earns attention and moves the
              numbers that matter.
            </p>
            <div className="stats" data-reveal data-delay="0.24">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="stat__num">
                    <span data-count={s.n}>0</span>
                    <em>{s.suffix}</em>
                  </div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
