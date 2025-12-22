import { useState, useEffect } from 'react';
import { ShoppingCart, Search, X, Heart, Star, Truck, Instagram, Sparkles, Leaf, Flower2, Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'All', icon: <Sparkles className="h-4 w-4" />, special: true },
  { name: 'Divine Aromatherapy', icon: <Flower2 className="h-4 w-4" />, special: false },
  { name: 'Divine Yoga', icon: <Sun className="h-4 w-4" />, special: false },
  { name: 'Mystical Tea', icon: <Leaf className="h-4 w-4" />, special: false },
  { name: 'Divine Meditation', icon: <Moon className="h-4 w-4" />, special: false },
  { name: 'Spiritual Wellness', icon: <Heart className="h-4 w-4" />, special: false },
  { name: 'Cosmic Crystals', icon: <Star className="h-4 w-4" />, special: false }
];

// Products will be loaded dynamically from backend
import { BACKEND_CONFIG } from '../config/backend';
const BACKEND_URL = BACKEND_CONFIG.API_BASE_URL;

const Marketplace = () => {
  const [products, setProducts] = useState<any[]>([]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  type Product = typeof products[0];
  type CartItem = Product & { quantity: number };
  const [cart, setCart] = useState<CartItem[]>([]);

  // Fetch products from backend
  useEffect(() => {
  fetch(`${BACKEND_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Get product count for each category
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === 'All') {
      return products.length;
    }
    return products.filter(p => p.category === categoryName).length;
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const incrementQty = (productId: number) => {
    setCart((prev) => prev.map((item) => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQty = (productId: number) => {
    setCart((prev) => prev
      .map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
      .filter((item) => item.quantity > 0)
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
    setProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setProductDetailOpen(false);
    setSelectedProduct(null);
    setSelectedImageIndex(0);
  };

  // Image navigation functions
  const nextImage = () => {
    if (selectedProduct && selectedProduct.images && selectedProduct.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images && selectedProduct.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  // Get current image array with fallbacks
  const getCurrentImages = (product: any) => {
    if (!product) return [];
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    if (product.image) {
      return [product.image];
    }
    return ['/logo.png']; // Fallback image
  };

  // Keyboard navigation for image slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!productDetailOpen || !selectedProduct) return;
      
      const images = getCurrentImages(selectedProduct);
      if (images.length <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      }
    };

    if (productDetailOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [productDetailOpen, selectedProduct, selectedImageIndex]);

  // Touch/swipe handling for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const placeOrderViaInstagram = () => {
    // Open Instagram with pre-filled message
    const instagramUrl = `https://www.instagram.com/_nirvaha_?igsh=amxrZXZ5emJuOHoz`;
    window.open(instagramUrl, '_blank');
    
    // Show success message
    alert('Order details sent! Please contact us on Instagram to complete your purchase.');
    setCartOpen(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-12 pt-24 relative overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-emerald-200/30 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="h-8 w-8 text-emerald-500" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Divine Marketplace
              </h1>
              <Sparkles className="h-8 w-8 text-cyan-500" />
            </div>
            <p className="text-gray-600">Discover divine products for your spiritual journey</p>
          </div>
          <button 
            className="relative p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-200/50"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="h-6 w-6 text-emerald-600" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Search Bar - Prominent Position */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-emerald-500" />
              <input
                type="text"
                placeholder="Search for divine products, spiritual items, wellness tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-16 py-4 text-lg border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-emerald-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                {search ? `Found ${filteredProducts.length} divine products` : 'Discover spiritual wellness products'}
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Browse by Category</h3>
            {selectedCategory === 'All' && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                <Sparkles className="h-4 w-4" />
                Showing all {products.length} divine products
              </div>
            )}
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-3 rounded-full font-medium border transition-all whitespace-nowrap flex items-center gap-2 shadow-lg hover:shadow-xl relative ${
                  selectedCategory === cat.name 
                    ? cat.special
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-xl transform scale-105 ring-2 ring-emerald-200'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-500 shadow-xl transform scale-105'
                    : cat.special
                      ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-300 hover:from-emerald-200 hover:to-teal-200 hover:border-emerald-400 hover:transform hover:scale-105 font-semibold'
                      : 'bg-white/90 backdrop-blur-sm text-gray-700 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 hover:transform hover:scale-105'
                } ${cat.special && selectedCategory === cat.name ? 'animate-pulse' : ''}`}
              >
                {cat.icon}
                {cat.name}
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  selectedCategory === cat.name 
                    ? 'bg-white/20 text-white' 
                    : cat.special
                      ? 'bg-emerald-500 text-white'
                      : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {getCategoryCount(cat.name)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50 overflow-hidden hover:scale-105">
              {/* Product Badges & Image */}
              <div className="relative">
                {/* Badges above image */}
                <div className="absolute z-10 flex justify-between w-full px-2 pt-2 pointer-events-none">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    Divine Delivery
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full ml-auto shadow-lg">
                    Divine Shipping
                  </div>
                </div>
                <img 
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : product.image
                        ? product.image
                        : '/logo.png'
                  }
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-emerald-600">{product.currency}{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">{product.currency}{product.originalPrice}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => addToCart(product)}
                  >
                    Add to Divine Cart
                  </button>
                  <button
                    className="px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
                    onClick={() => openProductDetail(product)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Modal */}
        {cartOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-emerald-200/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-emerald-500" />
                  <h2 className="text-2xl font-bold text-emerald-800">Divine Shopping Cart</h2>
                </div>
                <button 
                  className="text-gray-500 hover:text-emerald-600 text-2xl transition-colors"
                  onClick={() => setCartOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="relative">
                    <ShoppingCart className="h-16 w-16 text-emerald-300 mx-auto mb-4" />
                    <div className="absolute -inset-2 bg-emerald-100/50 rounded-full blur-xl"></div>
                  </div>
                  <p className="text-gray-500 text-lg">Your divine cart awaits spiritual products</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <img src={item.images && item.images.length > 0 ? item.images[0] : '/logo.png'} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-teal-600 font-bold">{item.currency}{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                            onClick={() => decrementQty(item.id)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                            onClick={() => incrementQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-teal-600">{getCartTotal().toFixed(2)}</span>
                    </div>
                    
                    <button
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      onClick={placeOrderViaInstagram}
                    >
                      <Instagram className="h-5 w-5" />
                      Complete Divine Order
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Product Detail Modal */}
        {productDetailOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeProductDetail}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Side - Images */}
                  <div className="space-y-4">
                    {/* Main Image Display */}
                    <div 
                      className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      {(() => {
                        const images = getCurrentImages(selectedProduct);
                        const currentImage = images[selectedImageIndex] || images[0] || '/logo.png';
                        
                        return (
                          <>
                            <img 
                              src={currentImage} 
                              alt={selectedProduct.name}
                              className="w-full h-full object-cover select-none"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logo.png';
                              }}
                              draggable={false}
                            />
                            
                            {/* Navigation Arrows - Only show if multiple images */}
                            {images.length > 1 && (
                              <>
                                <button
                                  onClick={prevImage}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                              </>
                            )}
                            
                            {/* Image Counter */}
                            {images.length > 1 && (
                              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded-full backdrop-blur-sm">
                                {selectedImageIndex + 1} / {images.length}
                              </div>
                            )}
                            
                            {/* Swipe Hint for Mobile */}
                            {images.length > 1 && (
                              <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm hidden sm:block">
                                Swipe or use arrows
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                    
                    {/* Thumbnail Navigation */}
                    {(() => {
                      const images = getCurrentImages(selectedProduct);
                      if (images.length <= 1) return null;
                      
                      return (
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {images.map((image: string, index: number) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                                index === selectedImageIndex 
                                  ? 'border-teal-500 ring-2 ring-teal-200' 
                                  : 'border-gray-200 hover:border-teal-300'
                              }`}
                              aria-label={`View image ${index + 1}`}
                            >
                              <img 
                                src={image} 
                                alt={`${selectedProduct.name} ${index + 1}`} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/logo.png';
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Right Side - Product Details */}
                  <div className="space-y-6">
                    {/* Price and Rating */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-teal-600">{selectedProduct.currency}{selectedProduct.price}</span>
                        {selectedProduct.originalPrice > selectedProduct.price && (
                          <span className="text-lg text-gray-500 line-through">{selectedProduct.currency}{selectedProduct.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="font-semibold">{selectedProduct.rating}</span>
                        </div>
                        <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
                      </div>
                      {selectedProduct.freeShipping && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <Truck className="h-4 w-4" />
                          <span className="font-medium">Free Shipping</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                      <ul className="space-y-1">
                        {selectedProduct.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200"
                        onClick={() => {
                          addToCart(selectedProduct);
                          closeProductDetail();
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="px-6 py-3 border border-teal-500 text-teal-600 rounded-xl font-medium hover:bg-teal-50 transition-colors"
                        onClick={() => {
                          addToCart(selectedProduct);
                          closeProductDetail();
                          setCartOpen(true);
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Marketplace;