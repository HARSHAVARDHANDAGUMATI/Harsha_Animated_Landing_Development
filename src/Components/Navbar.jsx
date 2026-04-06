import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { NAV_LINKS } from '../Utils/Constants';
import { useScrollProgress } from '../Hooks/UseScrollProgress';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollProgress();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`section-shell flex items-center justify-between rounded-full border px-4 py-3 transition duration-400 sm:px-6 ${
          isScrolled ? 'bg-[var(--bg-elevated)] shadow-[var(--shadow)] backdrop-blur-2xl' : 'bg-transparent'
        } border-[var(--border)]`}
      >
        <Link
          to="hero"
          smooth
          duration={700}
          className="cursor-pointer font-['Sora'] text-lg font-semibold tracking-wide"
        >
          Spark Studio
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-88}
              duration={700}
              className="cursor-pointer text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              activeClass="text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link to="contact" smooth duration={700} offset={-88} className="primary-button cursor-pointer px-5 py-2.5 text-sm">
            Let&apos;s Build
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((currentState) => !currentState)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="section-shell mt-4 rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-5 shadow-[var(--shadow)] backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={700}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--border)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contact"
              smooth
              duration={700}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="primary-button cursor-pointer"
            >
              Let&apos;s Build
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
