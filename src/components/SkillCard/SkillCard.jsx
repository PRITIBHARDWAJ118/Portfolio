function SkillCard({
  name,
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  iconClass,
  secondaryIconClass,
  hoverClass,
}) {
  return (
    <div
      className={`group flex h-16 min-w-0 items-center gap-3 rounded-md border border-line bg-surface px-4 shadow-lg shadow-ink/10 transition duration-300 hover:scale-[1.02] hover:bg-surface-strong ${hoverClass}`}
    >
      <div className="flex shrink-0 items-center gap-1.5">
        <Icon
          aria-hidden="true"
          className={`size-6 ${iconClass}`}
        />
        {SecondaryIcon && (
          <SecondaryIcon
            aria-hidden="true"
            className={`size-5 ${secondaryIconClass}`}
          />
        )}
      </div>
      <span className="truncate text-sm font-medium text-ink sm:text-base">
        {name}
      </span>
    </div>
  );
}

export default SkillCard;
