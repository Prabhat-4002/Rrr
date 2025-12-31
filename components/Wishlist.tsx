
import React from 'react';
import { Product } from '../types';
import { Heart, ShoppingCart, Info } from 'lucide-react';

interface WishlistProps {
  wishlist: Product[];
  addToCart: (p: Product) => void;
  toggleWishlist: (p: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, addToCart, toggleWishlist }) => {
  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] p-8 text-center space-y-4">
        <div className="bg-red-50 p-6 rounded-full text-red-400">
          <Heart size={64} fill="currentColor" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Wishlist is Empty</h2>
        <p className="text-gray-500 text-sm">Save your favorite items here for later!</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Your Wishlist</h2>
      <div className="grid grid-cols-2 gap-4">
        {wishlist.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 relative">
            <button 
              onClick={() => toggleWishlist(p)}
              className="absolute top-3 right-3 p-1.5 rounded-full z-10 text-red-500 bg-red-50"
            >
              <Heart size={16} fill="currentColor" />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
