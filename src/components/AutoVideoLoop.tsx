"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AutoVideoLoop({
  videos,
  interval,
  opacity = 1,
}: {
  videos: string[];
  interval: number;
  opacity?: number;
}) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "500px" });
  const [hasLoadedFirst, setHasLoadedFirst] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [videos.length, interval, isInView]);

  useEffect(() => {
    if (!isInView || hasLoadedFirst) return;

    const timer = setTimeout(() => {
      setHasLoadedFirst(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [isInView, hasLoadedFirst]);

  const nextIndex = (index + 1) % videos.length;

  return (
    <div
      ref={ref}
      className="absolute inset-0 w-full h-full overflow-hidden bg-black/20"
    >
      {isInView &&
        videos.map((video, i) => {
          if (i !== 0 && !hasLoadedFirst) return null;

          return (
            <motion.div
              key={`${video}-${i}`}
              initial={{
                opacity: i === index ? opacity : 0,
                scale: i === index ? 1.1 : 1,
              }}
              animate={{
                opacity: i === index ? opacity : 0,
                scale: i === index ? 1.1 : 1,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: interval / 1000, ease: "linear" },
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                pointerEvents: i === index ? "auto" : "none",
                zIndex: i === index ? 1 : 0,
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload={
                  i === index
                    ? "auto"
                    : i === nextIndex || hasLoadedFirst
                      ? "metadata"
                      : "none"
                }
                onLoadedData={
                  i === 0 ? () => setHasLoadedFirst(true) : undefined
                }
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
