
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import add from '../assets/add.svg'
import add1 from '../assets/add1.svg'
import add2 from '../assets/add2.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch'




// const backend = process.env.REACT_APP_BACKEND_URL;
// console.log(backend);

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

interface CategoryProps {
    image: string;
}

const Addcarousel = () => {
    const { data, isLoading } = useFetch<CategoryProps[]>('https://api.kwick.ng/api/v1/category');

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(data);

    const images = [add, add1, add2,];

    return (
        <div className='md:w-[80%] md:my-[4rem] my-[2rem] m-auto bg-white p-[1rem]' >
            {data && data.length > 0 && (
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} showDots={true} infinite={true}>
                    {data?.map((item, index) => (
                        <div key={index} className='relative cursor-pointer z-100 md:h-[380px] h-[500px] w-full'>
                            <img src={item.image? item.image: add1} className='h-full w-full rounded-[20px] object-cover' alt={`Carousel item ${index}`} />
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export default Addcarousel
