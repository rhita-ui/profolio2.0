"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 50,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      animation.kill();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [delay, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}