function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  detailsPath,
}) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-surface shadow-lg shadow-ink/10 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-accent/40 hover:shadow-accent-dark/35">
      <div className="aspect-[16/9] overflow-hidden bg-surface-strong">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line bg-surface-strong/70 px-2.5 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
        {(github || detailsPath) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-accent/40 px-3 py-2 text-xs font-semibold text-accent transition hover:bg-accent/10"
              >
                GitHub
              </a>
            )}
            {detailsPath && (
              <a
                href={detailsPath}
                className="rounded-md border border-line px-3 py-2 text-xs font-semibold text-ink transition hover:border-accent/50 hover:bg-surface-strong/70"
              >
                View Details
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
