import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SectionHeading from './SectionHeading';
import { CONTACT_CHANNELS, CONTACT_DETAILS } from '../Utils/Constants';
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '../Utils/Animations';
import { contactValidation } from '../Utils/Validators';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (values) => {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    toast.success(`Thanks ${values.name.split(' ')[0]}, your message is on the way.`);
    reset();
  };

  return (
    <section id="contact" className="relative">
      <div className="section-shell section-padding">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideInLeft}
            className="space-y-8"
          >
            <SectionHeading
              eyebrow="Contact & Launch"
              title="Ready to turn the brief into a launch-worthy experience?"
              description="The contact section is structured like a real product handoff: clear service framing, visible support channels, and a polished form with validation and success feedback."
            />

            <motion.div className="grid gap-4" variants={staggerContainer}>
              {CONTACT_CHANNELS.map((channel) => {
                const Icon = channel.icon;

                return (
                  <motion.div
                    key={channel.title}
                    variants={fadeUp}
                    className="glass-panel rounded-[24px] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/5 text-[var(--brand)]">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="font-['Sora'] text-lg font-semibold">{channel.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{channel.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="glass-panel rounded-[28px] p-6">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div key={detail.label} className="flex items-center gap-3 py-3 text-[var(--text-secondary)] first:pt-0 last:pb-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-[var(--brand)]">
                      <Icon />
                    </span>
                    <span>{detail.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideInRight}
            className="glass-panel rounded-[36px] p-6 sm:p-8 lg:p-10"
          >
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register('name', contactValidation.name)}
                    className="w-full rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--brand)]"
                  />
                  {errors.name && <p className="mt-2 text-sm text-rose-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    {...register('email', contactValidation.email)}
                    className="w-full rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--brand)]"
                  />
                  {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]" htmlFor="company">
                  Company / Brand
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Optional"
                  {...register('company', contactValidation.company)}
                  className="w-full rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--brand)]"
                />
                {errors.company && <p className="mt-2 text-sm text-rose-400">{errors.company.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]" htmlFor="message">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us about the landing page, your audience, and the visual direction you want."
                  {...register('message', contactValidation.message)}
                  className="w-full rounded-[24px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--brand)]"
                />
                {errors.message && <p className="mt-2 text-sm text-rose-400">{errors.message.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="primary-button mt-2 w-full sm:w-fit">
                {isSubmitting ? 'Sending your brief...' : 'Send Project Brief'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
