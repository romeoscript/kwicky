

import Layout from '../components/Layout'
import Searchfilter from '../components/Searchfilter'
import ProductCard from '../components/ProductCard'
import oculus from '../assets/oculus.svg'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <Layout>
            <div className='pt-[100px] flex gap-4  '>
                <Searchfilter />
                <div className='mb-[6rem] grid md:grid-cols-3 gap-[10%] grid-cols-2 gap-2 p-[1rem] place-items-center'>
                <Link to='/product/2'>
                    <ProductCard name="Oculus Control"
                        img={oculus}
                        price={180}
                        rating={4}
                        total={120}
                    />
                </Link>
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120} />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120} />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120} />
            </div>
            </div>
        </Layout>
    )
}

export default Search
