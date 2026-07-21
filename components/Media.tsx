import Image from "next/image";

export type MediaTone = "deep" | "pine" | "moss" | "clay" | "sand";

const TONES: Record<MediaTone, { bg: string; light: boolean }> = {
  deep: { bg: "linear-gradient(135deg, #022D34 0%, #047384 100%)", light: false },
  pine: { bg: "linear-gradient(150deg, #17201D 0%, #034A55 100%)", light: false },
  moss: { bg: "linear-gradient(160deg, #047384 0%, #3598A7 100%)", light: false },
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
  objectPosition?: string;
};

export default function Media({
  tone = "deep",
  label,
  src,
  alt = "",
  className,
  objectPosition,
}: MediaProps) {
  const t = TONES[tone];
  return (
    <div
      className={`media${className ? ` ${className}` : ""}`}
      {...(t.light ? { "data-light": "true" } : {})}
      {...(src ? {} : { "aria-hidden": "true" })}
      style={src ? undefined : { background: t.bg }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: objectPosition ?? "center",
            display: "block",
          }}
        />
      ) : (
        <span className="media__glow" />
      )}
      {label && <span className="media__label">[ {label} ]</span>}
    </div>
  );
}
