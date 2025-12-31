
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Veg Burger', price: 90, category: 'Fast Food', image: 'https://picsum.photos/seed/burger/200/200', pincode: '800001', prePayOnly: true },
  { id: '2', name: 'Sudha Milk (1L)', price: 54, category: 'Sudha', image: 'https://picsum.photos/seed/milk/200/200', pincode: '800001' },
  { id: '3', name: 'Fresh Tomatoes (1kg)', price: 40, category: 'Vegetables', image: 'https://picsum.photos/seed/tomato/200/200', pincode: '800001' },
  { id: '4', name: 'Orange Juice', price: 120, category: 'Beverages', image: 'https://picsum.photos/seed/juice/200/200', pincode: '800001' },
  { id: '5', name: 'Lays Chips', price: 20, category: 'Snacks', image: 'https://picsum.photos/seed/chips/200/200', pincode: '800001' },
  { id: '6', name: 'Fresh Mangoes', price: 150, category: 'Fruit', image: 'https://picsum.photos/seed/mango/200/200', pincode: '800002' },
  { id: '7', name: 'Milk Chocolate', price: 45, category: 'Treats', image: 'https://picsum.photos/seed/choco/200/200', pincode: '800001' },
  { id: '8', name: 'Paneer 200g', price: 85, category: 'Sudha', image: 'https://picsum.photos/seed/paneer/200/200', pincode: '800001' },
];

export const CATEGORIES = ['Fast Food', 'Sudha', 'Beverages', 'Vegetables', 'Treats', 'Snacks', 'Fruit'];

export const LANGUAGES = [
  'Hindi', 'English', 'Maithili', 'Bhojpuri', 'Malayalam', 'Urdu', 'Bengali', 'Marathi'
];
