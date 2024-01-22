

import Layout from '../components/Layout'

import ProductCard from '../components/ProductCard'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import nothing from '../assets/notfound.png'


const Search = () => {
    const [searchParams] = useSearchParams();
    const [searchData, setSearchData] = useState(null)
    const query = searchParams.get('q');

    async function searchProducts() {
        const response = await fetch('https://api.kwick.ng/api/v1/products/search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSearchData(data)
    }

    useEffect(() => {
        searchProducts()
    }, [query])

    const randomRating = 2 + Math.random() * 5; // Generates a random number between 3 and 5

    if (Array.isArray(searchData) && searchData?.length === 0) {
        return (
            <div className='flex items-center md:h-[100vh] justify-center'>
                <img src={nothing} className='w-full max-h-[500px] max-w-[500px]' alt="No Results Found " />
            </div>
        );
    }
    
    console.log(searchData);
    
    return (
        <Layout>
            <div className='pt-[100px]  gap-4  '>
                {/* <Searchfilter /> */}
                {/* <img src={nothing} className=' w-full' alt="" /> */}
                <div className='mb-[6rem] grid md:grid-cols-4 gap-8 place-items-center grid-cols-2 gap-2 p-[1rem] place-items-center'>
                    {searchData?.map((search: any, index: number) => (
                        <Link to={`/product/${search.id}`} key={index}>
                            <ProductCard
                                id={search.id}
                                name={search.name}
                                img={search.get_image}
                                price={search.price}
                                rating={randomRating}
                                total={120}
                            />
                        </Link>
                    ))}


                </div>
            </div>
        </Layout>
    )
}

export default Search
