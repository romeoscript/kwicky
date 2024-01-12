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
        <div className='md:w-[300px] w-[185px] rounded-[20px] md:h-[450px]  h-[340px] bg-white relative '>
            {/* //<img src={ali} alt="" className="absolute top-4 z-30 left-6" /> */}
            <figure className='h-[45%] '>

            </figure>
            <div className="absolute top-0 h-[75%] rounded-t-[20px] ">
                <img src={img} alt="" className='  h-full w-full aspect-w-2 rounded-t-[20px] aspect-h-0 z-2 aspect-w' />
            </div>

            <figure className=' curvy z-20 relative rounded-[20px] flex items-left justify-end flex-col p-[1rem]'>
                <p className="font-bold ">{name.length > 25? `${name.substring(0,27)}...`:name }</p>

                {/* <p className="flex items-center md:text-l  text-[yellow]"> */}
                    {/* {renderStars(rating)} */}
                    {/* <span className="text-white">({total})</span></p> */}
                <h2 className="md:text-xl font-bold">&#8358;{price}</h2>
                <Button className='w-[90%] button_linear my-[1rem] mx-auto block md:h-[50px] ' type="primary">Add to Cart</Button>
            </figure>
        </div>
    )
}

export default ProductCard
