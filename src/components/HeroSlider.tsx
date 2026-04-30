import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/adddddddddddddddddd.png',
    title: 'Thiết Kế Ảnh Game',
    desc: 'Thiết kế chuyên nghiệp cho các tựa game và dự án sáng tạo',
    buttons: ['Khám Phá', 'Xem Video'],
  },
  {
    id: 2,
    image: '/daddddddd.png',
    title: 'Thiết Kế Nhân Vật',
    desc: 'Tạo nhân vật anime và game chuyên nghiệp với chi tiết đẹp mắt',
    buttons: ['Khám Phá', 'Xem Video'],
  },
  {
    id: 3,
    image: '/Khong_co_tieu_de_2_adad.png',
    title: 'Thiết Kế Banner Sáng Tạo',
    desc: 'Banner độc đáo với phong cách hiện đại và bắt mắt',
    buttons: ['Khám Phá', 'Xem Video'],
  },
];

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="relative w-full h-80 sm:h-96 overflow-hidden glass rounded-2xl">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            autoplay={
              isAutoplay
                ? {
                    delay: 5000,
                    disableOnInteraction: false,
                  }
                : false
            }
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-pagination-bullet"></span>`,
            }}
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 rounded-2xl" />
                </div>

                <div className="absolute inset-0 flex items-center px-6 sm:px-10 rounded-2xl">
                  <div className="max-w-xl animate-fade-in-up">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                      {slide.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 mb-5 leading-relaxed">
                      {slide.desc}
                    </p>

                    <div className="flex items-center gap-3">
                      <motion.button
                        className="px-6 py-2.5 text-sm rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity glow-orange glow-orange-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slide.buttons[0]}
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 px-6 py-2.5 text-sm rounded-xl border-2 border-orange-500 text-orange-400 font-bold hover:bg-orange-500/10 transition-all glass-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-3.5 h-3.5 fill-orange-400" />
                        {slide.buttons[1]}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-sm flex items-center justify-center text-white transition-all opacity-40 hover:opacity-100"
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-sm flex items-center justify-center text-white transition-all opacity-40 hover:opacity-100"
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          <style>{`
            .swiper-pagination {
              bottom: 1rem;
              display: flex;
              justify-content: center;
              gap: 0.5rem;
            }

            .swiper-pagination-bullet {
              width: 2rem;
              height: 0.25rem;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 0.25rem;
              transition: all 0.4s ease;
              cursor: pointer;
            }

            .swiper-pagination-bullet-active {
              background: linear-gradient(to right, #f97316, #ef4444);
              width: 2.5rem;
            }

            .swiper-pagination-bullet:hover {
              background: rgba(255, 255, 255, 0.6);
            }

            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-in-up {
              animation: fadeInUp 0.8s ease-out;
            }
          `}</style>
        </motion.div>
      </motion.div>
    </div>
  );
}
