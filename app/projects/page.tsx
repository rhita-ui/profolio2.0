
import Navbar from "../../components/layout/Navbar";
import ProjectCard from "../../components/projects/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <header className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              Selected Work
            </p>

            <h1 className="mt-8 text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-9xl">
              Projects
              <span className="text-white/25">.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
              A collection of projects spanning frontend engineering,
              interactive experiences, IoT, artificial intelligence,
              machine learning and research.
            </p>
          </header>

          {/* Projects List */}
          <section className="mt-32" aria-label="Projects">
            <div className="space-y-0">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

