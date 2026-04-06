import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useCounter } from '../Hooks/UseCounter';
import { STATS } from '../Utils/Constants';
import { fadeUp, staggerContainer, viewportConfig } from '../Utils/Animations';

function StatCard({ stat, shouldAnimate }) {
  const currentValue = useCounter(stat.value, shouldAnimate);
  const Icon = stat.icon;

  return (
    <motion.div variants={fadeUp} className="glass-panel rounded-[28px] p-6 sm:p-7">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-white/5 text-2xl text-[var(--brand)]">
        <Icon />
      </div>
      <div className="mt-8 font-['Sora'] text-4xl font-semibold sm:text-5xl">
        {currentValue}
        {stat.suffix}
      </div>
      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">{stat.label}</p>
    </motion.div>
  );
}

function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section id="stats" ref={sectionRef} className="relative">
      <div className="section-shell section-padding">
        <SectionHeading
          eyebrow="Impact Metrics"
          title="Animated proof points that reinforce trust without feeling generic."
          description="The stats section pairs motion-based count-up behavior with crisp messaging so the page earns credibility while keeping the visual rhythm alive."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} shouldAnimate={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
