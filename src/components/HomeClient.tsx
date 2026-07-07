"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "./Header";
import HeroSequence from "./HeroSequence";
import AutoVideoLoop from "./AutoVideoLoop";
import { HERO_VIDEOS, WORK_BACKGROUND_VIDEOS } from "@/lib/data";
import { UsersIcon, StarIcon, VideoIcon, SparklesIcon } from "./Icons";

// Dynamic imports for components below the fold
const VerticalShowcase = dynamic(() => import("./VerticalShowcase"), {
  ssr: false,
});
const BrandsSection = dynamic(() => import("./BrandsSection"), { ssr: false });
const ReviewsSection = dynamic(() => import("./ReviewsSection"), {
  ssr: false,
});
const CareersSection = dynamic(() => import("./CareersSection"), {
  ssr: false,
});
const ContactPanel = dynamic(() => import("./ContactPanel"), { ssr: false });

export default function HomeClient() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="bg-[#050505] text-white selection:bg-white selection:text-black font-sans"
      style={{ overflowX: "clip" }}
    >
      <Header />

      <HeroSequence />

      <section
        id="about"
        className="relative z-20 w-full bg-white text-black py-24 md:py-48 px-6 sm:px-10 lg:px-20 xl:px-24 shadow-[0_-50px_100px_rgba(0,0,0,0.05)]"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Side: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-black/10 rounded-full mb-8 w-fit"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
                The Dash Media Agency
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-black leading-[0.9] tracking-tighter uppercase mb-10"
            >
              Turning Brand
              <br />
              Ideas Into
              <br />
              Experiences.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 md:space-y-8 max-w-xl"
            >
              <p className="text-lg md:text-2xl text-black/60 leading-tight font-medium">
                The Dash Media (TDM) is a premier creative media and digital
                marketing agency dedicated to elevating brand presence through
                strategic storytelling and innovative experiences.
              </p>
              <p className="text-lg md:text-2xl text-black/60 leading-tight font-medium">
                We bridge the gap between brands and their audiences through
                data-driven social strategies, influencer collaborations, and
                world-class event production.
              </p>
            </motion.div>

            <div className="mt-12 md:mt-20 flex flex-wrap gap-4 md:gap-8">
              <div className="px-5 py-4 md:px-10 md:py-8 bg-black/5 border border-black/10 rounded-3xl">
                <h4 className="text-2xl md:text-5xl font-black text-blue-600 mb-1">
                  99.9%
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                  Uptime Mindset
                </p>
              </div>
              <div className="px-5 py-4 md:px-10 md:py-8 bg-black/5 border border-black/10 rounded-3xl">
                <h4 className="text-2xl md:text-5xl font-black text-black mb-1">
                  PREMIUM
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                  Digital Expertise
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <ExpertiseCard
              icon={<UsersIcon />}
              title="Social Media Strategy"
              desc="Comprehensive social management and content strategy designed to build community and drive organic growth."
              color="blue"
            />
            <ExpertiseCard
              icon={<StarIcon />}
              title="Influencer Marketing"
              desc="Connecting your brand with authentic voices to create impactful collaborations that resonate with target audiences."
              color="emerald"
            />
            <ExpertiseCard
              icon={<VideoIcon />}
              title="Content Creation"
              desc="High-end graphic design and cinematic video production that turns your brand story into a visual masterpiece."
              color="purple"
            />
            <ExpertiseCard
              icon={<SparklesIcon />}
              title="Event Production"
              desc="From luxury events to global exhibitions, we manage every detail to deliver unforgettable brand experiences."
              color="rose"
            />
          </div>
        </div>
      </section>

      <VerticalShowcase />

      <section
        id="work"
        className="relative z-20 bg-white text-black px-6 sm:px-10 lg:px-20 xl:px-24 py-24 md:py-48"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase mb-4 md:mb-6"
            >
              Our Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Explore our curated selection of projects spanning various
              industries, showcasing our expertise in delivering scalable and
              performant solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceBox
              num="01"
              title="AI Strategy"
              video={WORK_BACKGROUND_VIDEOS["imedi-health"]}
              projects="IMEDI.HEALTH / 3 Projects"
              slug="imedi-health"
            />
            <ServiceBox
              num="02"
              title="Product Innovation"
              video={WORK_BACKGROUND_VIDEOS.thrive}
              projects="THRIVE / 1 Project"
              slug="thrive"
            />
            <ServiceBox
              num="03"
              title="Brand & Identity"
              video={WORK_BACKGROUND_VIDEOS.purbi}
              projects="PURBI / 2 Projects"
              slug="purbi"
            />
            <ServiceBox
              num="04"
              title="Immigration"
              video={WORK_BACKGROUND_VIDEOS["ap-talent"]}
              projects="AP Talent / 1 Project"
              slug="ap-talent"
            />
            <ServiceBox
              num="05"
              title="B2G"
              video={WORK_BACKGROUND_VIDEOS.pickleberry}
              projects="Pickleberry / 4 Projects"
              slug="pickleberry"
            />
            <ServiceBox
              num="06"
              title="D2C"
              video={WORK_BACKGROUND_VIDEOS["healthcare-24hr"]}
              projects="Healthcare 24hr / 2 Projects"
              slug="healthcare-24hr"
            />
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="relative min-h-[100dvh] w-full bg-black flex flex-col justify-between overflow-hidden px-6 sm:px-10 lg:px-20 xl:px-24 pt-24 md:pt-40 pb-12 md:pb-24"
      >
        <AutoVideoLoop
          videos={[...HERO_VIDEOS].reverse()}
          interval={4000}
          opacity={0.5}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

        {/* Top Left: Main Narrative */}
        <div className="relative z-10 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-base sm:text-xl md:text-[2.2vw] font-bold leading-snug tracking-tight text-white"
          >
            We&apos;ve helped our partners win their place in the hands, homes,
            and hearts of millions—{" "}
            <span className="text-white/30">
              combining strategic storytelling and design to realize the
              unprecedented.
            </span>
          </motion.h2>
        </div>

        {/* Bottom Content: Stats & Expertise */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-end">
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:pt-12">
            <div>
              <h4 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter">
                100+
              </h4>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Brands Transformed
              </p>
            </div>
            <div>
              <h4 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter">
                50+
              </h4>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Global Exhibitions
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6 text-right">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
                Core Expertise
              </p>
              <ul className="space-y-2 text-white/60 font-medium text-lg">
                <li>Luxury Event Production</li>
                <li>Influencer Marketing</li>
                <li>Digital Media Strategy</li>
                <li>Cinematic Storytelling</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
                TDM / GLOBAL CREATIVE NETWORK
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrandsSection />
      <ReviewsSection />
      <CareersSection onApply={() => setIsFormOpen(true)} />

      <footer
        id="contact"
        className="relative z-20 bg-black text-white px-6 sm:px-10 lg:px-20 xl:px-24 pt-24 pb-8 md:pt-32 md:pb-10 border-t border-white/10"
      >
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="flex flex-col gap-8 md:gap-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[10vw] sm:text-5xl md:text-[4.5vw] font-black tracking-tighter leading-[0.85] uppercase flex flex-col gap-1 md:gap-2"
              >
                <span className="text-white/20 hover:text-white transition-colors duration-700 cursor-default">
                  LET&apos;S
                </span>
                <span className="text-white/50 hover:text-white transition-colors duration-700 cursor-default">
                  CREATE THE
                </span>
                <span className="text-white hover:text-white/50 transition-colors duration-700 cursor-default">
                  UNPRECEDENTED.
                </span>
              </motion.h2>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsFormOpen(true)}
                className="group mt-2 md:mt-6 relative w-fit overflow-hidden rounded-full bg-white px-8 py-4 md:px-10 md:py-5 font-bold uppercase tracking-[0.2em] text-black text-xs md:text-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Start a Project
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </motion.button>
            </div>

            <div className="flex lg:justify-end">
              <div className="grid grid-cols-2 gap-12 md:gap-24">
                <div className="space-y-6 md:space-y-8">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-blue-500">
                    Socials
                  </p>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-white/60">
                    <a
                      href="https://www.instagram.com/thedashmedia09?igsh=MWx4d3Bvd2o3aWZjaw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aniket-khemka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:aniket@thedashmedia.com"
                      className="block hover:text-white transition-colors"
                    >
                      Gmail
                    </a>
                    <a
                      href="https://wa.me/918506902192"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-blue-500">
                    Offices
                  </p>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-white/60">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Atal+Incubation+Centre+GGSIPU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-white transition-colors"
                    >
                      New Delhi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-5 w-24">
                <Image
                  src="/logo-transparent.png"
                  alt="Dash Media"
                  fill
                  sizes="96px"
                  className="object-contain invert brightness-0"
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                © 2026 THE DASH MEDIA.
              </span>
            </div>
            <div className="flex gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isFormOpen && <ContactPanel onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function ExpertiseCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}) {
  const colors = {
    blue: "text-blue-600 bg-blue-600/10 border-blue-600/20 group-hover:bg-blue-600/20 group-hover:border-blue-600/30",
    emerald:
      "text-emerald-600 bg-emerald-600/10 border-emerald-600/20 group-hover:bg-emerald-600/20 group-hover:border-emerald-600/30",
    purple:
      "text-purple-600 bg-purple-600/10 border-purple-600/20 group-hover:bg-purple-600/20 group-hover:border-purple-600/30",
    rose: "text-rose-600 bg-rose-600/10 border-rose-400/20 group-hover:bg-rose-600/20 group-hover:border-rose-400/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 bg-black/5 border border-black/10 rounded-[32px] hover:bg-black/[0.08] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group cursor-pointer"
    >
      <div
        className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-500 ${colors[color as keyof typeof colors]}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-black/50 leading-relaxed group-hover:text-black/70 transition-colors font-medium">
        {desc}
      </p>
    </motion.div>
  );
}

