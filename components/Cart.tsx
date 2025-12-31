
import React, { useState } from 'react';
import { CartItem } from '../types';
// Fixed: Added ShoppingCart to the imports from lucide-react
import { Trash2, MapPin, CheckCircle2, QrCode, ShoppingCart } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  onPlaceOrder: (total: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, onPlaceOrder }) => {
  const [distance, setDistance] = useState(3);
  const [isPaying, setIsPaying] = useState(false);

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  
  // 5km free delivery, 5rs per km above that, max 10km
  const deliveryFee = distance <= 5 ? 0 : (distance - 5) * 5;
  const total = subtotal + deliveryFee;

  const minAmount = 80;
  const minItems = 3;
  const canCheckout = subtotal >= minAmount || totalItems >= minItems;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] p-8 text-center space-y-4">
        <div className="bg-blue-50 p-6 rounded-full text-blue-600">
          <ShoppingCart size={64} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-500 text-sm">Add some fresh items to start your healthy journey!</p>
      </div>
    );
  }

  return (
    <div className="p-4 pb-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      
      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1 ml-4">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-500">Qty: {item.quantity} × ₹{item.price}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-blue-600">₹{item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-1">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-700">
            <MapPin size={18} className="text-blue-600" />
            <span className="text-sm font-medium">Set Delivery Distance</span>
          </div>
          <div className="flex items-center space-x-2">
            <input 
              type="range" min="1" max="10" 
              value={distance} 
              onChange={(e) => setDistance(parseInt(e.target.value))}
              className="w-24 accent-blue-600"
            />
            <span className="text-xs font-bold text-blue-600 w-10 text-right">{distance}km</span>
          </div>
        </div>
        
        <p className="text-[10px] text-gray-400 bg-gray-50 p-2 rounded-lg italic">
          * 5km free delivery. ₹5/km extra up to 10km.
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-50 space-y-3">
        <div className="flex justify-between text-gray-600 text-sm">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-sm">
          <span>Delivery Fee ({distance}km)</span>
          <span className={deliveryFee === 0 ? 'text-green-600 font-bold' : ''}>
            {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
          </span>
        </div>
        <div className="h-px bg-gray-100 my-2" />
        <div className="flex justify-between text-gray-900 font-bold text-lg">
          <span>Total</span>
          <span className="text-blue-600">₹{total}</span>
        </div>
      </div>

      {!canCheckout && (
        <p className="mt-4 text-xs text-center text-red-500 font-medium">
          Minimum order requirement not met (Min ₹80 or 3 Items)
        </p>
      )}

      <button
        disabled={!canCheckout}
        onClick={() => setIsPaying(true)}
        className={`w-full mt-6 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg transition-transform active:scale-95 ${canCheckout ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
      >
        <span>Proceed to Pay (UPI/QR)</span>
        <QrCode size={20} />
      </button>

      {/* Mock UPI Payment Modal */}
      {isPaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full rounded-3xl p-8 text-center space-y-6 animate-in zoom-in-95">
            <h3 className="text-xl font-bold">UPI Payment</h3>
            <div className="bg-blue-50 p-6 rounded-3xl inline-block">
              <QrCode size={120} className="text-blue-600" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Scan QR or select app to pay</p>
              <div className="grid grid-cols-2 gap-3">
                {['GPay', 'PhonePe', 'Paytm', 'Amazon Pay'].map(app => (
                  <div key={app} className="p-2 border border-gray-100 rounded-xl text-xs font-semibold hover:bg-blue-50 cursor-pointer">
                    {app}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">₹{total}</div>
            <button 
              onClick={() => onPlaceOrder(total)}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2"
            >
              <CheckCircle2 size={20} />
              <span>Simulate Success</span>
            </button>
            <button onClick={() => setIsPaying(false)} className="text-gray-400 text-sm font-medium">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
