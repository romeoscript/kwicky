import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import oculus from '../assets/oculus.svg'
import Address from './Address';
import Card from './Card';
import { useCart } from '../context/cartContext';

const steps = [
    {
        title: 'First',
        content: <Address />,
    },
    {
        title: 'Second',
        content: <Card />,
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

const Stepper: React.FC = () => {
    const { cartItems } = useCart()
    console.log(cartItems);

    // const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };



    const items = steps.map((item) => ({ key: item.title, title: item.title }));



    return (
        <>
            <div className='md:flex gap-4 justify-between p-[1.5rem]'>
                <aside className='basis-[59%]'>
                    <Steps current={current} items={items} />
                    <div>{steps[current].content}</div>

                </aside>
                <aside className='basis-[39%] max-w-[500px] text-black font-bold'>
                    <h2 className='text-xl my-[1rem] capitalize'>Summary</h2>

                    {cartItems.map((item, index) => (
                        <div className='flex items-center justify-between'>
                            <img src={item.image1} alt="" className='w-[100px] h-[100px] rounded-md object-cover' />
                            <p>{item.name.length > 10? item.name.substring(0,10)+'...': item.name} <br /> <span>#{item.price}</span></p>
                        </div>
                    ))}
                    <p className='flex items-center justify-between mt-[1rem]'> <span>Devlivery</span> <span>free</span></p>
                    <p className='flex items-center justify-between my-[1rem]'> <span>Subtotal</span> <span>$13.50</span></p>
                    <p className='flex items-center justify-between'><span>Total</span> <span>$13.50</span></p>
                    <div style={{ marginTop: 24 }}>
                        {current < steps.length - 1 && (
                            <Button className='bg-[#01183C] w-full h-[50px]' type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button className='bg-[#01183C] w-full h-[50px]' type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}

                    </div>
                </aside>


            </div>
        </>
    );
};

export default Stepper;