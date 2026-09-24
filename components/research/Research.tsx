"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const research = [
  {
    number: "01",
    title: "SafeLink",
    type: "IoT & Women Safety",
    description:
      "An IoT-based secure wearable-mobile system designed for emergency communication, location tracking and personal safety.",
  },
  {
    number: "02",
    title: "Landslide Prediction",
    type: "Machine Learning",
    description:
      "A machine learning approach for estimating landslide likelihood using environmental, geographical and seismic variables.",
  },
  {
    number: "03",
    title: "Weather Intelligence",
    type: "Big Data & Analytics",
    description:
      "A scalable platform concept for collecting and analysing real-time weather information from multiple sources across India.",
  },
  {
    number: "04",
    title: "Blockchain in Healthcare",
    type: "Blockchain Research",
    description:
      "Research into blockchain-based approaches for improving security, transparency and data management in healthcare systems.",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              04 — Research
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Exploring technology
              <span className="text-white/25">
                {" "}beyond the interface.
              </span>
            </h2>

            <div className="mt-20">

              {research.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group border-t border-white/10 py-10"
                >
                  <div className="grid gap-6 md:grid-cols-[60px_1fr_40px]">

                    <span className="text-xs text-white/20">
                      {item.number}
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        {item.type}
                      </p>

                      <h3 className="mt-3 text-2xl font-medium md:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />

                  </div>
                </motion.article>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}