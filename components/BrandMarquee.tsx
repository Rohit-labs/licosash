"use client";

import { Fragment, useRef } from "react";
import { useReveal } from "@/lib/reveal";

const BRANDS = [
  { name: "Dhootapapeshwar", src: "/brands/dhootapapeshwar.png" },
  { name: "Union Bank of India", src: "/brands/union_bank.svg" },
  { name: "Orientbell", src: "/brands/orientbell.png" },
  { name: "Emami", src: "/brands/emami.png" },
  { name: "Garnier", src: "/brands/garnier.svg" },
  { name: "Acne Squad", src: "/brands/acne_squad.png" },
  { name: "ChefKart", src: "/brands/chefkart.webp" },
  { name: "Fire-Boltt", src: "/brands/fireboltt.png" },
];

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
        <div className="marquee__track" suppressHydrationWarning>
          {[0, 1].map((copy) => (
            <Fragment key={copy}>
              {BRANDS.map((b) => (
                <Fragment key={`${copy}-${b.name}`}>
                  <img
                    src={b.src}
                    alt={b.name}
                    className="marquee__img"
                    suppressHydrationWarning
                    onError={(e) => {
                      // Hide the broken image icon if the file is missing/failed
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
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
