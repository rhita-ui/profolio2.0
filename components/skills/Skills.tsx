const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Firebase",
  "Python",
  "Machine Learning",
  "Git",
];
import Reveal from "../animations/Reveal";

export default function Skills() {
  return (
    <section className="px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              02 — Skills
            </p>
          </div>

          <div>

          <Reveal>
  <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
    Tools I use to
    <span className="text-white/30">
      {" "}bring ideas to life.
    </span>
  </h2>
</Reveal>

            <div className="mt-12 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/55 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}