import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Bell, Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceCategories = [
  { name: 'Logo', id: 'logo' },
  { name: 'Banner', id: 'banner' },
  { name: 'Avatar', id: 'avatar' },
  { name: 'Thumbnail', id: 'thumbnail' },
  { name: 'Wallpaper', id: 'wallpaper' },
  { name: 'Banner YouTube', id: 'banner' },
  { name: 'Banner Discord', id: 'discord' },
  { name: 'Banner Shop', id: 'shop' },
];

const navItems = [
  { label: 'Trang Chủ', href: '/' },
  {
    label: 'Dịch Vụ',
    href: '/kho-san-pham',
    children: serviceCategories.map(c => c.name),
  },
  {
    label: 'Sản Phẩm',
    href: '#',
    children: ['Voucher', 'Bản quyền', 'Template', 'Plugin'],
  },
  { label: 'Flash Sale', href: '#', badge: 'HOT' },
  { label: 'Blog', href: '#' },
  { label: 'Liên Hệ', href: '#' },
];

export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled ? 'glass glow-orange' : 'glass'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-white leading-none">JIVEN</span>
            <span className="text-[10px] font-bold text-orange-400 leading-none">THIẾT KẾ</span>
          </div>
        </motion.button>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.label}
              className="relative"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.05 }}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  navigate(item.href);
                  setActiveDropdown(null);
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-0"
              >
                {item.label}
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-500 text-white rounded-full uppercase">
                    {item.badge}
                  </span>
                )}
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </button>
              {item.children && activeDropdown === item.label && (
                <motion.div
                  className={`absolute top-full left-0 mt-2 glass py-2 overflow-hidden ${
                    item.label === 'Dịch Vụ' ? 'w-72 grid grid-cols-2 gap-0' : 'w-48'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.children.map((child, idx) => {
                    const category = serviceCategories.find(c => c.name === child);
                    return (
                      <button
                        key={child}
                        onClick={() => {
                          if (item.label === 'Dịch Vụ' && category) {
                            navigate(`/kho-san-pham?category=${category.id}`);
                          }
                          setActiveDropdown(null);
                        }}
                        className={`${
                          item.label === 'Dịch Vụ'
                            ? 'px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-orange-500/20 transition-colors w-full text-left bg-transparent border-0'
                            : 'block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors bg-transparent border-0'
                        }`}
                      >
                        {child}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          ))}
        </nav>

        {/* TẠO ẢNH TỰ ĐỘNG Button */}
        <motion.button
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-orange-500 text-orange-400 text-sm font-bold hover:text-white hover:bg-orange-500/10 transition-all glow-orange glow-orange-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          TẠO ẢNH TỰ ĐỘNG
        </motion.button>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.button
            className="hidden sm:p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all glass-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all glass-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center">1</span>
          </motion.button>
          <motion.button
            className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all glass-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">3</span>
          </motion.button>
          <motion.button
            className="hidden sm:block px-6 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold hover:opacity-90 transition-opacity glow-orange glow-orange-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Đăng Nhập
          </motion.button>
          <motion.button
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all glass-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`lg:hidden glass relative border-t mt-0 ${mobileOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                navigate(item.href);
                setMobileOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all bg-transparent border-0 text-left"
            >
              <span className="flex items-center gap-2">
                {item.label}
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-rose-500 text-white rounded-full uppercase">
                    {item.badge}
                  </span>
                )}
              </span>
              {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
            </button>
          ))}
          <div className="pt-3 space-y-2">
            <button className="w-full px-4 py-2.5 rounded-full border-2 border-orange-500 text-orange-400 text-xs font-bold hover:bg-orange-500/10 transition-all">
              TẠO ẢNH TỰ ĐỘNG
            </button>
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold glow-orange">
              Đăng Nhập
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
