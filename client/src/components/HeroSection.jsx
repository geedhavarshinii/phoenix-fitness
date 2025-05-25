import { motion } from "framer-motion";
import PhoenixSVG from "../assets/phoenix-firebird-svgrepo-com.svg";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-phoenixPink/20 via-white to-white">
      {/* <motion.img
            src = {PhoenixSVG}
            alt = "Phoenix Bird"
            className='absolute bottom-0 left-1/2 h-52 w-auto -translate-x-1/2'
            initial = {{ y: '100%', opacity: 0}}
            animate = {{ y: 0, opacity: 1}}
            transition= {{ duration: 1.6, ease: 'easeOut'}}
            /> */}
      <img
        src={PhoenixSVG}
        className="absolute bottom-0 left-1/2 h-52 -translate-x-1/2 animate-rise pointer-events-none"
        alt="Phoenix"
      />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center"
        initial={{ y: "20%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-phoenixOrange drop-shadow">
          Phoenix Fitness Centre
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-phoenixPink">
          Start your fitness journey today
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-phoenixOrange px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
        >
          Join us
        </a>
      </motion.div>
    </section>
  );
}
