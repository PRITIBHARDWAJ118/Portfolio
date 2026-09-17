import { useCallback, useState } from "react";
import AchievementCard from "../components/AchievementCard/AchievementCard";
import AboutModal from "../components/AboutModal/AboutModal";
import Hero from "../components/Hero/Hero";
import { achievements } from "../data/achievements";

function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const closeAbout = useCallback(() => setIsAboutOpen(false), []);

  return (
    <main>
      <Hero onAboutOpen={() => setIsAboutOpen(true)} />
      <section className="bg-[#F9F0E0] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 lg:px-12 lg:pt-12 xl:px-20">
        <div className="mx-auto max-w-2xl border-t border-[#A2AB73]/30 pt-12 text-center sm:pt-16">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#CC3A63]">ABOUT ME</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5A5260] sm:text-lg">
            I’m a software engineering enthusiast who loves turning complex ideas into practical, user-centric technology. With a strong foundation in Java, DSA, OOP, and full-stack development, I explore the intersection of software, AI, IoT, cloud, and hardware-software integration to build meaningful solutions. Beyond technical problem-solving, I bring design thinking, communication, teamwork, leadership, and adaptability to every challenge—combining curiosity and creativity with a constant drive to learn, build, and innovate.
          </p>
          <button
            type="button"
            onClick={() => setIsAboutOpen(true)}
            className="mt-8 inline-flex items-center justify-center rounded-md border border-[#CC3A63]/35 px-5 py-3 text-sm font-semibold text-[#CC3A63] transition hover:-translate-y-0.5 hover:border-[#CC3A63] hover:bg-[#CC3A63] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#F9F0E0]"
          >
            More About Me →
          </button>
        </div>
      </section>
      <section className="bg-[#F9F0E0] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 xl:px-20" aria-labelledby="achievements-title">
        <div className="mx-auto max-w-screen-xl border-t border-[#A2AB73]/30 pt-12 sm:pt-16">
          <div className="max-w-2xl">
            <h2 id="achievements-title" className="text-3xl font-semibold tracking-tight text-[#252321] sm:text-4xl">
              ACHIEVEMENTS
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5A5260] italic sm:text-lg">
              A few milestones that reflect my journey, consistency, and work beyond the classroom.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} {...achievement} />
            ))}
          </div>
        </div>
      </section>
      {isAboutOpen && <AboutModal onClose={closeAbout} />}
    </main>
  );
}

export default Home;
