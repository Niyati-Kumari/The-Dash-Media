"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AutoVideoLoop from "./AutoVideoLoop";
import { HERO_VIDEOS } from "@/lib/data";

export default function HeroSequence() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <AutoVideoLoop videos={HERO_VIDEOS} interval={4000} />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6">
         <motion.div style={{ y: textY }}>
           <h1 className="text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] font-black tracking-tighter leading-[0.85] uppercase text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
             THE <br className="md:hidden" /> DASH <br className="md:hidden" /> MEDIA
           </h1>
           <p className="text-[10px] md:text-sm lg:text-lg font-bold tracking-[0.4em] uppercase mt-6 text-white/90 drop-shadow-md">Lead by Design</p>
         </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </div>
    </section>
  );
}
