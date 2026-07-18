"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Animates every child tagged [data-reveal] inside the scope with a calm
 * fade-and-rise as it enters the viewport. Optional `data-delay="0.2"` on the
 * element offsets its start. Skipped entirely under prefers-reduced-motion.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const els = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope.current);
        els.forEach((el) => {
          gsap.from(el, {
            y: 34,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            delay: parseFloat(el.dataset.delay ?? "0"),
            scrollTrigger: { trigger: el, start: "top 84%", once: true },
          });
        });
      });
    },
    { scope }
  );
}
