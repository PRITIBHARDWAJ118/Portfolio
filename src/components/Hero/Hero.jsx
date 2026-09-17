import { Link } from "react-router-dom";
import profileImage from "../../assets/profile/profile.jpg";

function Hero({ onAboutOpen }) {
  return (
    <section className="min-h-[72svh] overflow-hidden bg-canvas pt-16 lg:pt-20">
      <div className="mx-auto grid min-h-[calc(72svh-4rem)] max-w-screen-2xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-[0.45fr_0.55fr] md:gap-2 lg:min-h-[calc(72svh-5rem)] lg:px-12 lg:py-16 xl:px-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A2AB73]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
              Portfolio
            </p>
          </div>
          <h1 className="text-4xl font-semibold italic leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I am Priti
          </h1>
          <p className="mt-3 text-3xl font-medium italic tracking-tight text-[#CC3A63] sm:text-4xl lg:text-5xl">Meet me</p>
          <p className="mt-5 text-sm font-medium text-muted sm:text-base lg:text-lg">
            Full Stack Developer <span className="px-1 text-accent">•</span> IoT
            Enthusiast <span className="px-1 text-accent">•</span> AI Explorer
          </p>
          <p
            id="hero-introduction"
            className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base"
          >
            Explore my journey, projects, and the technology I&apos;ve built through
            code, electronics, and creativity.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-dark/50 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-accent-dark/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
            >
              <span aria-hidden="true" className="mr-2">
                ▶
              </span>
              Explore Portfolio
            </Link>
            <button
              type="button"
              onClick={onAboutOpen}
              className="inline-flex items-center justify-center rounded-md border border-line bg-surface-strong/70 px-5 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface-strong focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
            >
              <span aria-hidden="true" className="mr-2 text-base">
                ⓘ
              </span>
              More Info
            </button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[2185/2446] w-full max-w-md md:max-w-lg lg:h-[30rem] lg:w-auto">
          <div className="absolute inset-3 rounded-[1.75rem] bg-[#A2AB73]/15 blur-2xl" aria-hidden="true" />
          <img
            src={profileImage}
            alt="Priti"
            className="absolute inset-0 h-full w-full rounded-[1.5rem] object-contain shadow-[0_20px_45px_rgba(91,65,60,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
