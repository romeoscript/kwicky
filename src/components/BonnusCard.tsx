import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";

type BonnusCardProps = {
    imageUrl: string;
    title: string;
    rating: number;
    price: number;
    height?: string;
};

const BonnusCard: React.FC<BonnusCardProps> = ({ imageUrl, title, price, rating, height }) => {
    const cardStyle: React.CSSProperties = {
        height: height || '300px', // Default width is 24rem (w-96), but it can be overridden by props
    };

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
        <div className="card card-compact bg-base-100 shadow-xl mb-[1rem] max-w-[500px]" style={cardStyle}>
            <figure><img src={imageUrl} className='w-full object-cover' alt={title} /></figure>
            <div className="card-body  bg-[#01183C] min-h-[100px] rounded-b-md">
                <div>
                    <h2 className="card-title text-[yellow]"> {renderStars(rating)}</h2>
                    <p className='text-white font-bold text-2xl'>&#8358;{price}</p>
                </div>
                <button className="btn btn-primary absolute right-[1rem] h-[56px] w-[56px] bottom-[1rem]">10%</button>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}

export default BonnusCard
