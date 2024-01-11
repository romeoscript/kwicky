import { useState } from 'react';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import useFetch from '../hooks/useFetch';


const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

type CategoryProps = {
    image: string;
    name: string;
    id: number;
}

const Carousels = () => {
    const { data } = useFetch<CategoryProps[]>('https://api.kwick.ng/api/v1/category');
    const [hovered, setHovered] = useState<number | null>(null);
    // const images = [hoverphone, hovercloth, hoverimage, hoverimage, hoverimage, hoverimage, hoverimage, hoverimage, hoverimage];

    return (
        <div className='w-[90%] m-auto bg-white' >
            {data && data.length > 0 && <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} >
                {data?.map((src, index: number) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className='relative  cursor-pointer z-100 md:h-[180px] h-[110px] md:w-[180px]  w-[110px]'
                    >
                        <img src={src.image} className=' h-full w-full rounded-[20px] object-cover' alt="" />
                        {hovered === index && (
                            <div className='linear absolute rounded-[20px] bottom-0 h-full bg-[green] flex items-center justify-end pb-[1rem] flex-col  w-full'>
                                <p className='  text-center  text-white bg-opacity-75 md:text-3xl'> {src.name.length > 10 ? `${src.name.substring(0, 10)}...` : src.name}</p>
                                <p className='abolute bottom-0 flex items-center gap-3'>view all <FaArrowRightLong /></p>
                            </div>

                        )}
                    </div>
                ))}
            </Carousel>}
        </div>
    )
}

export default Carousels
