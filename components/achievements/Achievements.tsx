"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    number: "01",
    title: "Best Research Paper Award",
    organization: "Build Summit · Chandigarh",
    year: "2026",
  },
  {
    number: "02",
    title: "Frontend Domination",
    organization: "Frontend Development Certification",
    year: "2025",
  },
  {
    number: "03",
    title: "Three.js Design Certification",
    organization: "Infosys",
    year: "2025",
  },
  {
    number: "04",
    title: "Research Publications",
    organization: "Technology & Engineering Research",
    year: "2026",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              05 — Achievements
            </p>
          </div>

          <div>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="grid grid-cols-[50px_1fr_auto] items-center gap-6 border-t border-white/10 py-8 last:border-b"
              >
                <span className="text-xs text-white/20">
                  {achievement.number}
                </span>

                <div>
                  <h3 className="text-xl font-medium md:text-3xl">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/35">
                    {achievement.organization}
                  </p>
                </div>

                <span className="text-xs text-white/25">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}