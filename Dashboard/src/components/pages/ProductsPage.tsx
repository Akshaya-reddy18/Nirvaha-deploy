import { motion } from "motion/react";
import { ShoppingBag, Star, Heart, Share2, Package, Truck, Shield, QrCode } from "lucide-react";

export function ProductsPage() {
  const products = [
    {
      name: "Crystal Healing Set",
      description: "Premium collection of 7 chakra-aligned crystals",
      price: "$89",
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1663899940872-6dba376bbfdb?w=600",
      category: "Crystals",
      color: "from-purple-400 to-pink-500",
      inStock: true,
    },
    {
      name: "Tibetan Singing Bowl",
      description: "Hand-crafted meditation bowl with mallet",
      price: "$149",
      rating: 5.0,
      reviews: 218,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      category: "Sound Healing",
      color: "from-orange-400 to-red-500",
      inStock: true,
    },
    {
      name: "Meditation Cushion Set",
      description: "Organic cotton zafu and zabuton combo",
      price: "$79",
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
      category: "Meditation",
      color: "from-emerald-400 to-teal-500",
      inStock: true,
    },
    {
      name: "Sacred Incense Collection",
      description: "Natural aromatic incense sticks - 12 varieties",
      price: "$39",
      rating: 4.7,
      reviews: 891,
      image: "https://images.unsplash.com/photo-1610294645949-149e5a5ff15d?w=600",
      category: "Aromatherapy",
      color: "from-cyan-400 to-blue-500",
      inStock: true,
    },
    {
      name: "Mala Bead Necklace",
      description: "108 sandalwood beads for meditation practice",
      price: "$59",
      rating: 4.9,
      reviews: 423,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
      category: "Spiritual Tools",
      color: "from-amber-400 to-orange-500",
      inStock: true,
    },
    {
      name: "Essential Oil Diffuser",
      description: "Ultrasonic aromatherapy diffuser with LED",
      price: "$69",
      rating: 4.6,
      reviews: 734,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600",
      category: "Aromatherapy",
      color: "from-lime-400 to-emerald-500",
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-300/30 mb-6"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700">Curated Spiritual Tools</span>
          </motion.div>

          <h1 className="text-emerald-800 mb-4">Sacred Wellness Products</h1>
          <p className="max-w-3xl mx-auto text-lg text-teal-700">
            Enhance your spiritual practice with our carefully curated collection of 
            high-quality meditation tools, crystals, and wellness essentials.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Truck, text: "Free Shipping Over $75" },
            { icon: Shield, text: "100% Authentic" },
            { icon: Package, text: "30-Day Returns" },
            { icon: QrCode, text: "Secure Checkout" },
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-200/30"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-teal-700">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-[40px] blur-xl opacity-0 group-hover:opacity-25 transition-opacity`}
              />

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-xl border border-emerald-200/30 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs text-teal-800">
                    {product.category}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all"
                    >
                      <Heart className="w-5 h-5 text-rose-500" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all"
                    >
                      <Share2 className="w-5 h-5 text-teal-600" />
                    </motion.button>
                  </div>

                  {/* Stock Badge */}
                  {product.inStock && (
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-emerald-500 text-white text-xs rounded-full">
                      In Stock
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-teal-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-teal-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-lime-400 text-lime-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-teal-800">{product.rating}</span>
                    <span className="text-xs text-teal-600">({product.reviews} reviews)</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto pt-4 border-t border-emerald-200/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl text-teal-800">{product.price}</span>
                      <span className="text-sm text-teal-600">Free Shipping</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 bg-gradient-to-r ${product.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-2xl shadow-xl flex items-center justify-center rotate-12 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-xs text-white text-center leading-tight">
                    Best
                    <br />
                    Seller
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[48px] p-12 shadow-2xl text-white overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern
                id="product-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1.5" fill="white" />
              </pattern>
              <rect width="100" height="100" fill="url(#product-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-4">Shop with Our Mobile App</h2>
              <p className="text-emerald-100 text-lg mb-8">
                Scan the QR code to download NIRVAHA app and get exclusive mobile-only deals, 
                faster checkout, and personalized product recommendations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <p className="text-xs text-emerald-200 mb-1">First Order</p>
                  <p className="text-white">20% OFF</p>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <p className="text-xs text-emerald-200 mb-1">Members</p>
                  <p className="text-white">Free Shipping</p>
                </div>
              </div>
            </div>

            {/* QR Code Mockup */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 bg-white rounded-3xl p-6 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-emerald-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
