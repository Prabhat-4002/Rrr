
import React from 'react';
import { Language } from '../types';
import { LANGUAGES } from '../constants';
import { Search, UserCircle, Globe } from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onProfile: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, onProfile }) => {
  return (
    <div className="sticky top-0 z-30 bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <button onClick={onProfile} className="hover:opacity-80 transition-opacity">
          <UserCircle size={28} />
        </button>
        <div className="flex-1 mx-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-blue-500 text-white placeholder-blue-200 text-sm py-2 pl-3 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-3 top-2 text-blue-200" size={18} />
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
            <Globe size={24} />
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl py-2 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 z-50">
            {LANGUAGES.map((lang) => (
              <button 
                key={lang}
                onClick={() => setLanguage(lang as Language)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${language === lang ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs opacity-90 px-1">
        <span>Delivery: 07:00-10:00 & 04:00-07:00</span>
        <span className="bg-blue-400 px-2 py-0.5 rounded-full">{language}</span>
      </div>
    </div>
  );
};

export default Header;
