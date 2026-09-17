const experience = [
  {
    company: "Truepad",
    role: "Software Engineer",
    location: "Remote",
    period: "July 2025 - April 2026",
    achievements: [
      "Delivered end-to-end onboarding and authentication with OTP verification, session management, and user profiles, reducing user drop-off by 30% in the measured cohort.",
      "Architected real-time room synchronization for 500+ concurrent users using Pusher and shipped a PostgreSQL-backed admin panel for moderation and reporting across 10K+ user records.",
    ],
    highlights: ["30% reduction in user drop-off", "500+ concurrent users", "10K+ user records"],
    current: true,
  },
  {
    company: "RoboArena",
    role: "Product Development Intern",
    location: "Pune, Maharashtra",
    period: "February 2025 - May 2025",
    achievements: [
      "Developed and optimized software logic for embedded systems using C/C++, integrated hardware components, and collaborated with cross-functional teams to deliver functional prototypes.",
    ],
  },
];

function Experience() {
  return (
    <main className="min-h-screen bg-canvas pb-10 pt-24 sm:pt-28 lg:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <header className="max-w-xl">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            MY EXPERIENCE
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Where I turned ideas into working products.
          </p>
        </header>

        <section className="relative mt-7 space-y-5 before:absolute before:bottom-9 before:left-[0.34rem] before:top-7 before:w-px before:bg-accent/45 lg:space-y-7 lg:before:left-1/2" aria-label="Professional experience timeline">
          {experience.map((entry, index) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className={`relative pl-8 lg:w-[calc(50%-2rem)] lg:pl-0 ${
                index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              }`}
            >
              <span className={`absolute left-0 top-6 z-10 size-3 rounded-full border-2 border-surface bg-[#A2AB73] ring-4 ring-accent/15 lg:top-7 lg:size-3.5 lg:ring-[5px] lg:ring-accent/15 ${
                index % 2 === 0 ? "lg:-right-[2.45rem] lg:left-auto" : "lg:-left-[2.45rem]"
              }`} aria-hidden="true" />
              <div className={`rounded-lg border bg-surface p-5 shadow-lg shadow-ink/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                entry.current
                  ? "border-accent/40 shadow-accent/10 hover:border-accent/60"
                  : "border-[#A2AB73]/45 hover:border-[#A2AB73]/70 hover:shadow-[#A2AB73]/10"
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    {entry.current && (
                      <p className="text-xs font-semibold tracking-[0.18em] text-accent">MOST RECENT ROLE</p>
                    )}
                    <h2 className={`font-semibold leading-tight text-ink italic ${entry.current ? "mt-2 text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                      {entry.role}
                    </h2>
                    <p className="mt-1 text-base font-medium text-muted italic sm:text-lg">
                      {entry.company} <span aria-hidden="true">-</span> {entry.location}
                    </p>
                  </div>
                  <p className="rounded-md border border-[#A2AB73]/45 bg-[#A2AB73]/10 px-2.5 py-1 text-xs font-semibold text-[#657046] italic sm:text-sm">
                    {entry.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm leading-6 text-muted sm:text-base">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement} className="relative pl-4 italic before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-[#A2AB73]">
                      {achievement}
                    </li>
                  ))}
                </ul>

                {entry.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2" aria-label={`${entry.company} measurable results`}>
                    {entry.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-[#A2AB73]/50 bg-[#A2AB73]/10 px-2.5 py-1 text-xs font-semibold text-[#657046] italic sm:text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Experience;
