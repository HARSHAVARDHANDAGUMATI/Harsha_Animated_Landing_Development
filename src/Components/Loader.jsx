import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-[var(--bg)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="h-24 w-24 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(30,208,183,0.32),rgba(64,119,255,0.2),rgba(255,125,84,0.22))] backdrop-blur-xl"
          animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 0.98, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute h-24 w-24 rounded-[28px] border border-white/20"
          animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="space-y-2 text-center">
          <p className="font-['Sora'] text-xl font-semibold tracking-wide">Spark Studio</p>
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
            crafting launch-ready motion
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
