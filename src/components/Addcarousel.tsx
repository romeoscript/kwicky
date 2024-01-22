
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import add1 from '../assets/Frame 443 (1).svg'
import add from '../assets/Frame 444 (1).svg'
import add2 from '../assets/Frame 455.svg'
import addy from '../assets/lady_bag.png'
import addy1 from '../assets/something.png'
import addy2 from '../assets/lappy.png'
import add3 from '../assets/forphone.png'
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

    const images = windowWidth <= 464 ? [
        { img1: add, img2: addy },
        { img1: add1, img2: addy1 },
        { img1: add2, img2: add3 }, // Using add3 for mobile
    ] : [
        { img1: add, img2: addy },
        { img1: add1, img2: addy1 },
        { img1: add2, img2: addy2 }, // Using add2 for desktop and tablet
    ];

   

    return (
        <div className='md:w-[80%] md:my-[4rem] my-[2rem] m-auto bg-white p-[1rem]' >
          
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} showDots={true} infinite={true}>
                    {images?.map((item, index) => (
                        <div key={index} className='relative cursor-pointer z-100 md:h-[380px] h-[500px] w-full'>
                          <img src={item.img1} className='h-full w-full rounded-[20px] object-cover' alt={`Carousel item ${index}`} />
                          <img src={item.img2} className='absolute max-md:bottom-0 max-md:w-full h-[50%] max-md:object-contain  md:h-full md:top-0 md:right-0 rounded-[20px] '  alt="" />
                        </div>
                    ))}
                </Carousel>
            
        </div>
    )
}

export default Addcarousel
