import { activities } from "../../data/activities";
import { Link } from "react-router-dom";
import ActivityCard from "../ActivityCard/ActivityCard";
import SectionTitle from "../SectionTitle/SectionTitle";

function Participations() {
  return (
    <section className="bg-canvas py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Link
          to="/activities"
          className="inline-block rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="View all participations and activities"
        >
          <SectionTitle title="Participations & Activities" />
        </Link>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-5">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Participations;
