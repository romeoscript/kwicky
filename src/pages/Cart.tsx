import React from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import oculus from '../assets/oculus.svg'
import { Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const Cart = () => {
    return (
        <Layout>
            <div className='pt-[100px] mb-[3rem] '>

                <aside className='flex items-start justify-between p-[2rem] border-2'>
                    <figure className='flex items-center gap-4 '>
                        <img src={oculus} alt="" className='md:w-[150px] md:h-[150px] h-[80px] w-[80px] rounded-xl object-cover' />
                        <aside className='font-bold text-black capitalize '>
                            oculus control  <br />
                            <span className='md:text-3xl'>$180</span>
                        </aside>
                    </figure>
                    <figure>
                        <p className='text-right px-[1rem] text-[blue] cursor-pointer'>Remove</p>
                    <aside className=' flex gap-4 p-[1rem]'>
                        <Button type="primary" className='h-[60px] bg-gray-500 important rounded-md ' icon={<MinusOutlined />} />
                        <input type="text"  className="input rounded-md bg-white input-bordered input-primary w-[30px] text-center p-0 h-[30px] md:w-[60px] md:h-[60px] max-w-xs" />
                        <Button type="primary" className='md:w-[60px] md:h-[60px] bg-[#01183C] important rounded-md' icon={<PlusOutlined className='text-xs' />} />
                    </aside>
                    </figure>
                </aside>
                <aside className='w-[250px] m-[2rem]'>
                    <p className='mb-[0.7rem] text-xl font-bold text-black' >Cart Summary</p>
                    <p className='flex justify-between'><span>Subtotal</span> <span>$180</span></p>
                    <p className='border-b-2 border-t-2 my-[0.7rem] flex justify-between'><span>Shipping fee</span> <span>free</span></p>
                    <p className='flex justify-between font-bold text-black'><span>Total</span> <span>$180</span></p>

                </aside>
            </div>
            <div className='my-[3rem] grid md:grid-cols-4 grid-cols-2 md:gap-[2%] gap-8 w-full overflow-auto p-[1rem] place-items-center'>
        <ProductCard name="Oculus Control"
          img={oculus}
          price={180}
          rating={4}
          total={120}
        />
        <ProductCard name="Oculus Control"
          img={oculus}
          price={180}
          rating={4}
          total={120}
        />
        <ProductCard name="Oculus Control"
          img={oculus}
          price={180}
          rating={4}
          total={120}
        />
        <ProductCard name="Oculus Control"
          img={oculus}
          price={180}
          rating={4}
          total={120}
        />
      </div>
            {/* <div className='my-[3rem] grid grid-cols-4 gap-[2%] w-full overflow-auto p-[1rem] place-items-center'>
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
                <ProductCard name="Oculus Control"
                    img={oculus}
                    price={180}
                    rating={4}
                    total={120}
                />
            </div> */}
        </Layout>
    )
}

export default Cart
