import React from 'react';
import Addcarousel from '../components/Addcarousel';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// Define types for your product and category
type Product = {
    id: number;
    name: string;
    get_image: string;
    image1: string;
    image2: string;
    image3: string;
    price: number;
    category_name: string;
    get_absolute_url:string;
};

type ProductsByCategory = {
    [key: string]: Product[];
};

const Home: React.FC = () => {
    const { data: products } = useFetch<Product[]>('https://api.kwick.ng/api/v1/products/');
    // Group products by category
    const productsByCategory = products?.reduce((acc: ProductsByCategory, product: Product) => {
        const categoryName = `${product.category_name}`; // Adjust this to use your actual category names
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(product);
        return acc;
    }, {});


    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

 
    
    return (
        <Layout>
            <Hero />
            <Addcarousel />

            {productsByCategory && Object.entries(productsByCategory).map(([category_name, products]) => (
                <React.Fragment key={category_name}>
                
                    <div className='px-[3rem] flex items-center justify-between'>
                        <p className='font-bold text-black md:text-2xl my-[1.5rem]'>{category_name}</p>
                       <Link to={`/category${products[0].get_absolute_url}`}>
                       <p>view all</p>
                       </Link>
                    </div>

                    <div className='w-full m-auto father'>
                        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={4000} showDots={false} infinite={true}>
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
                        </Carousel>
                    </div>


                </React.Fragment>
            ))}

        </Layout>
    );
};

export default Home;
