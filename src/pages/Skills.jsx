import SkillCard from "../components/SkillCard/SkillCard";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F9F0E0] pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <header className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.24em] text-[#CC3A63]">TOOLKIT</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">
            MY SKILLS
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted italic sm:text-xl">
            Technologies, tools, and concepts I use to build practical solutions.
          </p>
          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        </header>

        <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
          {skillCategories.map((category, index) => (
            <section key={category.category} aria-labelledby={`skill-category-${index}`}>
              <div className="flex items-center gap-4">
                <h2
                  id={`skill-category-${index}`}
                  className={`shrink-0 text-sm font-bold tracking-[0.18em] ${
                    category.isSoftSkills ? "text-[#748048]" : "text-[#CC3A63]"
                  }`}
                >
                  {category.category}
                </h2>
                <div className={`h-px flex-1 ${category.isSoftSkills ? "bg-[#A2AB73]/35" : "bg-[#CC3A63]/20"}`} />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} isSoftSkill={category.isSoftSkills} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;
