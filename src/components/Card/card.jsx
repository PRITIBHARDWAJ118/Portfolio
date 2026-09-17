import { Link } from "react-router-dom";

function Card({
  title,
  subtitle,
  tech,
  image,
  path,
  overlay,
  variant = "explore",
  isMore = false,
  onClick,
}) {
  const isProjectCard = variant === "project";
  const CardContainer = onClick ? "button" : Link;
  const containerProps = onClick ? { type: "button", onClick } : { to: path };

  return (
    <CardContainer
      {...containerProps}
      className={`group relative h-40 w-64 shrink-0 overflow-hidden rounded-md shadow-lg shadow-ink/15 transition duration-300 hover:z-10 hover:scale-[1.04] hover:shadow-2xl hover:shadow-accent-dark/60 focus:outline-none focus:ring-2 focus:ring-accent sm:h-44 sm:w-72 ${
        isMore ? "border border-line bg-surface-strong" : "bg-surface-strong"
      }`}
      aria-label={isMore ? title : `${title}: ${subtitle || tech}`}
    >
      {isMore ? (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-accent)_20%,transparent),transparent_60%)] text-center transition duration-300 group-hover:bg-accent-dark/10">
          <span className="text-4xl font-light text-accent-light transition duration-300 group-hover:scale-110">
            +
          </span>
          <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
        </div>
      ) : (
        <>
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-75 transition duration-300 group-hover:scale-105 group-hover:brightness-125"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${overlay}`} />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent origin-left scale-x-0 transition duration-300 group-hover:scale-x-100" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-0.5 text-sm text-surface">
              {isProjectCard ? tech : subtitle}
            </p>
          </div>
          {isProjectCard && (
            <span className="absolute right-4 top-4 translate-y-1 text-xs font-semibold text-accent-light opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Project →
            </span>
          )}
        </>
      )}
    </CardContainer>
  );
}

export default Card;
