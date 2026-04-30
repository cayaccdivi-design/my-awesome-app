import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2, Sparkles as SparklesIcon, Layers, Box, Grid3x3, Play, MessageCircle, ShoppingBag, ArrowRight, Check, Star, Zap, Sparkles, PenTool, Image as ImageIcon, Youtube, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'logo',
    icon: PenTool,
    title: 'Logo',
    desc: 'Logo độc quyền, nhận diện thương hiệu mạnh mẽ. File đầy đủ AI, PNG, SVG.',
    price: '150K',
    originalPrice: '500K',
    discount: 70,
    features: ['3 mẫu chọn 1', 'File AI+PNG+SVG', 'Sửa miễn phí 3 lần', 'Bản quyền 100%'],
    gradient: 'from-blue-600 to-blue-400',
    accentColor: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    popular: true,
    rating: 5.0,
    sold: 421,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'banner',
    icon: ImageIcon,
    title: 'Banner',
    desc: 'Banner quảng cáo, sự kiện, khuyến mãi — thiết kế bắt mắt, chuyển đổi cao.',
    price: '50K',
    originalPrice: '200K',
    discount: 75,
    features: ['PSD + PNG', 'Sửa 2 lần', 'Giao 12h', 'Đa kích thước'],
    gradient: 'from-orange-600 to-orange-400',
    accentColor: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    popular: false,
    rating: 4.8,
    sold: 892,
    image: 'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'avatar',
    icon: Layers,
    title: 'Avatar',
    desc: 'Avatar cá nhân, fanpage, nhóm — phong cách đa dạng, nổi bật giữa đám đông.',
    price: '30K',
    originalPrice: '100K',
    discount: 70,
    features: ['2 mẫu chọn 1', 'File PNG', 'Sửa 1 lần', 'Giao 6h'],
    gradient: 'from-purple-600 to-purple-400',
    accentColor: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    popular: false,
    rating: 4.7,
    sold: 1203,
    image: 'https://images.pexels.com/photos/3785705/pexels-photo-3785705.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'thumbnail',
    icon: Youtube,
    title: 'Thumbnail',
    desc: 'Thumbnail YouTube, TikTok — thu hút click, tăng view, thiết kế chuyên nghiệp.',
    price: '40K',
    originalPrice: '150K',
    discount: 73,
    features: ['File PSD+PNG', 'Sửa 2 lần', 'Tối ưu click', 'Giao 8h'],
    gradient: 'from-red-600 to-red-400',
    accentColor: 'bg-red-500/20',
    iconColor: 'text-red-400',
    popular: true,
    rating: 4.9,
    sold: 678,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'wallpaper',
    icon: Grid3x3,
    title: 'Wallpaper',
    desc: 'Hình nền desktop, mobile — độ phân giải cao, phong cách đa dạng từ minimal đến gaming.',
    price: '35K',
    originalPrice: '120K',
    discount: 71,
    features: ['4K+ resolution', 'Desktop + Mobile', 'File PNG', 'Sửa 1 lần'],
    gradient: 'from-teal-600 to-teal-400',
    accentColor: 'bg-teal-500/20',
    iconColor: 'text-teal-400',
    popular: false,
    rating: 4.6,
    sold: 534,
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'banner',
    icon: Youtube,
    title: 'Banner YouTube',
    desc: 'Banner kênh YouTube chuẩn kích thước, hiển thị tối ưu mọi thiết bị, thu hút subscriber.',
    price: '80K',
    originalPrice: '300K',
    discount: 73,
    features: ['Chuẩn 2560x1440', 'Tối ưu mọi thiết bị', 'PSD+PNG', 'Sửa 2 lần'],
    gradient: 'from-pink-600 to-pink-400',
    accentColor: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
    popular: true,
    rating: 4.9,
    sold: 312,
    image: 'https://images.pexels.com/photos/2570886/pexels-photo-2570886.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'discord',
    icon: MessageCircle,
    title: 'Banner Discord',
    desc: 'Banner server Discord — phong cách gaming, community, anime, tùy chỉnh theo chủ đề.',
    price: '60K',
    originalPrice: '200K',
    discount: 70,
    features: ['Chuẩn 1920x480', 'Tùy chỉnh chủ đề', 'File PNG', 'Sửa 2 lần'],
    gradient: 'from-indigo-600 to-indigo-400',
    accentColor: 'bg-indigo-500/20',
    iconColor: 'text-indigo-400',
    popular: false,
    rating: 4.8,
    sold: 245,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'shop',
    icon: ShoppingBag,
    title: 'Banner Shop',
    desc: 'Banner shop Shopee, Lazada, TikTok Shop — tối ưu hiển thị, tăng tỷ lệ chuyển đổi.',
    price: '70K',
    originalPrice: '250K',
    discount: 72,
    features: ['Chuẩn mọi sàn', 'Tối ưu chuyển đổi', 'PSD+PNG', 'Sửa 2 lần'],
    gradient: 'from-cyan-600 to-cyan-400',
    accentColor: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    popular: false,
    rating: 4.7,
    sold: 567,
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

function ServiceCard({ service, idx }: { service: typeof services[0]; idx: number }) {
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(`/kho-san-pham?category=${service.id}`);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={idx}
      className="group relative"
    >
      {/* Glow background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />

      {/* Card container */}
      <div className="relative bg-[#121417] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-orange-500/40">
        {/* Image section */}
        <div className="relative h-40 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-black/30 to-transparent" />

          {/* Hot badge */}
          {service.popular && (
            <motion.div
              className="absolute top-3 left-3 z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-bold uppercase shadow-lg shadow-orange-500/40">
                <Zap className="w-3 h-3 fill-white" /> Hot
              </span>
            </motion.div>
          )}

          {/* Discount badge */}
          <motion.div
            className="absolute top-3 right-3 z-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="px-2 py-1 rounded-md bg-red-500 text-white text-xs font-black">
              -{service.discount}%
            </span>
          </motion.div>

          {/* Icon in image */}
          <motion.div
            className="absolute bottom-3 left-3 z-10"
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <div className={`p-2 ${service.accentColor} rounded-lg`}>
              <Icon className={`w-6 h-6 ${service.iconColor}`} />
            </div>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-5">
          {/* Title and rating */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold text-base">{service.title}</h3>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(service.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{service.desc}</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {service.features.map((f) => (
              <span key={f} className="flex items-center gap-1.5 text-xs text-gray-400">
                <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                {f}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleViewAll}
            className="w-full pt-4 border-t border-white/8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-full py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold hover:opacity-90 transition-opacity">
              Xem tất cả
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesSection() {
  return (
    <section className="mt-20 py-16 px-4 sm:px-6" id="dich-vu">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-orange-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            Dịch Vụ Thiết Kế
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Thiết Kế
            <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent"> Chuyên Nghiệp</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Logo, banner, avatar, thumbnail — mọi thiết kế bạn cần, Jiven đều có.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, idx) => (
            <ServiceCard key={s.id} service={s} idx={idx} />
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm mb-4">Cần thiết kế theo yêu cầu riêng? Liên hệ để được tư vấn miễn phí!</p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold glow-orange glow-orange-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4" />
            Tư Vấn Thiết Kế Riêng
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
