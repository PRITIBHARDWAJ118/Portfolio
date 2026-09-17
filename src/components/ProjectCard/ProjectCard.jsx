function ProjectCard({
  title,
  summary,
  technologies,
  accent,
  onSelect,
  project,
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative flex min-h-72 w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_12px_28px_rgba(91,65,60,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#CC3A63]/45 hover:shadow-[0_18px_34px_rgba(204,58,99,0.18)] focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#F9F0E0]"
    >
      <div className={`h-20 bg-gradient-to-br ${accent} transition duration-500 group-hover:scale-105`}>
        <div className="h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_45%)]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line bg-surface-strong/70 px-2.5 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="rounded-full border border-[#CC3A63]/20 bg-[#CC3A63]/5 px-2.5 py-1 text-xs font-medium text-[#CC3A63]">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        <span className="mt-auto pt-5 text-xs font-bold tracking-[0.16em] text-[#CC3A63] transition group-hover:tracking-[0.2em]">
          EXPLORE PROJECT →
        </span>
      </div>
    </button>
  );
}

export default ProjectCard;
