
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import add from '../assets/add.svg'
import add1 from '../assets/add1.svg'
import add2 from '../assets/add2.svg'





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
  
    const images = [add, add1, add2,];

    return (
        <div className='md:w-[80%] md:my-[4rem] my-[2rem] m-auto bg-white p-[1rem]' >
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000}  showDots={true} infinite={true}>
                {images.map((src, index: number) => (
                    <div
                        key={index}
                        
                        className='relative  cursor-pointer z-100 md:h-[380px] h-[500px] w-full'
                    >
                        <img src={src} className=' h-full w-full rounded-[20px] object-cover' alt="" />
                       
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Addcarousel
