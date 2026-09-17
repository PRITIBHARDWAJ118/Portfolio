import { skills } from "../../data/skills";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "../SkillCard/SkillCard";

function TopSkills() {
  return (
    <section className="bg-canvas py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <SectionTitle title="Top Skills" />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 xl:grid-cols-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSkills;
