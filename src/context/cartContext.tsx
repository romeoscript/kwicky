import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the structure of the product object
interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    total: number;
  // Add other product properties as needed
}

// Define the structure of the context
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

// Create the context with a default value
const CartContext = createContext<CartContextType>({ cartItems: [], addToCart: () => {} });

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);

// CartProvider component with TypeScript
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
