import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative py-2 text-xs font-medium transition-colors duration-300 lg:text-sm ${
      isActive
        ? "text-ink after:scale-x-100"
        : "text-muted hover:text-ink after:scale-x-0 hover:after:scale-x-100"
    } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:bg-accent after:transition-transform after:duration-300`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/70 backdrop-blur-md">
      <nav
        className="relative flex h-16 w-full items-center px-4 sm:px-6 lg:h-20 lg:px-10"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="group shrink-0 lg:mr-5 xl:mr-7"
          aria-label="Priti home"
        >
          <span className="block text-3xl font-black italic leading-none text-[#CC3A63] transition duration-300 group-hover:scale-110 group-hover:text-[#A92E50] lg:text-4xl">
            P
          </span>
        </NavLink>

        <div className="hidden min-w-0 items-center gap-3 whitespace-nowrap lg:flex xl:gap-4">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={linkClasses}
            >
              {name}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition hover:bg-surface-strong hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>

        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-b border-line bg-surface/95 px-4 py-4 shadow-2xl backdrop-blur-md lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl font-black italic leading-none text-[#CC3A63]">P</span>
                <span className="text-sm font-semibold text-ink">Priti&apos;s portfolio</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-md text-2xl leading-none text-muted transition hover:bg-surface-strong hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Close navigation menu"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-accent/15 text-ink"
                        : "text-muted hover:bg-surface-strong hover:text-ink"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
