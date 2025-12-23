export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 • Thalisson Menezes • Engenheiro de Software</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/devvthalisson"
            target="_blank"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devvthalisson/"
            target="_blank"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
