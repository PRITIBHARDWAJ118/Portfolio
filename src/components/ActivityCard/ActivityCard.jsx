function ActivityCard({
  title,
  subtitle,
  icon: Icon,
  iconClass,
  hoverClass,
  variant = "compact",
}) {
  const isDetailed = variant === "detailed";

  return (
    <article
      className={`group relative flex items-center gap-4 overflow-hidden rounded-md border border-line bg-surface shadow-lg shadow-ink/10 transition duration-300 hover:-translate-y-1 hover:bg-surface-strong ${
        isDetailed ? "min-h-36 p-6" : "min-h-28 p-5"
      } ${hoverClass}`}
    >
      <div className={`absolute left-0 w-0.5 bg-accent/80 ${isDetailed ? "top-6 h-12" : "top-5 h-9"}`} />
      <div className={`flex shrink-0 items-center justify-center rounded-md border border-line bg-canvas/40 ${isDetailed ? "size-12" : "size-10"}`}>
        <Icon aria-hidden="true" className={`${isDetailed ? "size-6" : "size-5"} ${iconClass}`} />
      </div>
      <div className="min-w-0">
        <h3 className={`${isDetailed ? "text-lg" : "text-base"} font-semibold text-ink`}>{title}</h3>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
    </article>
  );
}

export default ActivityCard;
