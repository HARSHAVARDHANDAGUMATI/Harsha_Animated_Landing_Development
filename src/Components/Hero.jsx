import { motion } from 'framer-motion';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';
import heroImage from '../assets/hero.png';
import { useTypeWriter } from '../Hooks/UseTypeWriter';
import {
  FEATURE_PILLARS,
  HERO_ACTIONS,
  HERO_BADGES,
  HERO_METRICS,
  HERO_TYPED_WORDS,
} from '../Utils/Constants';
import {
  fadeUp,
  floatingAnimation,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from '../Utils/Animations';

function Hero() {
  const typedWord = useTypeWriter(HERO_TYPED_WORDS);

  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell section-padding grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Designed to hit harder
          </motion.span>

          <motion.h1
            variants={slideInLeft}
            className="mt-7 max-w-3xl font-['Sora'] text-5xl font-semibold leading-[1.05] text-balance sm:text-6xl lg:text-7xl"
          >
            We create
            <span className="gradient-text"> {typedWord || 'immersive'} </span>
            digital experiences people feel in their chest.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
            Not another safe, forgettable website. This is bold visual tension, hypnotic motion,
            and a launch presence engineered to pull people in, keep them staring, and make them click.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] backdrop-blur-lg"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            {HERO_ACTIONS.map((action) => {
              const Icon = action.secondary ? FiPlayCircle : FiArrowRight;

              return (
                <Link
                  key={action.to}
                  to={action.to}
                  smooth
                  duration={700}
                  offset={-88}
                  className={action.secondary ? 'secondary-button cursor-pointer' : 'primary-button cursor-pointer'}
                >
                  {action.label}
                  <Icon />
                </Link>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-[24px] p-5">
                <div className="font-['Sora'] text-3xl font-semibold">{metric.value}</div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideInRight}
        >
          <motion.div
            className="absolute left-4 top-8 h-40 w-40 rounded-full bg-[var(--brand)]/20 blur-3xl"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute bottom-10 right-0 h-52 w-52 rounded-full bg-[var(--brand-warm)]/20 blur-3xl"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 6.3 } }}
          />

          <div className="glass-panel relative overflow-hidden rounded-[36px] p-4 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,208,183,0.14),transparent_35%,rgba(64,119,255,0.12),transparent_70%,rgba(255,125,84,0.16))]" />
            <div className="relative rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 sm:p-5">
              <img
                src={heroImage}
                alt="Creative dashboard preview"
                className="mask-fade-bottom w-full rounded-[22px] object-cover"
              />
            </div>

            <div className="relative mt-5 grid gap-4 sm:grid-cols-3">
              {FEATURE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                    whileHover={{ y: -6 }}
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[var(--brand)]">
                      <Icon />
                    </div>
                    <h3 className="font-['Sora'] text-base font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{pillar.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
