import Image from "next/image";

export type MediaTone = "deep" | "pine" | "moss" | "clay" | "sand";

const TONES: Record<MediaTone, { bg: string; light: boolean }> = {
  deep: { bg: "linear-gradient(135deg, #0E2E28 0%, #1E7D6B 100%)", light: false },
  pine: { bg: "linear-gradient(150deg, #17201D 0%, #173F3A 100%)", light: false },
  moss: { bg: "linear-gradient(160deg, #2E4F45 0%, #6E8F7C 100%)", light: false },
  clay: { bg: "linear-gradient(140deg, #A98F66 0%, #6B5A3C 100%)", light: false },
  sand: { bg: "linear-gradient(140deg, #E7DBC2 0%, #C8B995 100%)", light: true },
};

type MediaProps = {
  tone?: MediaTone;
  label?: string;
  /** Drop a real image into /public and pass its path to replace the placeholder. */
  src?: string;
  alt?: string;
  className?: string;
};

export default function Media({
  tone = "deep",
  label,
  src,
  alt = "",
  className,
}: MediaProps) {
  const t = TONES[tone];
  return (
    <div
      className={`media${className ? ` ${className}` : ""}`}
      data-light={t.light || undefined}
      style={src ? undefined : { background: t.bg }}
      aria-hidden={src ? undefined : true}
    >
      {src ? (
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      ) : (
        <span className="media__glow" />
      )}
      {label && <span className="media__label">[ {label} ]</span>}
    </div>
  );
}
