import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../Utils/Constants';
import { fadeUp, viewportConfig } from '../Utils/Animations';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % TESTIMONIALS.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative">
      <div className="section-shell section-padding">
        <SectionHeading
          eyebrow="Client Stories"
          title="A smooth testimonial slider that keeps social proof feeling alive."
          description="Instead of a static quote wall, this section uses soft transitions, motion, and clear controls to help reviews feel curated and credible."
          align="center"
        />

        <motion.div
          className="glass-panel mx-auto max-w-4xl overflow-hidden rounded-[36px] p-6 sm:p-8 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="eyebrow">Trusted by founders & growth teams</div>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)]"
              >
                <FiArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % TESTIMONIALS.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)]"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="mt-10 min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="flex gap-1 text-[var(--brand-warm)]">
                  {Array.from({ length: activeTestimonial.rating }).map((_, index) => (
                    <FiStar key={`${activeTestimonial.name}-${index}`} className="fill-current" />
                  ))}
                </div>
                <blockquote className="mt-8 font-['Sora'] text-2xl font-medium leading-[1.6] text-balance sm:text-3xl">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-10">
                  <p className="text-lg font-semibold">{activeTestimonial.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                    {activeTestimonial.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-10 bg-[var(--brand)]' : 'w-2.5 bg-white/20'
                }`}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)]"
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % TESTIMONIALS.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)]"
            >
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
