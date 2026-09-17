import { useEffect, useRef } from "react";

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/65 px-4 py-8 backdrop-blur-md animate-[about-overlay-in_180ms_ease-out]"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex="-1"
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#CC3A63]/20 bg-surface p-6 shadow-2xl shadow-accent-dark/35 outline-none animate-[about-modal-in_240ms_ease-out] sm:p-9"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project dialog"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-2xl leading-none text-muted transition hover:bg-surface-strong hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent sm:right-6 sm:top-6"
        >
          ×
        </button>
        <p className="mt-7 text-xs font-bold tracking-[0.2em] text-[#CC3A63]">PROJECT DETAILS</p>
        <h2 id="project-modal-title" className="mt-3 pr-8 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h2>

        <div className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-[#CC3A63]/20 bg-[#CC3A63]/5 px-3 py-1.5 text-xs font-medium text-ink">
              {technology}
            </span>
          ))}
        </div>

        <ul className="mt-7 space-y-4 text-sm leading-7 text-muted sm:text-base">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#A2AB73]" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-md bg-[#CC3A63] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#A92E50] focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-surface"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
