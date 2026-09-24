"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const element = imageRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block border-t border-white/10 py-12"
    >
      {/* Floating Project Preview */}
      <div
        ref={imageRef}
        onMouseMove={handleMouseMove}
        className="pointer-events-none absolute z-20 hidden h-56 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] opacity-0 shadow-2xl transition-opacity duration-300 group-hover:opacity-100 md:block"
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-white/20">
              Project
            </span>

            <p className="mt-3 text-2xl font-medium text-white/40">
              {project.title}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[80px_1fr_1.2fr_100px] md:items-start">

        <span className="text-sm text-white/25">
          {project.id}
        </span>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
            {project.category}
          </p>

          <h2 className="text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
            {project.title}
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-sm leading-7 text-white/45 md:text-base">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40 transition-colors group-hover:border-white/20 group-hover:text-white/60"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-end md:justify-between md:self-stretch">

          <span className="text-xs text-white/25">
            {project.year}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
            <ArrowUpRight
              size={18}
              className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>

        </div>

      </div>
    </Link>
  );
}