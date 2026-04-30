import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const floatingIcons = [
  { icon: '📘', label: 'Facebook', x: '8%', y: '15%', size: 'text-4xl', delay: '0s', duration: '6s' },
  { icon: '▶️', label: 'YouTube', x: '88%', y: '12%', size: 'text-4xl', delay: '1s', duration: '7s' },
  { icon: '📸', label: 'Instagram', x: '5%', y: '60%', size: 'text-3xl', delay: '0.5s', duration: '8s' },
  { icon: '🐦', label: 'Twitter', x: '90%', y: '55%', size: 'text-3xl', delay: '1.5s', duration: '6.5s' },
  { icon: '💬', label: 'Zalo', x: '15%', y: '82%', size: 'text-2xl', delay: '2s', duration: '7.5s' },
  { icon: '🎵', label: 'TikTok', x: '80%', y: '80%', size: 'text-2xl', delay: '0.8s', duration: '9s' },
  { icon: '📧', label: 'Email', x: '50%', y: '5%', size: 'text-2xl', delay: '1.2s', duration: '8s' },
  { icon: '💻', label: 'Web', x: '2%', y: '38%', size: 'text-2xl', delay: '2.5s', duration: '7s' },
  { icon: '📱', label: 'Mobile', x: '93%', y: '35%', size: 'text-2xl', delay: '0.3s', duration: '6s' },
  { icon: '🛒', label: 'Shop', x: '45%', y: '92%', size: 'text-2xl', delay: '1.8s', duration: '8.5s' },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Khách hàng', color: 'text-blue-400' },
  { icon: ShoppingBag, value: '200K+', label: 'Đơn hàng', color: 'text-orange-400' },
  { icon: Star, value: '4.9/5', label: 'Đánh giá', color: 'text-amber-400' },
  { icon: TrendingUp, value: '98%', label: 'Hài lòng', color: 'text-emerald-400' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/8 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: item.x,
            top: item.y,
            animation: `floatIcon ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          <div
            className={`${item.size} opacity-25 hover:opacity-60 transition-opacity`}
            style={{ filter: 'drop-shadow(0 0 12px rgba(251,146,60,0.4))' }}
          >
            {item.icon}
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
          </span>
          Flash Sale đang diễn ra — Giảm đến 70%
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Dịch Vụ Số</span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-rose-400 bg-clip-text text-transparent">
            Hàng Đầu Việt Nam
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Voucher giảm giá, thiết kế website, phần mềm bản quyền — tất cả trong một nơi.
          Dịch vụ nhanh chóng, hỗ trợ tận tâm 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-200">
            Khám Phá Ngay
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200">
            <Play className="w-4 h-4 fill-white" />
            Xem Video
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center p-4 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/8 transition-colors"
            >
              <Icon className={`w-5 h-5 ${color} mb-1.5`} />
              <span className="text-2xl font-black text-white">{value}</span>
              <span className="text-xs text-gray-500 mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(3deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
