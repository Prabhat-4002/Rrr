
import React from 'react';
import { AppView } from '../types';
import { Home, Heart, ShoppingCart, User } from 'lucide-react';

interface FooterProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  cartCount: number;
}

const Footer: React.FC<FooterProps> = ({ currentView, setView, cartCount }) => {
  const tabs: { id: AppView, icon: any, label: string }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'wishlist', icon: Heart, label: 'Wishlist' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 flex justify-around items-center py-2 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentView === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`flex flex-col items-center p-2 relative transition-all duration-200 ${isActive ? 'text-blue-600 scale-110' : 'text-gray-400'}`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] mt-1 font-medium">{tab.label}</span>
            {tab.id === 'cart' && cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Footer;
