import { useEffect, useRef, useState } from 'react';
import { Tag, Zap, Gift } from 'lucide-react';

const messages = [
  '🎉 FLASH SALE: Giảm đến 70% tất cả sản phẩm - Chỉ hôm nay!',
  '🚀 Thiết kế website chuyên nghiệp - Giao hàng trong 24h!',
  '💎 Voucher độc quyền dành cho khách hàng VIP - Đăng ký ngay!',
  '🎁 Mua 1 tặng 1 cho đơn hàng đầu tiên - Áp dụng đến 30/04',
  '⚡ Cài đặt phần mềm bản quyền - Hỗ trợ 24/7 tận tình!',
];

export default function AnnouncementBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 relative overflow-hidden h-9 flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }} />
      </div>
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: isPaused ? 'none' : 'marquee 40s linear infinite',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={trackRef}
      >
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="text-white font-semibold text-sm px-8 inline-flex items-center gap-2">
            <span>{msg}</span>
            <span className="text-white/40 mx-2">|</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