function ServiceBox({
  num,
  title,
  video,
  projects,
  slug,
}: {
  num: string;
  title: string;
  video: string;
  projects: string;
  slug: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  // We use any or unknown here because we removed useRef to avoid hook issues in a simple component,
  // Wait, I can just import useRef from react. Let's just do it cleanly.
  // Actually, I can just use a normal hover state without play() and pause() if I use autoPlay={isHovered}
  // But let's stick to what works.
  return (
    <a
      href={`/work/${slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-square md:aspect-[4/5] bg-[#0a0a0a] rounded-[40px] overflow-hidden group cursor-pointer border border-white/5 block"
    >
      <div
        className={`absolute inset-0 z-0 transition-all duration-700 ${isHovered ? "opacity-100 scale-100" : "opacity-20 scale-110"}`}
      >
        <video
          autoPlay={isHovered}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full w-full p-6 md:p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span
            className={`text-xs md:text-sm font-mono transition-colors duration-500 ${isHovered ? "text-white/60" : "text-gray-500"}`}
          >
            {num}
          </span>
          <div
            className={`h-10 w-10 md:h-12 md:w-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isHovered ? "bg-white border-white scale-110" : "bg-white/5 border-white/10"}`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isHovered ? "text-black" : "text-white"}
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <h3
            className={`text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none mb-2 transition-all duration-500 ${isHovered ? "text-white translate-x-2" : "text-white/90"}`}
          >
            {title}
          </h3>
          <p
            className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 ${isHovered ? "text-white/60 translate-x-2" : "text-gray-500"}`}
          >
            {projects}
          </p>
        </div>
      </div>
    </a>
  );
}
