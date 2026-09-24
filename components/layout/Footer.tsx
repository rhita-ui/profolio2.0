export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-xl font-bold tracking-tight">
            R<span className="text-violet-400">.</span>
          </p>

          <p className="mt-2 text-xs text-white/30">
            Frontend Engineer · Creative Developer · Researcher
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-white/35">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your-email@example.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-white/20">
          © 2026 Ritam Roy Choudhuri
        </p>

      </div>
    </footer>
  );
}