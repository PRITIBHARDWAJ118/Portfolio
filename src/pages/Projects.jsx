import { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { projects } from "../data/projects";
import krishiNetraImage from "../assets/project image/image.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => project.id !== featuredProject?.id);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F9F0E0] pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <header className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.24em] text-[#CC3A63]">PORTFOLIO</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">
            MY PROJECTS
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted italic sm:text-xl">
            Practical systems spanning AI, full-stack development, IoT, and embedded technology.
          </p>
          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73]" />
        </header>

        {featuredProject && (
          <section className="mt-12 sm:mt-14" aria-labelledby="featured-project-title">
            <p className="text-xs font-bold tracking-[0.2em] text-[#CC3A63]">FEATURED PROJECT</p>
            <button
              type="button"
              onClick={() => setSelectedProject(featuredProject)}
              className="group mt-4 w-full overflow-hidden rounded-2xl border border-[#CC3A63]/20 bg-surface text-left shadow-[0_16px_34px_rgba(91,65,60,0.14)] transition duration-300 hover:-translate-y-1 hover:border-[#CC3A63]/45 hover:shadow-[0_20px_38px_rgba(204,58,99,0.18)] focus:outline-none focus:ring-2 focus:ring-[#CC3A63] focus:ring-offset-2 focus:ring-offset-[#F9F0E0] lg:grid lg:grid-cols-2"
            >
              <div className="relative min-h-56 overflow-hidden lg:min-h-full">
                <img
                  src={krishiNetraImage}
                  alt="KrishiNetra crop disease detection project"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252321]/65 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-bold tracking-[0.2em] text-white/75">EDGE AI · IOT</div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 id="featured-project-title" className="text-2xl font-semibold text-ink sm:text-3xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">{featuredProject.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#CC3A63]/20 bg-[#CC3A63]/5 px-3 py-1.5 text-xs font-medium text-ink"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-block text-xs font-bold tracking-[0.18em] text-[#CC3A63] transition group-hover:tracking-[0.22em]">EXPLORE PROJECT →</span>
              </div>
            </button>
          </section>
        )}

        <section className="mt-14 sm:mt-16" aria-labelledby="all-projects-title">
          <h2 id="all-projects-title" className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            ALL PROJECTS <span className="text-[#CC3A63]">&gt;</span>
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} {...project} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </section>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}

export default Projects;
