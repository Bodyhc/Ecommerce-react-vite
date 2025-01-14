import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Store className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TechStore</span>
          </div>
          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}