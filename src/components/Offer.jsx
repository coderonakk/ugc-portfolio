import { services } from "../data";
import Hand from "./Hand";
import Reveal from "./Reveal";

export default function Offer() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          What I <Hand underline>offer</Hand>
        </h2>
      </Reveal>

      <div className="mt-10 border-b border-line">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="flex flex-col gap-2 border-t border-line py-6 md:flex-row md:items-baseline md:gap-8">
              <div className="flex items-baseline gap-4 md:w-1/2">
                <span className="font-hand w-9 shrink-0 text-3xl leading-none font-bold text-accent">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {s.title}
                </h3>
              </div>
              <p className="pl-[3.25rem] leading-relaxed text-muted md:w-1/2 md:pl-0">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
