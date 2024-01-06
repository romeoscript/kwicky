
import Addcarousel from '../components/Addcarousel'
import Hero from '../components/Hero'
import oculus from '../assets/oculus.svg'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <Layout>
            <Hero />
            <Addcarousel />
            <div className='px-[3rem] flex  items-center justify-between'>
                <p className='font-bold text-black md:text-2xl my-[1.5rem]'>Electronics & Gadgets</p>
                <p>veiw all</p>
            </div>
            <div className='mb-[3rem] grid md:grid-cols-4 gap-[10%] grid-cols-2 gap-2 p-[1rem] place-items-center'>
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
            <div className='px-[3rem] flex  items-center justify-between'>
                <p className='font-bold text-black md:text-2xl my-[1.5rem]'>Electronics & Gadgets</p>
                <p>veiw all</p>
            </div>
           
            <div className='mb-[6rem] grid md:grid-cols-4 gap-[10%] grid-cols-2 gap-2 p-[1rem] place-items-center'>
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

        </Layout>
    )
}

export default Home
