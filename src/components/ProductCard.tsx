import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
import ali from '../assets/ali.svg'
import { Button } from 'antd'
import React from "react";

interface cardprops {
    name: string;
    img: string;
    price: number;
    rating: number;
    total: number;
}

const ProductCard: React.FC<cardprops> = ({ name, img, price, rating, total }) => {
    console.log(rating);

    const renderStars = (rating: number) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} />);
            } else if (i - 1 < rating && i > rating) {
                stars.push(<IoMdStarHalf key={i} />);
            } else {
                stars.push(<CiStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <div className='md:w-[310px] w-[185px] rounded-[20px] md:h-[500px]  h-[360px] bg-white relative '>
            <img src={ali} alt="" className="absolute top-4 z-30 left-6" />
            <figure className='h-[45%] '></figure>
            <img src={img} alt="" className='absolute top-0 h-[78%] object-cover rounded-[20px]  z-2' />
            <figure className=' curvy z-20 relative rounded-[20px] flex items-left justify-end flex-col p-[1rem]'>
                <p className="font-bold text xl">{name}</p>

                <p className="flex items-center md:text-xl  text-[yellow]">
                    {renderStars(rating)}
                    <span className="text-white">({total})</span></p>
                <h2 className="md:text-4xl font-bold">${price}</h2>
                <Button className='w-[90%] button_linear my-[1rem] mx-auto block md:h-[50px] ' type="primary">Add to Cart</Button>
            </figure>
        </div>
    )
}

export default ProductCard
