
import React, { useState, useMemo } from 'react';
import { AppView, Language, User, Product, CartItem, Order } from './types';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Orders from './components/Orders';
import Help from './components/Help';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('login');
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>(Language.English);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleLogin = (mobile: string) => {
    // Simple mock login
    const mockUser: User = {
      name: 'John Doe',
      mobile,
      email: 'john@example.com',
      state: 'Bihar',
      district: 'Patna',
      postOffice: 'Anisabad',
      village: 'Phulwari',
      pincode: '800001'
    };
    setUser(mockUser);
    setView('home');
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.filter(p => p.id !== product.id);
      return [...prev, product];
    });
  };

  const placeOrder = (total: number) => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      items: [...cart],
      total,
      status: 'Order Placed',
      date: new Date().toLocaleDateString()
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
    setView('orders');
  };

  const renderContent = () => {
    switch (view) {
      case 'login': return <Login onLogin={handleLogin} onNavigate={() => setView('register')} />;
      case 'register': return <Register onRegister={() => setView('login')} onNavigate={() => setView('login')} />;
      case 'home': return <Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} userPincode={user?.pincode || '800001'} />;
      case 'wishlist': return <Wishlist wishlist={wishlist} addToCart={addToCart} toggleWishlist={toggleWishlist} />;
      case 'cart': return <Cart cart={cart} removeFromCart={removeFromCart} onPlaceOrder={placeOrder} />;
      case 'profile': return <Profile user={user} onLogout={() => { setUser(null); setView('login'); }} onViewOrders={() => setView('orders')} onViewHelp={() => setView('help')} />;
      case 'orders': return <Orders orders={orders} />;
      case 'help': return <Help />;
      default: return <Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} userPincode={user?.pincode || '800001'} />;
    }
  };

  const showNav = view !== 'login' && view !== 'register';

  return (
    <div className="min-h-screen max-w-md mx-auto bg-white shadow-xl flex flex-col relative overflow-hidden">
      {showNav && <Header language={language} setLanguage={setLanguage} onProfile={() => setView('profile')} />}
      
      <main className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </main>

      {showNav && <Footer currentView={view} setView={setView} cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} />}
    </div>
  );
};

export default App;
