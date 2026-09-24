"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTypographyProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollTypography({
  children,
  className = "",
}: ScrollTypographyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: -120,
        scale: 0.92,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}