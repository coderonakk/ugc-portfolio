import { services } from "../data";

// Slow scrolling strip of what you offer. Pure CSS, so it stays smooth.
export default function Marquee() {
  const words = services.map((s) => s.title);
  const half = [...words, ...words, ...words];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b border-line bg-bg py-5"
    >
      <div className="marquee flex w-max">
        {[0, 1].map((n) => (
          <div key={n} className="flex shrink-0">
            {half.map((w, i) => (
              <div key={i} className="flex shrink-0 items-center pr-10">
                <span className="text-2xl font-bold tracking-tight whitespace-nowrap md:text-3xl">
                  {w}
                </span>
                <span className="pl-10 text-xl text-accent">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
