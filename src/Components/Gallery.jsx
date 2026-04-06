import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from 'react-modal';
import { FiExternalLink, FiX } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { GALLERY_ITEMS } from '../Utils/Constants';
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../Utils/Animations';

function Gallery() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <section id="gallery" className="relative">
      <div className="section-shell section-padding">
        <SectionHeading
          eyebrow="Interactive Gallery"
          title="A showcase grid with motion, hover depth, and full-screen preview."
          description="Each visual card highlights a different product story. Hover states invite exploration, and modal preview keeps the gallery feeling editorial instead of static."
          align="center"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              variants={fadeUp}
              onClick={() => setActiveItem(item)}
              className={`group glass-panel relative overflow-hidden rounded-[32px] text-left ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative h-full min-h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(3,10,25,0.78)_90%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/85 backdrop-blur-lg">
                    {item.category}
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-['Sora'] text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/78 sm:text-base">{item.description}</p>
                    </div>
                    <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:inline-flex">
                      <FiExternalLink />
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeItem && (
            <Modal
              isOpen={Boolean(activeItem)}
              onRequestClose={() => setActiveItem(null)}
              shouldCloseOnOverlayClick
              closeTimeoutMS={250}
              style={{
                overlay: {
                  backgroundColor: 'rgba(4, 10, 24, 0.78)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 80,
                  display: 'grid',
                  placeItems: 'center',
                  padding: '1.25rem',
                },
                content: {
                  position: 'relative',
                  inset: 'unset',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-strong)',
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '32px',
                  maxWidth: '960px',
                  width: '100%',
                  boxShadow: 'var(--shadow)',
                },
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={scaleIn}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-lg"
                >
                  <FiX />
                </button>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <img src={activeItem.image} alt={activeItem.title} className="h-full max-h-[70vh] w-full object-cover" />
                  <div className="p-6 sm:p-8">
                    <span className="eyebrow">{activeItem.category}</span>
                    <h3 className="mt-6 font-['Sora'] text-3xl font-semibold">{activeItem.title}</h3>
                    <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">{activeItem.description}</p>
                    <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                      Built to demonstrate strong composition, layered depth, and premium interaction patterns that still feel usable on smaller screens.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery;
