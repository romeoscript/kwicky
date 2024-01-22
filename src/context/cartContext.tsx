import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';


// Define the structure of the product object
interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    rating: number;
    total: number;
    quantity:number
    image1:string
  // Add other product properties as needed
}

// Define the structure of the context
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

// Create the context with a default value
const CartContext = createContext<CartContextType>({ cartItems: [], addToCart: () => {}, removeFromCart: () => {},decreaseQuantity: () => {} });

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);

// CartProvider component with TypeScript
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>(()=>{
    const saveCartItems = localStorage.getItem("cartItems");
    return saveCartItems? JSON.parse(saveCartItems): []
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (product:Product) =>{
    setCartItems(cartItems.filter(item => item.id !== product.id));

  }


  const decreaseQuantity = (product: Product) => {
    setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
   
        
        if (existingItemIndex !== -1) {
          
            const updatedItems = [...prevItems];
            updatedItems.splice(existingItemIndex, 1);

            return updatedItems;
        } else {
            // If the product is not in the cart, return the previous state
            return prevItems;
        }
    });
};

  


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
