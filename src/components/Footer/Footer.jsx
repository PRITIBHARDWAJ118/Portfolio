import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/PRITIBHARDWAJ118",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priti-a7ba19279/",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:pritibhardwaj118@gmail.com",
    icon: FaEnvelope,
    external: false,
  },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-surface-strong">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-12 xl:px-20">
        <div>
          <p className="text-base font-semibold text-ink">
            Studio<span className="text-accent">P</span>
          </p>
          <p className="mt-1 text-xs text-muted">Built with React &amp; Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex size-9 items-center justify-center rounded-md border border-line text-muted transition hover:border-accent/50 hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={label === "Email" ? "Email Priti" : label}
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-subtle">© 2026 Priti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
