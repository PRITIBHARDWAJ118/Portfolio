import { achievements } from "../../data/achievements";
import SectionTitle from "../SectionTitle/SectionTitle";
import AchievementCard from "../AchievementCard/AchievementCard";

function Achievements() {
  return (
    <section className="bg-canvas py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <SectionTitle title="Achievements" />
        <div className="mt-5 grid gap-4 md:grid-cols-3 lg:gap-5">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
