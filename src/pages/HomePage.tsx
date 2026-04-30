import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import QuickAccess from '../components/QuickAccess';
import ServicesSection from '../components/ServicesSection';
import ContentSection from '../components/ContentSection';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSlider />
      <QuickAccess />
      <ServicesSection />
      <ContentSection />
    </motion.div>
  );
}
