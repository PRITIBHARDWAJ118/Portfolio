const education = [
  {
    institution: "Symbiosis Institute of Technology",
    qualification: "B.Tech in Electronics and Telecommunication",
    period: "July 2023 - June 2027",
    result: "GPA: 9.34",
    current: true,
  },
  {
    institution: "Sunrise Dwarika Academy",
    location: "Deoghar, Jharkhand",
    qualification: "Intermediate",
    result: "Percentage: 83%",
  },
  {
    institution: "St. Francis School",
    location: "Deoghar, Jharkhand",
    qualification: "Matriculation",
    result: "Percentage: 92%",
  },
];

function Education() {
  const [currentEducation, ...previousEducation] = education;

  return (
    <main className="min-h-screen bg-canvas pb-8 pt-24 sm:pt-28 lg:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <header className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">STUDIOP</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            MY EDUCATION
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Academic journey and milestones.
          </p>
        </header>

        <section className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:items-stretch" aria-label="Education timeline">
          <article className="relative overflow-hidden rounded-lg border border-[#A2AB73]/55 bg-surface p-5 shadow-lg shadow-[#A2AB73]/10 sm:p-6">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#A2AB73]/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-accent">CURRENT DEGREE</p>
                <h2 className="mt-3 text-xl font-semibold leading-tight text-ink sm:text-2xl italic">
                  {currentEducation.institution}
                </h2>
              </div>
              <span className="mt-1 size-3 shrink-0 rounded-full bg-[#A2AB73] ring-4 ring-[#A2AB73]/20" aria-hidden="true" />
            </div>

            <div className="relative mt-5 grid gap-3 border-t border-[#A2AB73]/30 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="space-y-1 text-sm leading-6 text-muted sm:text-base">
                <p className="italic">{currentEducation.qualification}</p>
                <p className="italic">{currentEducation.period}</p>
              </div>
              <p className="w-fit rounded-md border border-[#A2AB73]/50 bg-[#A2AB73]/10 px-3 py-1.5 text-sm font-semibold text-[#657046] italic">
                {currentEducation.result}
              </p>
            </div>
          </article>

          <div className="relative grid gap-3 before:absolute before:bottom-7 before:left-[0.35rem] before:top-7 before:w-px before:bg-[#A2AB73]/35">
            {previousEducation.map((entry) => (
              <article key={entry.institution} className="relative rounded-lg border border-line bg-surface px-5 py-4 shadow-sm shadow-ink/5 transition duration-300 hover:border-[#A2AB73]/60 hover:shadow-md hover:shadow-[#A2AB73]/10">
                <span className="absolute -left-[0.06rem] top-6 size-3 rounded-full border-2 border-surface bg-[#A2AB73]" aria-hidden="true" />
                <div className="pl-4">
                  <h2 className="text-base font-semibold leading-5 text-ink italic sm:text-lg">
                    {entry.institution}
                  </h2>
                  <p className="mt-1 text-sm text-muted italic">{entry.location}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <p className="italic">{entry.qualification}</p>
                    <span className="hidden size-1 rounded-full bg-accent sm:block" aria-hidden="true" />
                    <p className="font-semibold text-[#657046] italic">{entry.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Education;
