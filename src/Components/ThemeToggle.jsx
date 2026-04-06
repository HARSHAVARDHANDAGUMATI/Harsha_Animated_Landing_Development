import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../Hooks/UseTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
    >
      <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
        <FiSun
          className={`absolute text-lg transition duration-300 ${isDark ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}
        />
        <FiMoon
          className={`absolute text-lg transition duration-300 ${isDark ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'}`}
        />
      </span>
    </button>
  );
}

export default ThemeToggle;
