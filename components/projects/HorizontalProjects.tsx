"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const animation = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        animation.kill();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen overflow-hidden border-t border-white/10 md:block"
    >
      {/* Section label */}
      <div className="absolute left-6 top-12 z-20 lg:left-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Selected Work
        </p>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex h-full w-max items-center gap-8 px-10"
      >
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block w-[70vw] max-w-[1000px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.18),transparent_45%)] transition-transform duration-700 group-hover:scale-110" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">

                    <p className="text-xs uppercase tracking-[0.3em] text-white/20">
                      {project.category}
                    </p>

                    <h3 className="mt-5 text-5xl font-medium tracking-[-0.04em] text-white/50 transition-colors duration-500 group-hover:text-white md:text-7xl">
                      {project.title}
                    </h3>

                  </div>
                </div>

                {/* Bottom information */}
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">

                  <p className="text-xs text-white/25">
                    {project.year}
                  </p>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}