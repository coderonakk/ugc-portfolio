import { useEffect, useRef, useState } from "react";
import { profile, videos } from "../data";
import Hand from "./Hand";
import Reveal from "./Reveal";

function VideoCard({ v, playing, onToggle }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [playing]);

  return (
    <div className="w-[68%] shrink-0 snap-center sm:w-[44%] md:w-auto">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-line bg-card">
        {v.src ? (
          <>
            <video
              ref={ref}
              src={v.src}
              poster={v.poster || undefined}
              preload="none"
              playsInline
              loop
              className="h-full w-full object-cover"
              onClick={() => onToggle(v.id)}
            />
            {!playing && (
              <button
                aria-label="Play video"
                onClick={() => onToggle(v.id)}
                className="absolute inset-0 flex items-center justify-center bg-black/25"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink pl-1 text-xl text-black">
                  ▶
                </span>
              </button>
            )}
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <span className="text-3xl">▶</span>
            <span className="text-xs">Video coming soon</span>
          </div>
        )}
      </div>

      <div className="mt-3 px-1">
        {v.views ? (
          <p className="font-hand text-3xl leading-none font-bold text-accent">
            {v.views}
          </p>
        ) : (
          v.note && (
            <p className="text-sm leading-snug font-medium text-ink/80">
              {v.note}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default function Videos() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          My <Hand underline>best work</Hand>
        </h2>
      </Reveal>

      <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
        {videos.map((v) => (
          <VideoCard
            key={v.id}
            v={v}
            playing={playingId === v.id}
            onToggle={(id) => setPlayingId(playingId === id ? null : id)}
          />
        ))}
      </div>

      <a
        href={profile.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block text-sm font-semibold underline underline-offset-4"
      >
        See more on Instagram ↗
      </a>
    </section>
  );
}
