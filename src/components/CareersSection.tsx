"use client";
import { motion } from "framer-motion";
import AutoVideoLoop from "./AutoVideoLoop";
import { HERO_VIDEOS } from "@/lib/data";
import { BriefcaseIcon, MapPinIcon, ZapIcon, TrophyIcon } from "./Icons";

function CareerRoleCard({
  icon,
  title,
  desc,
  color,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  onClick: () => void;
}) {
  const colors = {
    blue: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    emerald: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    purple: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    rose: "text-rose-400 border-rose-400/20 bg-rose-400/5",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="p-6 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group relative overflow-hidden cursor-pointer h-full flex flex-col"
    >
      <div
        className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border ${colors[color as keyof typeof colors]}`}
      >
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/40 leading-relaxed group-hover:text-white/60 transition-colors mb-8 flex-grow">
        {desc}
      </p>
      <div className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors border-t border-white/5 pt-6">
        Apply Now
        <svg
          width="12"
          height="12"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </motion.div>
  );
}

export default function CareersSection({ onApply }: { onApply: () => void }) {
  return (
    <section
      id="careers"
      className="relative min-h-[100dvh] w-full bg-black overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <AutoVideoLoop
          videos={[...HERO_VIDEOS].reverse()}
          interval={1000}
          opacity={0.4}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-1" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 xl:px-24 py-24 md:py-48">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
                Join the Collective
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10vw] sm:text-6xl md:text-[5vw] font-black leading-[0.85] tracking-tighter uppercase mb-8 md:mb-12 text-white"
            >
              Building
              <br />
              the next
              <br />
              generation.
            </motion.h2>

            <div className="space-y-6 md:space-y-8 max-w-xl">
              <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                At TDM, we partner with visionaries. Our culture is built on the
                intersection of strategic storytelling and relentless
                innovation.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                {["Remote Friendly", "Unlimited PTO", "Global Growth"].map(
                  (perk) => (
                    <div
                      key={perk}
                      className="px-4 py-2 md:px-6 md:py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
                    >
                      <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-white/50">
                        {perk}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <CareerRoleCard
              icon={<BriefcaseIcon />}
              title="Creative Director"
              desc="Lead our global creative teams in delivering world-class brand experiences."
              color="rose"
              onClick={onApply}
            />
            <CareerRoleCard
              icon={<MapPinIcon />}
              title="Brand Strategist"
              desc="Develop data-driven strategies for the world's leading luxury brands."
              color="blue"
              onClick={onApply}
            />
            <CareerRoleCard
              icon={<ZapIcon />}
              title="Motion Artist"
              desc="Create visual narratives that push the boundaries of digital media."
              color="purple"
              onClick={onApply}
            />
            <CareerRoleCard
              icon={<TrophyIcon />}
              title="Growth Lead"
              desc="Drive impact and scale through innovative performance marketing."
              color="emerald"
              onClick={onApply}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
