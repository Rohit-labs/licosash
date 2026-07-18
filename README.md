# Licosash — Influencer & Celebrity Marketing

A minimalist, premium Next.js landing page built from the Licosash wireframe.
Warm ivory paper, one confident teal accent, near-black ink — with calm,
editorial GSAP animation.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Stack

- **Next.js 15** (App Router, static prerender) + React 19 + TypeScript
- **GSAP + @gsap/react** — ScrollTrigger reveals, hero line-mask intro,
  parallax, animated counters; all skipped under `prefers-reduced-motion`
- Hand-written CSS design system in `app/globals.css` (tokens at the top)
- Fonts via `next/font`: **Black Mango** (local display serif), Newsreader,
  Space Grotesk, Space Mono, Jost

## Swapping in real imagery

Every visual placeholder is a `<Media />` component
(`components/Media.tsx`). Drop files into `public/` and pass `src`:

```tsx
<Media src="/campaigns/hero.jpg" alt="Campaign still" />
```

Until then it renders an art-directed brand gradient with a mono label.

## Structure

| Section | File | Animation |
| --- | --- | --- |
| Nav + mobile menu | `components/Nav.tsx` | Frosted on scroll, hides on scroll-down, clip-path menu |
| Hero | `components/Hero.tsx` | Line-mask headline, parallax media, auto-rotating info card |
| Brand band | `components/BrandMarquee.tsx` | Seamless marquee, pauses on hover |
| About | `components/About.tsx` | Collage stagger, count-up stats |
| Capabilities | `components/Capabilities.tsx` | Accordion + sticky crossfading media |
| Featured work | `components/FeaturedWork.tsx` | Floating tablet carousel, auto-advance |
| Creators | `components/Creators.tsx` | 3D coverflow carousel |
| Contact | `components/Contact.tsx` | Animated underline fields |
| Footer | `components/Footer.tsx` | — |
