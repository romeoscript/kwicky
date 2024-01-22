

import watch from '../assets/watch.png'
import bag from '../assets/bag.png'
import BonnusCard from './BonnusCard'

const Special = () => {
    return (
        <div className='m-[1rem] p-[2rem]'>
            <h2>Valentine Sales With </h2>
            <p>10% Discount</p>

            <div className='grid md:grid-cols-2 gap-4 my-[2rem] '>
                <aside>
                    <BonnusCard
                        imageUrl={bag}
                        title="Shoes!"
                        description="If a dog chews shoes whose shoes does he choose?"
                     
                    />
                    <BonnusCard
                        imageUrl={watch}
                        title="Shoes!"
                        description="If a dog chews shoes whose shoes does he choose?"
                        height="450px" // You can set custom width like this
                    />

                </aside>
                <aside>
                
                    <BonnusCard
                        imageUrl={watch}
                        title="Shoes!"
                        description="If a dog chews shoes whose shoes does he choose?"
                        height="450px" // You can set custom width like this
                    />

<BonnusCard
                        imageUrl={bag}
                        title="Shoes!"
                        description="If a dog chews shoes whose shoes does he choose?"
                     
                    />

                </aside>

            </div>
        </div>
    )
}

export default Special
