
import ProductCard from './ProductCard'
import useRecentlyViewedProducts from '../hooks/useRecent'
import { Link } from 'react-router-dom';



const Recents = () => {

    const { recentlyViewed } = useRecentlyViewedProducts()
    console.log(recentlyViewed);

    return (
        
        <div className='my-[3rem] grid md:grid-cols-4 grid-cols-2 md:gap-[2%] gap-8 w-full overflow-auto p-[1rem] place-items-center'>
            {recentlyViewed?.map((recent, index) => (
                <Link to={`product/${recent.id}`} key={index}>
                <ProductCard name={recent.name} 
                    img={recent.image1}
                    price={recent.price}
                    rating={4}
                    total={120}
                    id={recent.id}
                />
                </Link>
            ))}
        </div>
    )
}

export default Recents
