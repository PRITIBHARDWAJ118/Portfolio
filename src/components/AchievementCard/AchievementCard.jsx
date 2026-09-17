function AchievementCard({
  title,
  subtitle,
  secondaryText,
  icon: Icon,
  iconClass,
  hoverClass,
}) {
  return (
    <article
      className={`group flex min-h-36 items-start gap-4 rounded-md border border-line bg-surface p-5 shadow-lg shadow-ink/10 transition duration-300 hover:-translate-y-1 hover:bg-surface-strong ${hoverClass}`}
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-canvas/40">
        <Icon aria-hidden="true" className={`size-5 ${iconClass}`} />
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-muted">{subtitle}</p>
        {secondaryText && (
          <p className="mt-2 text-xs font-medium tracking-wide text-subtle">
            {secondaryText}
          </p>
        )}
      </div>
    </article>
  );
}

export default AchievementCard;
