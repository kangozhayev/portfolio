import clsx from "clsx";

type Props = { children: React.ReactNode; className?: string };

export default function GlassCard({ children, className }: Props) {
  return (
    <div
      className={clsx(
        // стекло
        "relative rounded-2xl border border-white/20 bg-white/10",
        "backdrop-blur-xl backdrop-saturate-150",
        // тень
        "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {/* лёгкий «шум» поверх (необязательно) */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-5 mix-blend-overlay
          [background-image:radial-gradient(1px_1px_at_10%_20%,#000_99%,transparent_100%),radial-gradient(1px_1px_at_30%_80%,#000_99%,transparent_100%),radial-gradient(1px_1px_at_70%_40%,#000_99%,transparent_100%),radial-gradient(1px_1px_at_90%_60%,#000_99%,transparent_100%)]
          [background-size:5px_5px,6px_6px,7px_7px,8px_8px]
        "
      />
      {children}
    </div>
  );
}
