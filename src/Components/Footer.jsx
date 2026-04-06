import { Link } from 'react-scroll';
import { FOOTER_LINKS, NAV_LINKS, SOCIAL_LINKS } from '../Utils/Constants';

function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="section-shell grid gap-10 py-10 sm:py-12 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:gap-16">
        <div>
          <p className="font-['Sora'] text-2xl font-semibold">Spark Studio</p>
          <p className="mt-4 max-w-md text-base leading-8 text-[var(--text-secondary)]">
            Modern landing pages that feel intentional, interactive, and fully ready for production deployment.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Explore</p>
          <div className="mt-5 flex flex-col gap-4">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={700}
                offset={-88}
                className="cursor-pointer text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Follow</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--text-secondary)] transition hover:-translate-y-0.5 hover:text-[var(--text-primary)]"
                >
                  <Icon />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-4 border-t border-[var(--border)] py-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        <div className="flex flex-wrap gap-4">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link key={link.to} to={link.to} smooth duration={700} offset={-88} className="cursor-pointer hover:text-[var(--text-primary)]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
