import { motion } from 'framer-motion';
import { useScrollProgress } from '../Hooks/UseScrollProgress';

function ScrollProgress() {
  const { scrollProgress } = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-[linear-gradient(90deg,var(--brand),var(--brand-strong),var(--brand-warm))] shadow-[0_0_30px_rgba(30,208,183,0.45)]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export default ScrollProgress;
