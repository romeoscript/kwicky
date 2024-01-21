import { useState, useEffect, useCallback } from 'react';

interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    rating: number;
    total: number;
   
    // Add other relevant product properties
  }
  
  interface RecentlyViewedHook {
    recentlyViewed: Product[];
    addProduct: (product: Product) => void;
  }
  

const useRecentlyViewedProducts = (): RecentlyViewedHook => {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('recentlyViewed');
    if (storedProducts) {
      setRecentlyViewed(JSON.parse(storedProducts) as Product[]);
    }
  }, []);

  const addProduct = useCallback((product: Product) => {

    const updatedRecentlyViewed = [product, ...recentlyViewed.slice(0,10)]
    setRecentlyViewed(updatedRecentlyViewed)
     setRecentlyViewed(updatedRecentlyViewed);
     localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
  },[recentlyViewed]);

  return { recentlyViewed, addProduct };
};

export default useRecentlyViewedProducts;
