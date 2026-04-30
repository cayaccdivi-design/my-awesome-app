import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, X, PenTool, Image as ImageIcon, Layers, Youtube, Grid3x3, MessageCircle, ShoppingBag, Star, Check, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'logo', name: 'Logo', count: 120, icon: PenTool },
  { id: 'banner', name: 'Banner', count: 340, icon: ImageIcon },
  { id: 'avatar', name: 'Avatar', count: 210, icon: Layers },
  { id: 'thumbnail', name: 'Thumbnail', count: 185, icon: Youtube },
  { id: 'wallpaper', name: 'Wallpaper', count: 95, icon: Grid3x3 },
  { id: 'discord', name: 'Banner Discord', count: 75, icon: MessageCircle },
  { id: 'shop', name: 'Banner Shop', count: 160, icon: ShoppingBag },
];

const products = [
  {
    id: 1,
    category: 'logo',
    title: 'Logo độc quyền, nhận diện thương hiệu mạnh mẽ',
    desc: 'File đầy đủ AI, PNG, SVG',
    rating: 5.0,
    sold: 421,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    popular: true,
  },
  {
    id: 2,
    category: 'banner',
    title: 'Banner quảng cáo, sự kiện, khuyến mãi',
    desc: 'Thiết kế bắt mắt, chuyển đổi cao',
    rating: 4.8,
    sold: 892,
    image: 'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    popular: false,
  },
  {
    id: 3,
    category: 'avatar',
    title: 'Avatar cá nhân, fanpage, nhóm',
    desc: 'Phong cách đa dạng, nổi bật giữa đám đông',
    rating: 4.7,
    sold: 1203,
    image: 'https://images.pexels.com/photos/3785705/pexels-photo-3785705.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    popular: false,
  },
  {
    id: 4,
    category: 'thumbnail',
    title: 'Thumbnail YouTube, TikTok',
    desc: 'Thu hút click, tăng view, thiết kế chuyên nghiệp',
    rating: 4.9,
    sold: 678,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-red-500/20',
    iconColor: 'text-red-400',
    popular: true,
  },
  {
    id: 5,
    category: 'wallpaper',
    title: 'Hình nền desktop, mobile',
    desc: 'Độ phân giải cao, phong cách đa dạng',
    rating: 4.6,
    sold: 534,
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-teal-500/20',
    iconColor: 'text-teal-400',
    popular: false,
  },
  {
    id: 6,
    category: 'banner',
    title: 'Banner kênh YouTube chuẩn kích thước',
    desc: 'Hiển thị tối ưu mọi thiết bị, thu hút subscriber',
    rating: 4.9,
    sold: 312,
    image: 'https://images.pexels.com/photos/2570886/pexels-photo-2570886.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
    popular: true,
  },
  {
    id: 7,
    category: 'discord',
    title: 'Banner server Discord',
    desc: 'Phong cách gaming, community, anime',
    rating: 4.8,
    sold: 245,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-indigo-500/20',
    iconColor: 'text-indigo-400',
    popular: false,
  },
  {
    id: 8,
    category: 'shop',
    title: 'Banner shop Shopee, Lazada, TikTok Shop',
    desc: 'Tối ưu hiển thị, tăng tỷ lệ chuyển đổi',
    rating: 4.7,
    sold: 567,
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=400',
    accentColor: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    popular: false,
  },
];

export default function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category') || null
  );
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.desc.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-2"
          >
            Kho Sản{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Phẩm
            </span>
          </motion.h1>
          <p className="text-gray-400 text-sm">
            Khám phá kho thiết kế đồ sộ với hàng ngàn sản phẩm chất lượng cao
          </p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside
            className={`${
              showMobileFilter ? 'fixed inset-0 z-40' : 'hidden lg:block'
            } w-full lg:w-64 flex-shrink-0`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/10 h-fit"
            >
              {/* Close button for mobile */}
              {showMobileFilter && (
                <button
                  onClick={() => setShowMobileFilter(false)}
                  className="absolute top-4 right-4 lg:hidden"
                >
                  <X className="w-6 h-6" />
                </button>
              )}

              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-orange-400" />
                LOC DICH VU
              </h2>

              {/* All Categories */}
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => handleCategorySelect(null)}
                className={`w-full text-left px-4 py-2.5 rounded-lg mb-2 transition-all ${
                  !selectedCategory
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                Tất cả
              </motion.button>

              <div className="space-y-1.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <motion.button
                      key={cat.id}
                      whileHover={{ x: 4 }}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold'
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {cat.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          selectedCategory === cat.id
                            ? 'bg-white/20'
                            : 'bg-white/10'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Tìm theo tên hộp, mã sản phẩm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>
            </motion.div>

            {/* Filter Toggle for Mobile */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowMobileFilter(true)}
              className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Filter className="w-4 h-4" /> Lọc dịch vụ
            </motion.button>

            {/* Results Count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-400 mb-6"
            >
              Tìm thấy <span className="text-orange-400 font-semibold">{filteredProducts.length}</span> sản phẩm
            </motion.p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    className="group relative"
                  >
                    {/* Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />

                    {/* Card */}
                    <div className="relative bg-[#121417] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-orange-500/40">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-black/30 to-transparent" />

                        {product.popular && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold">
                              Hot
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-white mb-2 line-clamp-2">
                          {product.title}
                        </h3>

                        <p className="text-sm text-gray-400 mb-4 line-clamp-1">
                          {product.desc}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-gray-700'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            {product.sold} đã bán
                          </span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                        >
                          Xem tất cả
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-400 text-lg">Không có sản phẩm phù hợp.</p>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </motion.div>
  );
}
