
import React, { useState } from 'react';
import { Smartphone, Lock, ArrowRight, HelpCircle } from 'lucide-react';

interface LoginProps {
  onLogin: (mobile: string) => void;
  onNavigate: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen p-8 flex flex-col justify-center bg-blue-50">
      <div className="mb-12 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl shadow-blue-200 mb-6">
          <span className="text-3xl font-black">QFD</span>
        </div>
        <h1 className="text-3xl font-bold text-blue-900">Welcome Back</h1>
        <p className="text-blue-500 text-sm mt-2">Login to order fresh food & dairy</p>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" size={20} />
          <input 
            type="tel" 
            placeholder="Mobile Number"
            className="w-full bg-white border border-blue-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all shadow-sm"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" size={20} />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-white border border-blue-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          onClick={() => onLogin(mobile)}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
        >
          <span>Login</span>
          <ArrowRight size={20} />
        </button>

        <div className="flex items-center justify-between px-2 text-sm">
          <button onClick={() => {}} className="text-blue-600 font-semibold flex items-center space-x-1">
            <HelpCircle size={14} />
            <span>Need Help?</span>
          </button>
          <button onClick={onNavigate} className="text-gray-500 font-medium">Create Account</button>
        </div>
      </div>

      <p className="mt-auto text-center text-xs text-gray-400">
        By continuing, you agree to our Terms and Conditions
      </p>
    </div>
  );
};

export default Login;
