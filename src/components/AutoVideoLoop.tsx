"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AutoVideoLoop({ videos, interval, opacity = 1 }: { videos: string[], interval: number, opacity?: number }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "500px" });

  const [hasLoadedFirst, setHasLoadedFirst] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => { setIndex((prev) => (prev + 1) % videos.length); }, interval);
    return () => clearInterval(timer);
  }, [videos.length, interval, isInView]);

  useEffect(() => {
    // Delay loading the subsequent videos to ensure the first one loads instantly
    const t = setTimeout(() => setHasLoadedFirst(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
      {isInView && videos.map((video, i) => {
        // Skip mounting non-first videos until the first has had time to load
        if (i !== 0 && !hasLoadedFirst) return null;

        return (
          <motion.div 
            key={video} 
            initial={{ opacity: i === index ? opacity : 0, scale: i === index ? 1.1 : 1 }}
            animate={{ opacity: i === index ? opacity : 0, scale: i === index ? 1.1 : 1 }} 
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: interval / 1000, ease: "linear" }
            }} 
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: i === index ? "auto" : "none", zIndex: i === index ? 1 : 0 }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload={i === 0 ? "auto" : "none"}
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        );
      })}
    </div>
  );
}
