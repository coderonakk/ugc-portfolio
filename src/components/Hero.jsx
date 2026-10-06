import { useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "../data";
import Hand from "./Hand";

export const waLink = () =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=workwithronakk@gmail.com`;

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="mx-auto max-w-5xl px-5 pt-10 pb-12 md:pt-20">
      <div className="grid items-center gap-8 md:grid-cols-[1.15fr_1fr] md:gap-14">
        {/* Photo: on top on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-[340px] md:order-last md:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-card">
            {imgOk ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-6xl font-extrabold text-muted">
                {initials}
              </div>
            )}
            <span className="font-hand absolute bottom-3 left-3 -rotate-3 rounded-full bg-accent px-4 py-1 text-xl font-bold text-black">
              {profile.role} ✦
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-5xl leading-[0.95] font-extrabold tracking-tight break-words sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl leading-snug font-semibold md:text-3xl">
            {profile.tagline}{" "}
            <Hand underline>{profile.taglineHand}</Hand>
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-8 py-3.5 text-center font-semibold text-black"
            >
              Work with me
            </motion.a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-8 py-3.5 text-center font-semibold"
            >
              {profile.handle}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 grid grid-cols-3 divide-x divide-line border-y border-line py-6">
        {stats.map((s) => (
          <div key={s.label} className="px-3 first:pl-0 sm:px-6">
            <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
              {s.value}
            </div>
            <div className="font-hand mt-1 text-xl text-accent md:text-2xl">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
