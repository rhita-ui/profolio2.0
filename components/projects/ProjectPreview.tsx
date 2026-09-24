"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectPreviewProps {
  title: string;
}

export default function ProjectPreview({
  title,
}: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        {
          y: 100,
          scale: 1.08,
        },
        {
          y: -100,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.18),transparent_45%)]" />

      <div
        ref={contentRef}
        className="relative flex h-[120%] -translate-y-[10%] items-center justify-center"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/20">
            Project Preview
          </p>

          <p className="mt-4 text-3xl font-medium text-white/30 md:text-6xl">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}