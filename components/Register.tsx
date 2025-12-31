
import React, { useState } from 'react';
import { Smartphone, User, Mail, Map, Home, MapPin, Hash, ArrowLeft } from 'lucide-react';

interface RegisterProps {
  onRegister: () => void;
  onNavigate: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', state: '', district: '', postOffice: '', village: '', pincode: ''
  });

  const fields = [
    { name: 'name', icon: User, placeholder: 'Full Name' },
    { name: 'mobile', icon: Smartphone, placeholder: 'Mobile Number' },
    { name: 'email', icon: Mail, placeholder: 'Email Address' },
    { name: 'state', icon: Map, placeholder: 'State' },
    { name: 'district', icon: MapPin, placeholder: 'District' },
    { name: 'postOffice', icon: Home, placeholder: 'Post Office' },
    { name: 'village', icon: MapPin, placeholder: 'Area/Village' },
    { name: 'pincode', icon: Hash, placeholder: 'Pincode' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <button onClick={onNavigate} className="mb-6 text-blue-600 flex items-center space-x-1 font-bold">
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-900">Create Account</h1>
        <p className="text-blue-500 text-sm">Join our community for the best experience</p>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="relative">
            <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" size={18} />
            <input 
              type="text" 
              name={field.name}
              placeholder={field.placeholder}
              className="w-full bg-white border border-blue-100 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-sm shadow-sm"
              onChange={handleChange}
            />
          </div>
        ))}

        <button 
          onClick={onRegister}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
        >
          Register Now
        </button>
        
        <p className="text-center text-sm text-gray-500 py-4">
          Already have an account? <button onClick={onNavigate} className="text-blue-600 font-bold">Login</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
