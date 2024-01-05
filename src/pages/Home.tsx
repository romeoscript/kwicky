
import Addcarousel from '../components/Addcarousel'
import Hero from '../components/Hero'
import oculus from '../assets/oculus.svg'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'


const Home = () => {
    return (
        <Layout>
            <Hero />
            <Addcarousel />
            <div className='px-[3rem] flex justify-between'>
                <p className='font-bold text-black text-2xl my-[1.5rem]'>Electronics & Gadgets</p>
                <p>veiw all</p>
            </div>
            <div className='mb-[3rem] grid grid-cols-4 gap-2 p-[1rem] place-items-center'>
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
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120} />
            </div>
            <div className='px-[3rem] flex justify-between'>
                <p className='font-bold text-black text-2xl my-[1.5rem]'>Electronics & Gadgets</p>
                <p>veiw all</p>
            </div>
            <div className='mb-[3rem] grid grid-cols-4 gap-2 p-[1rem] place-items-center'>
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
