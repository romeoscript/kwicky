
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import add1 from '../assets/add1.png'
import add from '../assets/add.png'
import add2 from '../assets/add2.png'
import add5 from '../assets/add5.png'
import add4 from '../assets/add4.png'
import add3 from '../assets/lapp1.png'
import { useState, useEffect } from 'react';


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



const Addcarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const images = windowWidth <= 464 ? [add4, add5, add3] : [add, add1, add2];

    return (
        <div className='md:w-[80%] md:my-[4rem] my-[2rem] m-auto bg-white p-[1rem]' >
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} showDots={true} infinite={true}>
                {images?.map((item, index) => (
                    <div key={index} className='relative cursor-pointer z-100 md:h-[380px] h-[500px] w-full'>
                        <img src={item} className='h-full w-full rounded-[20px] object-cover' alt={`Carousel item ${index}`} />
                        {/* <img src={item.img2} className='absolute max-md:bottom-0 max-md:w-full h-[50%] max-md:object-contain  md:h-full md:top-0 md:right-0 rounded-[20px] '  alt="" /> */}
                    </div>
                ))}
            </Carousel>

        </div>
    )
}

export default Addcarousel
