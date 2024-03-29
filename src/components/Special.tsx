

import watch from '../assets/watch.png'
import bag from '../assets/bag.png'
import BonnusCard from './BonnusCard'

const Special = () => {
    return (
        <div className='m-[1rem] p-[2rem] text-black'>
            <h2 className='text-xl font-bold'>Valentine Sales With </h2>
            <p className='md:text-4xl text-xl font-bold '>10% Discount</p>

            <div className='grid md:grid-cols-2 gap-4 my-[2rem] '>
                <aside>
                    <BonnusCard
                        imageUrl={bag}
                        title="Shoes!"
                        rating={4}
                        price={400}

                    />
                    <BonnusCard
                        imageUrl={watch}
                        title="Shoes!"
                        rating={4}
                        height="450px"
                        price={400} // You can set custom width like this
                    />

                </aside>
                <aside>

                    <BonnusCard
                        imageUrl={watch}
                        title="Shoes!"
                        rating={4}
                        height="450px"
                        price={400} // You can set custom width like this
                    />

                    <BonnusCard
                        imageUrl={bag}
                        title="Shoes!"
                        rating={4}
                        price={400}
                    />

                </aside>

            </div>
        </div>
    )
}

export default Special
