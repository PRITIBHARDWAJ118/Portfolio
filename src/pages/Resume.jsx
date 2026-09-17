import ResumeCard from "../components/ResumeCard/ResumeCard.jsx";
import resumes from "../data/resumes.js";

function Resume() {
  return (
    <main className="min-h-screen bg-[#F9F0E0] pb-16 pt-28 text-[#252321] sm:pt-32">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-12">
        <header className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.24em] text-[#CC3A63]">CAREER PROFILE</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">MY RESUMES</h1>
          <p className="mt-4 text-base leading-7 text-[#5A5260] sm:text-lg">
            Choose a resume based on what you&apos;re looking for.
          </p>
          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        </header>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Resumes">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} {...resume} />
          ))}
        </section>

        <section className="mt-16 border-t border-[#A2AB73]/30 pt-10" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-sm font-bold tracking-[0.22em] text-[#CC3A63]">
            LET&apos;S CONNECT
          </h2>
          <p className="mt-3 text-base text-[#5A5260]">Feel free to reach out.</p>
          <div className="mt-6 flex flex-col gap-3 text-base sm:flex-row sm:gap-8">
            <a
              href="mailto:pritibhardwaj118@gmail.com"
              className="font-medium text-[#CC3A63] transition hover:text-[#A92E50] hover:underline focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#F9F0E0]"
            >
              pritibhardwaj118@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/priti-a7ba19279/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#CC3A63] transition hover:text-[#A92E50] hover:underline focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#F9F0E0]"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Resume;
