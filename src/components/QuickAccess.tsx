import { Tag, Palette, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Tag,
    title: 'Săn Voucher',
    desc: 'Hàng ngàn mã giảm giá hot',
    accentColor: 'from-rose-500 to-orange-500',
    borderColor: 'border-rose-500/30',
    hoverBorder: 'hover:border-rose-500/60',
    hoverGlow: 'hover:shadow-rose-500/40',
  },
  {
    icon: Palette,
    title: 'Đặt Thiết Kế',
    desc: 'Web, logo, banner chuyên nghiệp',
    accentColor: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/60',
    hoverGlow: 'hover:shadow-blue-500/40',
  },
  {
    icon: Shield,
    title: 'Phần Mềm BQ',
    desc: 'Bản quyền chính hãng giá tốt',
    accentColor: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/60',
    hoverGlow: 'hover:shadow-emerald-500/40',
  },
  {
    icon: Headphones,
    title: 'Hỗ Trợ 24/7',
    desc: 'Tư vấn miễn phí tận tâm',
    accentColor: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/60',
    hoverGlow: 'hover:shadow-amber-500/40',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function QuickAccess() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative glass rounded-2xl border transition-all duration-300 p-6 text-left ${service.borderColor} ${service.hoverBorder} ${service.hoverGlow} hover:shadow-2xl`}
              >
                {/* Gradient accent on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center mb-4 shadow-lg transition-all duration-300 group-hover:scale-110`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{
                    backgroundImage: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className={`mt-4 flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${service.accentColor} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Tìm hiểu thêm →
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
