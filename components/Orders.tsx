
import React from 'react';
import { Order } from '../types';
import { Package, Truck, CheckCircle, ShoppingBag } from 'lucide-react';

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] p-8 text-center space-y-4">
        <div className="bg-gray-100 p-6 rounded-full text-gray-400">
          <ShoppingBag size={64} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">No Orders Yet</h2>
        <p className="text-gray-500 text-sm">When you place an order, it will appear here for tracking.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">{order.id}</p>
                <p className="text-xs text-gray-500">{order.date}</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {order.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {order.items.map(item => (
                <div key={item.id} className="w-10 h-10 rounded-lg overflow-hidden border border-gray-50">
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-50">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-sm font-medium text-gray-600">Total Amount</span>
                 <span className="text-lg font-bold text-blue-600">₹{order.total}</span>
               </div>
               
               <div className="relative flex justify-between">
                 <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-100 -z-10" />
                 {[
                   { icon: Package, label: 'Placed', done: true },
                   { icon: CheckCircle, label: 'Shipped', done: order.status !== 'Order Placed' && order.status !== 'Confirmed' },
                   { icon: Truck, label: 'Delivery', done: order.status === 'Out for Delivery' || order.status === 'Delivered' },
                   { icon: CheckCircle, label: 'Done', done: order.status === 'Delivered' }
                 ].map((step, idx) => (
                   <div key={idx} className="flex flex-col items-center">
                     <div className={`p-2 rounded-full border-2 transition-colors ${step.done ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-100 text-gray-300'}`}>
                       <step.icon size={14} />
                     </div>
                     <span className={`text-[8px] mt-1 font-bold ${step.done ? 'text-blue-600' : 'text-gray-300'}`}>{step.label}</span>
                   </div>
                 ))}
               </div>
            </div>
            
            <p className="text-[10px] text-gray-400 italic text-center mt-2">
              {order.status === 'Shipped' ? 'Controlled by Shopkeeper' : 'Controlled by Delivery Boy'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
