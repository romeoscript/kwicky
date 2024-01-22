import React from 'react'

type BonnusCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    height?: string; 
};

const BonnusCard: React.FC<BonnusCardProps> = ({ imageUrl, title, description, height }) => {
    const cardStyle: React.CSSProperties = {
        height: height || '300px', // Default width is 24rem (w-96), but it can be overridden by props
    };

    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-[1rem] max-w-[500px]" style={cardStyle}>
            <figure><img src={imageUrl} className='w-full object-cover' alt={title} /></figure>
            <div className="card-body bg-[#01183C] rounded-b-md">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default BonnusCard
