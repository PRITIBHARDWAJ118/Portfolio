function AchievementCard({ title, description, category, icon: Icon }) {
  return (
    <article
      className="group relative flex min-h-52 flex-col overflow-hidden rounded-2xl border border-[#A2AB73]/30 bg-[#FFF9F0] p-6 shadow-[0_12px_28px_rgba(91,65,60,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#CC3A63]/45 hover:shadow-[0_18px_36px_rgba(204,58,99,0.16)]"
    >
      <div className="flex size-10 items-center justify-center rounded-full border border-[#CC3A63]/20 bg-[#CC3A63]/8 text-[#CC3A63]" aria-hidden="true">
        <Icon className="size-4" />
      </div>
      <p className="mt-5 text-xs font-bold tracking-[0.18em] text-[#A2AB73]">{category}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#252321]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5A5260] italic">{description}</p>
    </article>
  );
}

export default AchievementCard;
