"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { BRANDS } from "@/lib/data";

export default function BrandsSection() {
  const [brandIndex, setBrandIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "500px" });

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % BRANDS.length);
    }, 1000); 
    
    return () => clearInterval(timer);
  }, [isInView]); // Removed BRANDS.length as it is static

  const currentBrand = BRANDS[brandIndex] || BRANDS[0];

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
         {isInView && <video ref={videoRef} autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/brands-background.mp4" type="video/mp4" />
         </video>}
         {/* Center mask to hide baked-in logos */}
         <div className="absolute inset-0 bg-black/30" />
         <div 
           className="absolute inset-0 backdrop-blur-[60px]" 
           style={{ 
             maskImage: 'radial-gradient(circle at 50% 45%, black 0%, black 25%, transparent 65%)',
             WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black 0%, black 25%, transparent 65%)'
           }} 
         />
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-16 text-center px-8 -mt-20">
         <motion.h3 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-xl md:text-2xl font-bold uppercase tracking-[0.4em] text-white/40"
         >
           Brands we've grown
         </motion.h3>

         <div className="flex items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBrand.name}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center relative h-20 md:h-40 w-40 md:w-80"
              >
                <Image 
                  src={currentBrand.logo} 
                  alt={currentBrand.name} 
                  fill
                  sizes="(max-width: 768px) 160px, 320px"
                  className="object-contain opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] invert brightness-0 saturate-100"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </section>
  );
}
