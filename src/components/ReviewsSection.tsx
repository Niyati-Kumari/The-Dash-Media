"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { REVIEWS } from "@/lib/data";

export default function ReviewsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4"
        >
          Voices of Success
        </motion.h2>
        <p className="text-xl text-white/40 uppercase tracking-widest font-bold">Trusted by Industry Leaders</p>
      </div>

      <div className="flex overflow-hidden group">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4"
        >
          {/* Double the array for seamless looping */}
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[360px] bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[32px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="relative h-6 md:h-8 w-24 md:w-32">
                    <Image 
                      src={review.logo} 
                      alt={review.company} 
                      fill
                      sizes="128px"
                      className="object-contain brightness-0 invert opacity-40 group-hover/card:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <span className="text-4xl font-serif text-white/10 group-hover:text-white/20 transition-colors">"</span>
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-white/80 mb-8 italic">
                  {review.content}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10 flex items-center justify-center font-bold text-sm md:text-lg shrink-0">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm">{review.name}</h4>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-tighter">{review.role} — {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background element */}
      <motion.div 
        style={{ x }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap uppercase tracking-tighter"
      >
        Excellence Excellence Excellence
      </motion.div>
    </section>
  );
}
