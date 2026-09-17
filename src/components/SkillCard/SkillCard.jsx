function SkillCard({
  name,
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  iconClass,
  secondaryIconClass,
  hoverClass,
  isSoftSkill = false,
}) {
  return (
    <div
      className={`group flex min-h-16 min-w-0 items-center gap-3 rounded-xl border px-4 py-3 shadow-[0_10px_24px_rgba(91,65,60,0.10)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(204,58,99,0.14)] ${
        isSoftSkill
          ? "border-[#A2AB73]/35 bg-[#fcf7e9] hover:border-[#A2AB73]/65"
          : "border-line bg-surface hover:border-[#CC3A63]/35 hover:bg-surface-strong"
      } ${hoverClass || ""}`}
    >
      <div className={`flex shrink-0 items-center gap-1.5 ${isSoftSkill ? "text-[#748048]" : ""}`}>
        <Icon
          aria-hidden="true"
          className={`size-6 ${iconClass || ""}`}
        />
        {SecondaryIcon && (
          <SecondaryIcon
            aria-hidden="true"
            className={`size-5 ${secondaryIconClass}`}
          />
        )}
      </div>
      <span className="min-w-0 text-sm font-medium leading-5 text-ink sm:text-base">
        {name}
      </span>
    </div>
  );
}

export default SkillCard;
