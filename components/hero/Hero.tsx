"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Magnetic from "../animations/Magnetic";
import SplitText from "../animations/SplitText";
import ScrollTypography from "../animations/ScrollTypography";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      const label = element.querySelector(".hero-label");
      const description = element.querySelector(".hero-description");
      const button = element.querySelector(".hero-button");
      const scroll = element.querySelector(".hero-scroll");

      if (label) {
        gsap.from(label, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
        });
      }

      if (description) {
        gsap.from(description, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out",
        });
      }

      if (button) {
        gsap.from(button, {
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          delay: 0.9,
          ease: "back.out(1.7)",
        });
      }

      if (scroll) {
        gsap.from(scroll, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1.1,
          ease: "power3.out",
        });
      }
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="mx-auto w-full max-w-7xl">

        {/* Label */}
        <p className="hero-label mb-8 text-xs uppercase tracking-[0.35em] text-white/35">
          Frontend Engineer · Creative Developer · Researcher
        </p>

        {/* Main Heading */}
        <ScrollTypography>
          <div className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
            <SplitText>
              Building
            </SplitText>

            <SplitText
              delay={0.15}
              className="text-white/30"
            >
              digital experiences.
            </SplitText>
          </div>
        </ScrollTypography>

        {/* Description + Button */}
        <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          <p className="hero-description max-w-xl text-base leading-8 text-white/45 md:text-lg">
            I design and develop modern digital products where
            technology, interaction and visual storytelling meet.
          </p>

          <Magnetic>
           <a
  href="/projects"
  className="hero-button group flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black shadow-lg shadow-white/5 transition-colors duration-300 hover:bg-violet-400"
>
  Explore my work

  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
  />
</a>
          </Magnetic>

        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-8 left-6 flex items-center gap-3 text-xs text-white/25 lg:left-10">
          <ArrowDown size={15} />
          Scroll to explore
        </div>

      </div>
    </section>
  );
}