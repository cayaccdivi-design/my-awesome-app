import { useState, useEffect } from 'react';
import { Clock, Flame, Star, ShoppingCart, Eye, Heart, ChevronRight, Zap } from 'lucide-react';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate.getTime() - now);
      setTimeLeft({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

const products = [
  {
    id: 1,
    name: 'Voucher Shopee 200K',
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 45000,
    originalPrice: 200000,
    discount: 78,
    rating: 4.9,
    sold: 1243,
    views: 5621,
    tag: 'HOT',
    tagColor: 'bg-rose-500',
  },
  {
    id: 2,
    name: 'Microsoft Office 365 Bản Quyền',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 299000,
    originalPrice: 999000,
    discount: 70,
    rating: 4.8,
    sold: 832,
    views: 3210,
    tag: 'MỚI',
    tagColor: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Thiết Kế Logo Chuyên Nghiệp',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 150000,
    originalPrice: 500000,
    discount: 70,
    rating: 5.0,
    sold: 421,
    views: 2890,
    tag: 'VIP',
    tagColor: 'bg-amber-500',
  },
  {
    id: 4,
    name: 'Canva Pro 1 Năm',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 189000,
    originalPrice: 600000,
    discount: 69,
    rating: 4.7,
    sold: 2104,
    views: 8432,
    tag: 'BÁN CHẠY',
    tagColor: 'bg-emerald-500',
  },
  {
    id: 5,
    name: 'Thiết Kế Website Landing Page',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 799000,
    originalPrice: 2500000,
    discount: 68,
    rating: 4.9,
    sold: 156,
    views: 1203,
    tag: 'ƯU ĐÃI',
    tagColor: 'bg-rose-500',
  },
  {
    id: 6,
    name: 'Khóa Học SEO Tổng Thể',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 399000,
    originalPrice: 1200000,
    discount: 67,
    rating: 4.8,
    sold: 678,
    views: 4521,
    tag: 'MỚI',
    tagColor: 'bg-blue-500',
  },
];

function FlashCard({ product }: { product: typeof products[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-gray-900 border border-white/8 rounded-2xl overflow-hidden hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

        {/* Tag */}
        <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase`}>
          {product.tag}
        </span>

        {/* Discount badge */}
        <span className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-black px-2 py-1 rounded-md">
          -{product.discount}%
        </span>

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className={`w-4 h-4 transition-colors ${liked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-tight mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-600'}`}
            />
          ))}
          <span className="text-gray-500 text-xs ml-1">({product.sold})</span>
        </div>

        <div className="flex items-end justify-between mb-3">
          <div>
            <span className="text-orange-400 font-black text-lg">{product.price.toLocaleString('vi-VN')}đ</span>
            <span className="text-gray-600 text-xs line-through ml-2">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
          <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{product.views.toLocaleString()}</span>
          <span className="flex items-center gap-1"><Flame className="w-3 h-3 text-orange-500" />Đã bán {product.sold}</span>
        </div>

        <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Mua Ngay
        </button>
      </div>
    </div>
  );
}

export default function ContentSection() {
  const saleEnd = new Date(Date.now() + 5 * 3_600_000 + 23 * 60_000 + 41_000);
  const { h, m, s } = useCountdown(saleEnd);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Flash Sale</h2>
              <p className="text-gray-500 text-sm">Ưu đãi kết thúc sau:</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-400" />
            {[pad(h), pad(m), pad(s)].map((v, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-11 h-11 rounded-xl bg-gray-900 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-lg tabular-nums shadow-lg shadow-orange-500/10">
                  {v}
                </span>
                {i < 2 && <span className="text-orange-400 font-black text-lg">:</span>}
              </span>
            ))}
          </div>

          <a href="#" className="hidden sm:flex items-center gap-1 text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors">
            Xem tất cả <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.map((p) => (
            <FlashCard key={p.id} product={p} />
          ))}
        </div>

        {/* More products CTA */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
            Xem Thêm Sản Phẩm
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-white/8 p-8 sm:p-12">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-500 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
                Ưu Đãi Đặc Biệt
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Thiết kế website<br />
                <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">chỉ từ 799K</span>
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Giao hàng trong 24h — Bảo hành 12 tháng</p>
            </div>
            <button className="flex-shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all">
              Đặt Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
