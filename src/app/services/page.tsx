"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { BACKGROUND_VIDEOS } from "@/lib/data";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Application Development",
    description:
      "End-to-end development of robust, scalable web apps built with modern frameworks and an emphasis on user experience.",
    video: BACKGROUND_VIDEOS[2],
  },
  {
    id: 2,
    title: "Server & Cloud Management",
    description:
      "Expert setup, optimization, and continuous management of secure cloud architectures and servers to ensure 99.9% uptime.",
    video: BACKGROUND_VIDEOS[0],
  },
  {
    id: 3,
    title: "Data Collection & Analytics",
    description:
      "Intelligent data pipelines and analytics platforms designed to extract actionable business insights from complex data sets.",
    video: BACKGROUND_VIDEOS[1],
  },
  {
    id: 4,
    title: "AI & Chatbots",
    description:
      "AI-powered solutions including intelligent automation flows and custom chatbots to elevate customer engagement and efficiency.",
    video: BACKGROUND_VIDEOS[1],
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Seamless connection of third-party platforms into your existing ecosystem through secure and efficient API workflows.",
    video: BACKGROUND_VIDEOS[2],
  },
  {
    id: 6,
    title: "Cloud & DevOps Solutions",
    description:
      "Automated deployment pipelines and infrastructure as code to accelerate secure feature delivery and system scalability.",
    video: BACKGROUND_VIDEOS[0],
  },
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main
      className="bg-black text-white min-h-screen font-sans"
      style={{ overflowX: "clip" }}
    >
      <Header />

      <section className="relative w-full bg-black">
        {/* Sticky Backgrounds */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          {SERVICES_DATA.map((item, i) => (
            <div
              key={item.id}
              className="absolute inset-0"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transition: "opacity 450ms ease-in-out",
                zIndex: activeIndex === i ? 2 : 1,
                pointerEvents: "none",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload={activeIndex === i ? "auto" : "metadata"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.5)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Normal Scrolling Content (Never stops) */}
        <div className="relative z-10 -mt-[100vh] w-full flex flex-col">
          {SERVICES_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              className="w-full flex flex-col"
              onViewportEnter={() => setActiveIndex(i)}
              viewport={{ margin: "-40% 0px -40% 0px" }} // Triggers when the item is in the center 20% of the screen
            >
              <div className="h-screen w-full flex items-center justify-center relative">
                {/* Main heading */}
                <div className="relative w-full max-w-[1400px] px-6 sm:px-10 lg:px-20 xl:px-24 pointer-events-auto">
                  <h3 className="text-xs md:text-xl font-black text-blue-400 mb-3 tracking-[0.2em] drop-shadow-md">
                    0{item.id} —
                  </h3>
                  <h2 className="text-[9vw] sm:text-5xl md:text-[5vw] font-black tracking-tighter leading-[0.9] uppercase mb-4 sm:mb-8 break-words text-white drop-shadow-2xl">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-xl text-white/90 max-w-md md:max-w-2xl leading-snug font-medium drop-shadow-md">
                    {item.description}
                  </p>
                </div>

                {/* Back to Home Indicator */}
                {i === SERVICES_DATA.length - 1 && (
                  <div className="absolute bottom-10 left-6 md:bottom-12 md:left-16 max-w-[calc(100%-48px)] md:max-w-md pointer-events-auto z-20">
                    <Link
                      href="/#services"
                      className="group inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white font-bold uppercase tracking-widest text-[9px] md:text-xs transition-all hover:scale-105 active:scale-95"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-180 transition-transform group-hover:-translate-x-1"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Back to Overview
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
