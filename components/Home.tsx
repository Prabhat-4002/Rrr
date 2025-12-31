
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Heart, ShoppingCart, Info, Clock } from 'lucide-react';

interface HomeProps {
  addToCart: (p: Product) => void;
  toggleWishlist: (p: Product) => void;
  wishlist: Product[];
  userPincode: string;
}

const Home: React.FC<HomeProps> = ({ addToCart, toggleWishlist, wishlist, userPincode }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const offers = [
    { title: 'Flat 20% OFF on Snacks', color: 'bg-blue-600', code: 'QFD20' },
    { title: 'Free Delivery on Sudha Items', color: 'bg-blue-400', code: 'SUDHAFREE' },
    { title: 'Fresh Veggies Morning Slot', color: 'bg-indigo-500', code: 'FRESH7' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [offers.length]);

  const filteredProducts = MOCK_PRODUCTS.filter(p => p.pincode === userPincode);

  return (
    <div className="p-4 space-y-6">
      {/* Slider Section */}
      <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
        {offers.map((offer, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 p-6 flex flex-col justify-center transition-opacity duration-1000 ${offer.color} ${idx === sliderIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <h3 className="text-white text-xl font-bold">{offer.title}</h3>
            <p className="text-white/80 text-sm">Use Code: {offer.code}</p>
          </div>
        ))}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {offers.map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === sliderIndex ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* Delivery Time Info */}
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start space-x-3">
        <Clock className="text-blue-600 mt-0.5" size={20} />
        <div className="text-sm">
          <p className="font-semibold text-blue-900">Next Available Slots:</p>
          <p className="text-blue-700">Morning: 07:00-10:00 • Evening: 04:00-07:00</p>
        </div>
      </div>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Categories</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="flex flex-col items-center space-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors cursor-pointer overflow-hidden">
                 <img src={`https://picsum.photos/seed/${cat}/60/60`} alt={cat} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Popular Near You</h2>
          <span className="text-xs text-blue-600 font-medium">Pin: {userPincode}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((p) => {
            const isWishlisted = wishlist.some(wp => wp.id === p.id);
            return (
              <div key={p.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 relative group">
                <button 
                  onClick={() => toggleWishlist(p)}
                  className={`absolute top-3 right-3 p-1.5 rounded-full z-10 ${isWishlisted ? 'text-red-500 bg-red-50' : 'text-gray-400 bg-gray-50'}`}
                >
                  <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
                <div className="aspect-square rounded-xl overflow-hidden mb-3">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 truncate">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{p.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">₹{p.price}</span>
                  <button 
                    onClick={() => addToCart(p)}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
                {p.prePayOnly && (
                  <div className="mt-2 flex items-center space-x-1 text-[9px] text-amber-600 font-medium">
                    <Info size={10} />
                    <span>Online Payment Required</span>
                  </div>
                )}
              </div>
            );
          })}
          {filteredProducts.length === 0 && (
            <div className="col-span-2 text-center py-10 text-gray-400">
              No products found in your area.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
