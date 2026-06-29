"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AutoVideoLoop({ videos, interval, opacity = 1 }: { videos: string[], interval: number, opacity?: number }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "500px" });

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => { setIndex((prev) => (prev + 1) % videos.length); }, interval);
    return () => clearInterval(timer);
  }, [videos.length, interval, isInView]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden">
      {isInView && videos.map((video, i) => (
        <motion.div 
          key={video} 
          initial={{ opacity: i === index ? opacity : 0, scale: i === index ? 1.1 : 1 }}
          animate={{ opacity: i === index ? opacity : 0, scale: i === index ? 1.1 : 1 }} 
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: interval / 1000, ease: "linear" }
          }} 
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: i === index ? "auto" : "none" }}
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
      ))}
    </div>
  );
}
