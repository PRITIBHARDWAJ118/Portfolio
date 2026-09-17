import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function AboutModal({ onClose }) {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/65 px-4 py-8 backdrop-blur-md animate-[about-overlay-in_180ms_ease-out]"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
        tabIndex="-1"
        className="relative max-h-[85vh] w-full max-w-[30rem] overflow-y-auto rounded-xl border border-line bg-surface p-6 shadow-2xl shadow-accent-dark/35 outline-none animate-[about-modal-in_240ms_ease-out] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 h-1 w-12 rounded-full bg-accent" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-md text-2xl leading-none text-muted transition hover:bg-surface-strong hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Close About Me dialog"
        >
          ×
        </button>

        <p className="text-xs font-semibold tracking-[0.2em] text-accent">ABOUT ME</p>
        <h2 id="about-modal-title" className="mt-3 text-2xl font-semibold text-ink">
          Hi, I&apos;m Priti.
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-6 text-muted sm:text-base">
          <p>
            I&apos;m a software engineering enthusiast focused on building practical
            and user-centric technology across full-stack development, AI and IoT.
          </p>
          <p>
            I enjoy turning ideas into working products by combining problem-solving,
            software development and hardware-software integration.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" aria-label="Core skills">
          {["Java", "React", "Full Stack", "AI", "IoT"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-surface-strong/70 px-3 py-1 text-xs font-medium text-ink"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-subtle">
          B.Tech <span aria-hidden="true">•</span> Electronics &amp; Telecommunication
        </p>

        <div className="mt-7">
          <Link
            to="/resume"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
