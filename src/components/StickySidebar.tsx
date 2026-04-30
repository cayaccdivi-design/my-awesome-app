import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

export default function StickySidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Contact options */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          expanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Zalo */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gray-900 border border-white/10 rounded-2xl px-4 py-3 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all shadow-xl shadow-black/40"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
            <span className="text-white font-black text-xs">Z</span>
          </div>
          <div className="text-right">
            <div className="text-white text-xs font-bold">Chat Zalo</div>
            <div className="text-gray-500 text-[11px]">Phản hồi tức thì</div>
          </div>
        </a>

        {/* Messenger */}
        <a
          href="https://m.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gray-900 border border-white/10 rounded-2xl px-4 py-3 hover:border-blue-400/40 hover:bg-blue-400/10 transition-all shadow-xl shadow-black/40"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
            <MessageCircle className="w-4 h-4 text-white fill-white" />
          </div>
          <div className="text-right">
            <div className="text-white text-xs font-bold">Messenger</div>
            <div className="text-gray-500 text-[11px]">Hỗ trợ 24/7</div>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:0123456789"
          className="group flex items-center gap-3 bg-gray-900 border border-white/10 rounded-2xl px-4 py-3 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all shadow-xl shadow-black/40"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div className="text-right">
            <div className="text-white text-xs font-bold">Gọi Ngay</div>
            <div className="text-gray-500 text-[11px]">0123 456 789</div>
          </div>
        </a>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 active:scale-95 transition-all"
      >
        {expanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        )}
        {/* Pulse ring */}
        {!expanded && (
          <span className="absolute inset-0 rounded-2xl border-2 border-orange-400 animate-ping opacity-30" />
        )}
      </button>
    </div>
  );
}
