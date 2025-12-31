
import React from 'react';
import { User as UserType } from '../types';
import { LogOut, Youtube, Facebook, Instagram, MessageCircle, ShoppingBag, HelpCircle, UserCircle2 } from 'lucide-react';

interface ProfileProps {
  user: UserType | null;
  onLogout: () => void;
  onViewOrders: () => void;
  onViewHelp: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout, onViewOrders, onViewHelp }) => {
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, color: 'text-red-600', link: 'https://youtube.com' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-700', link: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-600', link: 'https://instagram.com' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-600', link: 'https://whatsapp.com' },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-4 border-white shadow-lg">
          <UserCircle2 size={64} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500 font-medium">{user?.mobile}</p>
          <p className="text-xs text-blue-500 mt-1">{user?.village}, {user?.pincode}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-50 space-y-1">
        <button onClick={onViewOrders} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="bg-orange-50 p-2 rounded-lg text-orange-500"><ShoppingBag size={20} /></div>
            <span className="font-semibold">My Orders</span>
          </div>
          <span className="text-gray-300">→</span>
        </button>
        <button onClick={onViewHelp} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="bg-blue-50 p-2 rounded-lg text-blue-500"><HelpCircle size={20} /></div>
            <span className="font-semibold">Need Help?</span>
          </div>
          <span className="text-gray-300">→</span>
        </button>
        <button onClick={onLogout} className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-2xl transition-colors group">
          <div className="flex items-center space-x-3 text-red-600">
            <div className="bg-red-50 p-2 rounded-lg group-hover:bg-red-100"><LogOut size={20} /></div>
            <span className="font-semibold">Logout</span>
          </div>
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-4">Follow Us</h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-3 bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <social.icon size={24} className={social.color} />
              <span className="text-sm font-bold text-gray-700">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center p-6 bg-blue-600 rounded-3xl text-white">
        <p className="text-xs opacity-80 mb-1">Customer Support</p>
        <p className="text-lg font-bold">+91 9876543210</p>
        <p className="text-[10px] mt-2 bg-blue-500/50 inline-block px-3 py-1 rounded-full italic">Call back within 30 mins</p>
      </div>
    </div>
  );
};

export default Profile;
