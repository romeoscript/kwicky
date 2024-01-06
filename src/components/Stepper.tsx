import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import oculus from '../assets/oculus.svg'
import Address from './Address';
import Card from './Card';

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
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };



    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    

    return (
        <>
            <div className='flex gap-4 justify-between p-[1.5rem]'>
                <aside className='basis-[59%]'>
                    <Steps current={current} items={items} />
                    <div>{steps[current].content}</div>

                </aside>
                <aside className='basis-[39%] max-w-[500px] text-black font-bold'>
                    <h2 className='text-xl my-[1rem] capitalize'>Summary</h2>

                    <div className='flex items-center justify-between'>
                        <img src={oculus} alt="" className='w-[100px] h-[100px] rounded-md object-cover' />
                        <p>oculus control <br /> <span>$230</span></p>
                    </div>
                    <p className='flex items-center justify-between mt-[1rem]'> <span>Devlivery</span> <span>$13.50</span></p>
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