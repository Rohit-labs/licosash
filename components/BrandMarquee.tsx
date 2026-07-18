"use client";

import { Fragment, useRef } from "react";
import { useReveal } from "@/lib/reveal";

const BRANDS = ["NOVA", "Vélet", "Kairos", "ORBIT", "Lumen", "Saga", "Meridian"];

export default function BrandMarquee() {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  return (
    <section className="band" ref={scope}>
      <div className="band__head">
        <h2 data-reveal>
          Play <span className="serif">giant</span> on every platform.
        </h2>
        <p data-reveal data-delay="0.1">
          The influencer agency bringing enterprise platform strategies straight
          to your campaigns.
        </p>
      </div>
      <div className="marquee" data-reveal data-delay="0.2">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <Fragment key={copy}>
              {BRANDS.map((b) => (
                <Fragment key={`${copy}-${b}`}>
                  <span className="marquee__item">{b}</span>
                  <span className="marquee__dot" />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
