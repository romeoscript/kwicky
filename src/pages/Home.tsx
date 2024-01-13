import React from 'react';
import Addcarousel from '../components/Addcarousel';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// Define types for your product and category
type Product = {
    id: number;
    name: string;
    get_image: string;
    image1: string;
    image2: string;
    image3: string;
    price: number;
    category: number;
};

type ProductsByCategory = {
    [key: string]: Product[];
};

const Home: React.FC = () => {
    const { data: products } = useFetch<Product[]>('https://api.kwick.ng/api/v1/products/');

    // Group products by category
    const productsByCategory = products?.reduce((acc: ProductsByCategory, product: Product) => {
        const categoryName = `${product.category}`; // Adjust this to use your actual category names
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(product);
        return acc;
    }, {});

    return (
        <Layout>
            <Hero />
            <Addcarousel />
            {productsByCategory && Object.entries(productsByCategory).map(([category, products]) => (
                <React.Fragment key={category}>
                    <div className='px-[3rem] flex items-center justify-between'>
                        <p className='font-bold text-black md:text-2xl my-[1.5rem]'>{category}</p>
                        <p>view all</p>
                    </div>
                    <div className='mb-[3rem] grid md:grid-cols-4 gap-4 grid-cols-2 gap-2 p-[1rem] place-items-center'>
                        {products.map((product: Product) => (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    img={product.image1}
                                    price={product.price}
                                    rating={4}
                                    total={120}
                                />
                            </Link>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </Layout>
    );
};

export default Home;
