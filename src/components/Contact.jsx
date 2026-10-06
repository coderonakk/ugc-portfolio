import { motion } from "framer-motion";
import { profile } from "../data";
import { waLink } from "./Hero";
import Hand from "./Hand";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 pt-14 pb-10">
      <Reveal>
        <div className="border-t border-line pt-14 text-center">
          <h2 className="text-5xl leading-[1] font-extrabold tracking-tight md:text-7xl">
            Let's make your next
            <br />
            <Hand underline className="mt-2">
              viral video
            </Hand>
          </h2>

          <motion.a
            whileTap={{ scale: 0.97 }}
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-ink px-10 py-4 font-semibold text-black"
          >
            Work with me
          </motion.a>

          <div className="mt-8 flex flex-col items-center gap-2">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4"
            >
              {profile.handle}
            </a>
            <a href={`mailto:${profile.email}`} className="break-all text-muted">
              {profile.email}
            </a>
          </div>
        </div>
      </Reveal>

      <p className="mt-14 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
