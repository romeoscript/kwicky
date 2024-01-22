import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.svg';
import { Input } from 'antd';
import { RiSearch2Line } from "react-icons/ri";
import Carousels from './Carousel';


const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="hero h-screen bg-white z-1 flex flex-col">
            <div className='hero_1 bg-[white] relative z-1 w-full md:h-[100%]'>
                <figure>
                    <img src={background} className='object-cover md:h-[70%] h-[650px] w-full max-md:rounded-b-[40%] ' alt="" />

                    <div className='absolute inset-0 md:top-[-25%] flex items-center justify-center z-10 '>
                        <div className='text-center text-white '>
                            <p className='md:text-6xl text-2xl'>Explore Treasures At Kwick</p>
                            <p className='w-4/5 m-auto my-[1rem]'>Uncover a world of delights and get a sneak peak into the treasures that await your discovery</p>
                            <form onSubmit={handleSearchSubmit}>
                                <Input
                                    className='w-3/5 rounded-full p-[1rem]'
                                    size="large"
                                    placeholder="Search for Products"
                                    prefix={<RiSearch2Line />}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </form>
                        </div>
                    </div>
                </figure>
            </div>
            <Carousels />
        </div>
    );
}

export default Hero;
