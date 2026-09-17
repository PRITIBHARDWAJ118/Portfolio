import { useEffect, useRef } from "react";

function ActivityModal({ activity, onClose }) {
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

  if (!activity) return null;

  const categoryLabel = activity.category === "technical" ? "TECHNICAL PARTICIPATION" : "EXTRACURRICULAR";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/65 px-4 py-8 backdrop-blur-md animate-[about-overlay-in_180ms_ease-out]"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="activity-modal-title"
        tabIndex="-1"
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#CC3A63]/20 bg-surface p-6 shadow-2xl shadow-accent-dark/35 outline-none animate-[about-modal-in_240ms_ease-out] sm:p-9"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-2xl leading-none text-muted transition hover:bg-surface-strong hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent sm:right-6 sm:top-6"
          aria-label="Close activity dialog"
        >
          ×
        </button>
        <p className="mt-7 text-xs font-bold tracking-[0.2em] text-[#CC3A63]">{categoryLabel}</p>
        <h2 id="activity-modal-title" className="mt-3 pr-8 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {activity.title}
        </h2>
        <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{activity.description}</p>
      </div>
    </div>
  );
}

export default ActivityModal;
