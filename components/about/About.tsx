import { ArrowUpRight } from "lucide-react";
import Reveal from "../animations/Reveal";
import SectionHeading from "../animations/SectionHeading";
export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

          {/* Section label */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              01 — About
            </p>
          </div>

          {/* Content */}
          <div>

           <Reveal>
<SectionHeading className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
  I build digital products that combine
  <span className="text-white/30">
    {" "}engineering, design and meaningful experiences.
  </span>
</SectionHeading>
</Reveal>

            <div className="mt-12 grid gap-10 md:grid-cols-2">

              <p className="text-base leading-8 text-white/50">
                I'm a frontend-focused developer who enjoys turning
                complex ideas into simple, interactive and visually
                engaging experiences.
              </p>

              <p className="text-base leading-8 text-white/50">
                My work spans modern web development, IoT, machine
                learning, research and creative interfaces. I care about
                both how a product works and how it feels.
              </p>

            </div>

            <a
              href="/projects"
              className="group mt-12 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm transition-all duration-300 hover:border-white"
            >
              Explore my work

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}