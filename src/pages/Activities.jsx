import ActivityCard from "../components/ActivityCard/ActivityCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { activities } from "../data/activities";
import { extracurriculars } from "../data/extracurriculars";

function Activities() {
  return (
    <main className="min-h-screen bg-canvas pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent-light">ACTIVITIES</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Activities
          </h1>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Technical participation, competitions, volunteering and experiences beyond the classroom.
          </p>
        </header>

        <section className="mt-12 sm:mt-14" aria-labelledby="technical-participations-title">
          <h2 id="technical-participations-title" className="sr-only">
            Technical Participations
          </h2>
          <SectionTitle title="Technical Participations" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} variant="detailed" />
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-14" aria-labelledby="extracurricular-title">
          <h2 id="extracurricular-title" className="sr-only">
            Extracurricular and Volunteering
          </h2>
          <SectionTitle title="Extracurricular & Volunteering" />
          {extracurriculars.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
              {extracurriculars.map((activity) => (
                <ActivityCard key={activity.title} {...activity} variant="detailed" />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-md border border-line bg-surface p-6 text-sm text-subtle">
              Extracurricular and volunteering activities will be added here.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Activities;
