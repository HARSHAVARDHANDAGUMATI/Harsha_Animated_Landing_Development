import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../Utils/Animations';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-14 ${alignment}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-6 text-balance">{title}</h2>
      <p className={`section-copy mt-5 ${align === 'center' ? 'mx-auto' : ''}`}>{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
