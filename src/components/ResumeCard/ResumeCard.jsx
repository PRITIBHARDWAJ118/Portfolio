function ResumeCard({ title, description, file }) {
  return (
    <article className="group flex min-h-80 flex-col rounded-2xl border border-[#A2AB73]/30 bg-[#FFF9F0] p-6 shadow-[0_12px_28px_rgba(91,65,60,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#CC3A63]/45 hover:shadow-[0_18px_36px_rgba(204,58,99,0.16)]">
      <span className="text-xs font-bold tracking-[0.22em] text-[#A2AB73]">RESUME</span>
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-[#252321]">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-[#5A5260]">{description}</p>

      <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#CC3A63] px-4 py-2 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-[#A92E50] focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#FFF9F0]"
        >
          VIEW RESUME
        </a>
        <a
          href={file}
          download
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-[#A2AB73]/60 bg-transparent px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#252321] transition hover:border-[#A2AB73] hover:bg-[#A2AB73] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#A2AB73] focus:ring-offset-2 focus:ring-offset-[#FFF9F0]"
        >
          DOWNLOAD
        </a>
      </div>
    </article>
  );
}

export default ResumeCard;
