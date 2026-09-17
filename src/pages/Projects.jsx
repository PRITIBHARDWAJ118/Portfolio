import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const featuredProject = projects.find((project) => project.isPrimary);
  const otherProjects = projects.filter(
    (project) => !project.isMore && project.title !== featuredProject?.title,
  );

  return (
    <main className="min-h-screen bg-canvas pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">MY PROJECTS</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Things I&apos;ve built
          </h1>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Things I&apos;ve built across AI, Full Stack Development, IoT and Embedded Systems.
          </p>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent/0" />
        </header>

        {featuredProject && (
          <section className="mt-12 sm:mt-14" aria-labelledby="featured-project-title">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent">FEATURED PROJECT</p>
            <article className="mt-4 overflow-hidden rounded-xl border border-accent/20 bg-surface shadow-2xl shadow-accent-dark/20 lg:grid lg:grid-cols-2">
              <div className="min-h-64 overflow-hidden bg-surface-strong lg:min-h-full">
                <img
                  src={featuredProject.image}
                  alt=""
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 id="featured-project-title" className="text-2xl font-semibold text-ink sm:text-3xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">{featuredProject.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-ink"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredProject.github ? (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
                    >
                      GitHub
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-subtle"
                    >
                      GitHub Unavailable
                    </button>
                  )}
                  {featuredProject.detailsPath ? (
                    <a
                      href={featuredProject.detailsPath}
                      className="rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-accent/50 hover:bg-surface-strong/70"
                    >
                      View Details
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-subtle"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </article>
          </section>
        )}

        <section className="mt-14 sm:mt-16" aria-labelledby="all-projects-title">
          <h2 id="all-projects-title" className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            ALL PROJECTS <span className="text-accent">&gt;</span>
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Projects;
