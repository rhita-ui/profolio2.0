"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2026 — Present",
    role: "Frontend Developer",
    company: "Independent / Freelance",
    description:
      "Building modern web applications and interactive digital experiences using React, Next.js, TypeScript and modern frontend technologies.",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "2025 — 2026",
    role: "Frontend Developer Intern",
    company: "AnimeForge",
    description:
      "Worked on modern frontend interfaces, interactive experiences and responsive web applications with a strong focus on visual design and user experience.",
    technologies: ["React", "Three.js", "Tailwind"],
  },
  {
    period: "2024 — Present",
    role: "Research & Development",
    company: "Academic Projects",
    description:
      "Worked on machine learning, IoT, environmental analytics and research projects combining software engineering with real-world problems.",
    technologies: ["Python", "Machine Learning", "IoT"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

          {/* Section Label */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              03 — Experience
            </p>
          </div>

          {/* Experience List */}
          <div>
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group border-t border-white/10 py-12 last:border-b"
              >
                <div className="grid gap-8 md:grid-cols-[160px_1fr_40px]">

                  <div>
                    <p className="text-xs text-white/30">
                      {experience.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      {experience.company}
                    </p>

                    <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                      {experience.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <ArrowUpRight
                      size={20}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}