import { useState } from "react";
import ActivityModal from "../components/ActivityModal/ActivityModal";
import { activities } from "../data/activities";

function ActivityCard({ activity, onSelect, variant }) {
  const Icon = activity.icon;
  const isTechnical = variant === "technical";

  return (
    <button
      type="button"
      onClick={() => onSelect(activity)}
      className={`group relative flex min-h-52 w-full flex-col overflow-hidden rounded-2xl border p-6 text-left shadow-[0_12px_28px_rgba(91,65,60,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(204,58,99,0.18)] focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#F9F0E0] ${
        isTechnical
          ? "border-[#CC3A63]/20 bg-[#fff9f0] hover:border-[#CC3A63]/45"
          : "border-[#A2AB73]/35 bg-[#fdf8ec] hover:border-[#A2AB73]/70"
      }`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100 ${
          isTechnical ? "bg-[#CC3A63]" : "bg-[#A2AB73]"
        }`}
      />
      <span
        className={`flex size-12 items-center justify-center rounded-xl border transition duration-300 group-hover:scale-105 ${
          isTechnical
            ? "border-[#CC3A63]/20 bg-[#CC3A63]/10 text-[#CC3A63]"
            : "border-[#A2AB73]/30 bg-[#A2AB73]/15 text-[#748048]"
        }`}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{activity.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{activity.shortDescription}</p>
      <span
        className={`mt-auto pt-5 text-xs font-bold tracking-[0.16em] transition group-hover:tracking-[0.2em] ${
          isTechnical ? "text-[#CC3A63]" : "text-[#748048]"
        }`}
      >
        VIEW EXPERIENCE →
      </span>
    </button>
  );
}

function Activities() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const technicalActivities = activities.filter((activity) => activity.category === "technical");
  const extracurricularActivities = activities.filter((activity) => activity.category === "extracurricular");
  const closeModal = () => setSelectedActivity(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F9F0E0] pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <header className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.24em] text-[#CC3A63]">EXPERIENCES</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">
            MY ACTIVITIES
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted italic sm:text-xl">
            Beyond projects and academics — experiences that challenged me to build, collaborate, and explore.
          </p>
          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        </header>

        <section className="mt-12 sm:mt-14" aria-labelledby="technical-participations-title">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#CC3A63]/20" />
            <h2 id="technical-participations-title" className="text-sm font-bold tracking-[0.2em] text-[#CC3A63]">
              TECHNICAL PARTICIPATIONS
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {technicalActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} onSelect={setSelectedActivity} variant="technical" />
            ))}
          </div>
        </section>

        <section className="mt-14 sm:mt-16" aria-labelledby="extracurricular-title">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#A2AB73]/35" />
            <h2 id="extracurricular-title" className="text-sm font-bold tracking-[0.2em] text-[#748048]">
              EXTRACURRICULAR
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {extracurricularActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} onSelect={setSelectedActivity} variant="extracurricular" />
            ))}
          </div>
        </section>
      </div>

      {selectedActivity && <ActivityModal activity={selectedActivity} onClose={closeModal} />}
    </main>
  );
}

export default Activities;
