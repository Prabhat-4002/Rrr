
export type AppView = 'login' | 'register' | 'home' | 'wishlist' | 'cart' | 'profile' | 'orders' | 'help';

export enum Language {
  Hindi = 'Hindi',
  English = 'English',
  Maithili = 'Maithili',
  Bhojpuri = 'Bhojpuri',
  Malayalam = 'Malayalam',
  Urdu = 'Urdu',
  Bengali = 'Bengali',
  Marathi = 'Marathi'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Fast Food' | 'Sudha' | 'Beverages' | 'Vegetables' | 'Treats' | 'Snacks' | 'Fruit';
  image: string;
  pincode: string;
  prePayOnly?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  mobile: string;
  email: string;
  state: string;
  district: string;
  postOffice: string;
  village: string;
  pincode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'Order Placed' | 'Confirmed' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  date: string;
}
