import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FEATURES } from '../Utils/Constants';
import { cardHover, fadeUp, staggerContainer, viewportConfig } from '../Utils/Animations';

function Features() {
  return (
    <section id="features" className="relative">
      <div className="section-shell section-padding">
        <SectionHeading
          eyebrow="Feature Stack"
          title="Designed to feel cinematic, built to stay maintainable."
          description="This landing page system blends product storytelling, animation rhythm, and clean code structure so each section feels premium without becoming fragile."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className="glass-panel group relative overflow-hidden rounded-[30px] p-7"
                variants={fadeUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                />
                <motion.div variants={cardHover} className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-white/5 text-2xl text-[var(--brand)]">
                    <Icon />
                  </div>
                  <h3 className="mt-8 font-['Sora'] text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{feature.description}</p>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
