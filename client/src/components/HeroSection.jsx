// src/components/HeroSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
// import PhoenixSVG from "../assets/phoenix-firebird-svgrepo-com.svg";
// import WomanWorkOut from "../assets/woman-work-out.webp";
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  // ⬇︎ flips to “false” when the intro overlay slides away
  // const [introDone, setIntroDone] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ───────────────────────────────────────────
          STAGE ❶  ▸  MAIN HERO  (always rendered)
      ─────────────────────────────────────────── */}
      {/* <img */}
        {/* src={WomanWorkOut}
        alt="Woman working out"
        className="absolute inset-0 h-full w-full object-cover"
      /> */}

      {/* quote + CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        {/* subtle dark overlay for text legibility */}
        <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 via-pink-400/30 to-orange-300/20 backdrop-blur-[10px]" /> */}

        <div className="relative z-10 max-w-3xl text-phoenixPink">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent space-y-20">
            Phoenix Fitness Centre
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-orange-300 font-semibold">
             <Typewriter
    words={[
      '“Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.”',
    ]}
    cursor
    cursorStyle="|"
    typeSpeed={45}
    deleteSpeed={0}   // no deleting
    delaySpeed={1000} // optional pause before typing starts
    loop={1}
  />
          </p>

          <a
            href="#about"
            className="mt-8 inline-block rounded-full bg-phoenixPink px-8 py-3 text-lg font-bold shadow-lg transition hover:bg-pink-700 text-phoenixWhite animate-pulse hover:animate-none"
          >
            Start Now
          </a>
        </div>
      </div>
      {/* <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100"><path d="M0 0h1440L0 100z" fill="#fff"/></svg> */}

      {/* ───────────────────────────────────────────
          STAGE ❷  ▸  INTRO COVER  (slides away)
      ─────────────────────────────────────────── */}
      {/* {!introDone && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-phoenixPink via-white to-white z-30 overflow-hidden" */}
          /* slide whole cover up after bird finishes */
          {/* initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ delay: 0, duration: 0.4, ease: "easeInOut" }}
          onAnimationComplete={() => setIntroDone(true)}
        > */}
          {/* phoenix rising */}
          {/* <motion.img
            src={PhoenixSVG}
            alt="Phoenix Bird"
            className="absolute bottom-0 left-1/2 h-52 -translate-x-1/2 pointer-events-none"
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            animate={{ y: "-80%", opacity: 0 }}
          />
        </motion.div>
      )} */}
    </section>
  );
};

export default HeroSection;
