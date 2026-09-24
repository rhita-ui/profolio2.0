"use client";
import { ArrowUpRight, Mail } from "lucide-react";
import Magnetic from "../animations/Magnetic";
import Reveal from "../animations/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-40 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Small label */}
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/35">
            Get in touch
          </p>
        </Reveal>

        {/* Main heading */}
        <Reveal delay={0.1}>
          <h2 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
            Let&apos;s build
            <br />
            <span className="text-white/30">
              something great.
            </span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
            Have a project, research idea, collaboration or opportunity
            in mind? I&apos;d love to hear about it.
          </p>
        </Reveal>

        {/* Main CTA */}
  {/* Main CTA */}
<Reveal delay={0.3}>
  <div className="mt-12">
    <Magnetic>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rhitamraychowdhuri626@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative z-10 inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-base font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:bg-violet-400 hover:shadow-2xl hover:shadow-violet-500/20"
        style={{ color: "#000000" }}
      >
        <Mail
          size={20}
          strokeWidth={2}
          className="shrink-0"
          style={{ color: "#000000" }}
        />

        <span
          className="whitespace-nowrap"
          style={{ color: "#000000" }}
        >
          Get in touch
        </span>

        <ArrowUpRight
          size={20}
          strokeWidth={2}
          className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          style={{ color: "#000000" }}
        />
      </a>
    </Magnetic>
  </div>
</Reveal>

        {/* Contact links */}
        <Reveal delay={0.4}>
          <div className="mt-20 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 md:grid-cols-3">

            {/* Email */}
            <a
              href="mailto:rhitamraychowdhuri626@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Email
                </p>

                <p className="mt-2 text-sm text-white/60 transition-colors group-hover:text-white">
                  rhitamraychowdhuri626@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  GitHub
                </p>

                <p className="mt-2 text-sm text-white/60 transition-colors group-hover:text-white">
                  View my work
                </p>
              </div>

             <span className="text-sm font-semibold text-white/25 transition-colors duration-300 group-hover:text-white">
  GH
</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm text-white/60 transition-colors group-hover:text-white">
                  Connect with me
                </p>
              </div>

              <span className="text-sm font-semibold text-white/25 transition-colors duration-300 group-hover:text-white">
  in
</span>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}