"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitText({
  children,
  className = "",
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const words = element.querySelectorAll(".split-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 80,
          rotateX: -60,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          delay,
          stagger: 0.06,
          ease: "power4.out",
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ perspective: "1000px" }}
    >
      {children.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="split-word mr-[0.25em] inline-block"
        >
          {word}
        </span>
      ))}
    </div>
  );
}