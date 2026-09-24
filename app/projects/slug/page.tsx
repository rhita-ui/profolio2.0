
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import ProjectPreview from "../../../components/projects/ProjectPreview";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <p className="mb-4 text-sm text-white/40">
            Project not found
          </p>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to projects
          </Link>

          <div className="mt-20 max-w-5xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              {project.category}
            </p>

            <h1 className="mt-8 text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-9xl">
              {project.title}
              <span className="text-white/20">.</span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/45 md:text-xl">
              {project.description}
            </p>
          </div>

          {/* Project Information */}
          <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Year
              </p>

              <p className="mt-3 text-sm text-white/70">
                {project.year}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Category
              </p>

              <p className="mt-3 text-sm text-white/70">
                {project.category}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Technologies
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ProjectPreview title={project.title} />
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.5fr_1.5fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            01 — Overview
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Designing technology around
              <span className="text-white/25">
                {" "}
                real-world problems.
              </span>
            </h2>

            <p className="mt-10 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
              This project combines engineering, design and
              problem-solving to create a practical digital
              experience. The goal is to transform complex
              requirements into an intuitive and scalable product.
            </p>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            02 — Technology
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {project.technologies.map((technology, index) => (
              <div
                key={technology}
                className="group flex items-center justify-between border-t border-white/10 py-8"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-2xl text-white/70 transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                    {technology}
                  </span>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="border-t border-white/10 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}

