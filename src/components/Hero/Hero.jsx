import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden bg-canvas pt-16 lg:pt-20">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,var(--color-canvas)_0%,var(--color-surface-strong)_48%,var(--color-canvas)_100%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-full bg-[radial-gradient(circle_at_78%_48%,color-mix(in_srgb,var(--color-accent)_28%,transparent),transparent_20%),radial-gradient(circle_at_70%_55%,color-mix(in_srgb,var(--color-accent-dark)_20%,transparent),transparent_42%)]" />

      <div className="mx-auto grid min-h-[calc(72svh-4rem)] max-w-screen-2xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-[0.45fr_0.55fr] md:gap-2 lg:min-h-[calc(72svh-5rem)] lg:px-12 lg:py-16 xl:px-20">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
            Welcome to
          </p>
          <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
            STUDIO <span className="text-accent">P</span>
          </h1>
          <p className="mt-5 text-sm font-medium text-muted sm:text-base lg:text-lg">
            Full Stack Developer <span className="px-1 text-accent">•</span> IoT
            Enthusiast <span className="px-1 text-accent">•</span> AI Explorer
          </p>
          <p
            id="studio-p-introduction"
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
            <a
              href="#studio-p-introduction"
              className="inline-flex items-center justify-center rounded-md border border-line bg-surface-strong/70 px-5 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface-strong focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
            >
              <span aria-hidden="true" className="mr-2 text-base">
                ⓘ
              </span>
              More Info
            </a>
          </div>
        </div>

        <div className="relative min-h-64 overflow-hidden md:min-h-96 lg:min-h-[30rem]">
          <img
            src={heroImage}
            alt="Abstract layered StudioP visual"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-canvas)_0%,color-mix(in_srgb,var(--color-canvas)_88%,transparent)_12%,color-mix(in_srgb,var(--color-canvas)_25%,transparent)_50%,transparent_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          <div className="absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-accent-dark/20 blur-3xl animate-[signature-glow_5s_ease-in-out_infinite] sm:h-64 sm:w-64 lg:h-80 lg:w-80" />
          <div className="absolute bottom-6 right-8 animate-[signature-float_6s_ease-in-out_infinite] sm:bottom-10 sm:right-12 lg:bottom-14 lg:right-16">
            <span
              aria-hidden="true"
              className="block select-none bg-gradient-to-br from-accent via-accent to-accent-dark bg-clip-text text-[10rem] font-black italic leading-[0.72] tracking-tighter text-transparent opacity-85 drop-shadow-[0_18px_20px_color-mix(in_srgb,var(--color-accent-dark)_70%,transparent)] [-webkit-text-stroke:1px_color-mix(in_srgb,var(--color-surface)_50%,transparent)] sm:text-[13rem] md:text-[14rem] lg:text-[18rem] xl:text-[21rem]"
            >
              P
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 block translate-x-2 translate-y-3 bg-gradient-to-br from-accent-dark to-ink bg-clip-text text-[10rem] font-black italic leading-[0.72] tracking-tighter text-transparent opacity-70 sm:text-[13rem] md:text-[14rem] lg:text-[18rem] xl:text-[21rem]"
            >
              P
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
