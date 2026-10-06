import { MotionConfig } from "framer-motion";
import Hero, { waLink } from "./components/Hero";
import Marquee from "./components/Marquee";
import Experience from "./components/Experience";
import Videos from "./components/Videos";
import Offer from "./components/Offer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* pb-28 on mobile so the sticky button never covers content */}
      <main className="pb-28 md:pb-0">
        <Hero />
        <Marquee />
        <Experience />
        <Videos />
        <Offer />
        <Contact />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-bg via-bg/90 to-transparent px-5 pt-6 pb-4 md:hidden">
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="block rounded-full bg-ink py-3.5 text-center font-semibold text-black"
        >
          Work with me
        </a>
      </div>
    </MotionConfig>
  );
}
