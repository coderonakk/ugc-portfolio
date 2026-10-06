import { experience } from "../data";
import Hand from "./Hand";
import Reveal from "./Reveal";

function Logo({ brand, logo }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-ink md:h-14 md:w-14">
      {logo ? (
        <img
          src={logo}
          alt={`${brand} logo`}
          className="h-full w-full object-contain p-2"
        />
      ) : (
        <span className="text-xl font-extrabold text-black">{brand[0]}</span>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Top Brands I've <Hand underline>worked with</Hand>
        </h2>
      </Reveal>

      <div className="mt-10 border-b border-line">
        {experience.map((e, i) => {
          const Tag = e.link ? "a" : "div";
          const props = e.link
            ? { href: e.link, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Reveal key={e.brand} delay={i * 0.05}>
              <Tag
                {...props}
                className="flex items-center gap-4 border-t border-line py-5 md:gap-6 md:py-6"
              >
                <Logo brand={e.brand} logo={e.logo} />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-2xl font-bold tracking-tight md:text-4xl">
                    {e.brand}
                  </h3>
                  <p className="mt-0.5 text-xs tracking-widest text-muted uppercase md:hidden">
                    {e.category}
                  </p>
                </div>
                <span className="hidden text-sm tracking-widest text-muted uppercase md:block">
                  {e.category}
                </span>
              </Tag>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
