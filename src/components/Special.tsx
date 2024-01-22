import React from 'react'
import bag from '../assets/bag.png'
import watch from '../assets/watch.png'

const Special = () => {
    return (
        <div className='m-[1rem]'>
            <h2>Valentine Sales With </h2>
            <p>10% Discount</p>

            <div className='flex gap-4'>
                <aside>
                    <div>
                        <img src={bag} alt="" />
                    </div>
                    <div>
                        <img src={watch} alt="" />
                    </div>
                </aside>
                <aside>
                    <div>
                        <img src={bag} alt="" />
                    </div>
                    <div>
                        <img src={watch} alt="" />
                    </div>
                </aside>
           
            </div>
        </div>
    )
}

export default Special
