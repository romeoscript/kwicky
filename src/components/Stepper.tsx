import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';

import { useCart } from '../context/cartContext';
import PaystackPop from '@paystack/inline-js'
import { useForm, Controller } from 'react-hook-form';
import { Select, Input } from 'antd';




const Stepper: React.FC = () => {

    interface FormData {
        fullname: string;
        Email: string;
        address: string;
        city: string;
        state: string;
        Phone: string;
    }
    interface Product {
        id: number;
        name: string;
        img: string;
        price: number;
        rating: number;
        total: number;
        quantity: number;
        image1: string;
    }
    



    interface AggregatedItem extends Product {
        count: number;
        totalPrice: number;
    }
    
    type AggregatedItems = Record<string, AggregatedItem>;
    
    
    const { control, handleSubmit } = useForm<FormData>();




    const { cartItems,clearCart} = useCart()
    const paystack = new PaystackPop()

    const initialAggregatedItems: AggregatedItems = {};

    const aggregatedItems = cartItems.reduce((acc: AggregatedItems, item: Product) => {
        const itemId = item.id.toString(); // Convert the id to string if it's a number
        if (acc[itemId]) {
            acc[itemId].count += 1;
            acc[itemId].totalPrice += parseFloat(item.price.toString()) ; // Assuming price is a number here
        } else {
            acc[itemId] = { ...item, count: 1, totalPrice: parseFloat(item.price.toString()) }; // Assuming price is a number here
        }
        return acc;
    }, initialAggregatedItems);
    

    const subtotal = Object.values(aggregatedItems).reduce((sum, item) => sum + item.totalPrice, 0);
    const deliveryCost = 0; // Modify this if there's a delivery cost
    const total = subtotal + deliveryCost;

    console.log(total);

    const [current, setCurrent] = useState(0);
    const handlePaymentSuccess = () => {
        clearCart(); // Clear the cart
        message.success('Payment successful!'); // Display success message
        // You can also navigate the user to a different page if needed
    };

    const next = (formData:FormData) => {
        setCurrent(current + 1)
        paystack.newTransaction({
            key: "pk_test_c8a37742f08f8233439cc38103f44d5b83faee13",
            amount: total * 100,
            email: formData.Email,

            onSuccess:() => handlePaymentSuccess()
        })
    };

    const onSubmit = (data: FormData) => {
        console.log(data);
        next(data)
    };


    return (
        <>
            <form className='md:flex gap-4 justify-between p-[1.5rem]' onSubmit={handleSubmit(onSubmit)}>
                <aside className='basis-[59%]'>
                    <div className='my-[2rem]'>
                        <div className='flex flex-col gap-8'>
                            <div>
                                <Controller
                                    name="fullname"
                                    control={control}

                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Full name"
                                            className='p-[0.5rem]'
                                            allowClear
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                <Controller
                                    name="Email"
                                    control={control}

                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Email"
                                            type='email'
                                            className='p-[0.5rem]'
                                            allowClear
                                        />
                                    )}
                                />
                            </div>
                            <div>
                            <Controller
                                name="Phone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Phone"
                                        className='p-[0.5rem]'
                                        allowClear
                                    />
                                )}
                            />
                            </div>
                            <div>
                                <Controller
                                    name="address"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className='w-full '
                                            placeholder="Address"
                                            options={[
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                                { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    )}
                                />

                            </div>
                            <div>
                                <Controller
                                    name="city"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="City"
                                            className='p-[0.5rem]'
                                            allowClear
                                        />
                                    )}
                                />
                            </div>
                            <div >
                                <Controller
                                    name="state"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className='w-full '
                                          
                                            placeholder="State"
                                            options={[
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                                { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    )}
                                />
                            </div>
                         

                        </div>
                    </div>

                </aside>
                <aside className='basis-[39%] max-w-[500px] text-black font-bold'>
                    <h2 className='text-xl my-[1rem] capitalize'>Summary</h2>

                    {Object.values(aggregatedItems).map((item) => (
                        <div className='flex items-center justify-between' key={item.id}>
                            <img src={item.image1} alt="" className='w-[100px] h-[100px] rounded-md object-cover' />
                            <div>
                                <p>{item.name.length > 10 ? item.name.substring(0, 10) + '...' : item.name} x {item.count}<br /> <span>₦{item.totalPrice}</span></p>
                            </div>
                        </div>
                    ))}
                    <p className='flex items-center justify-between mt-[1rem]'> <span>Devlivery</span> <span>free</span></p>
                    <p className='flex items-center justify-between my-[1rem]'> <span>Subtotal</span> <span>₦{subtotal}</span></p>
                    <p className='flex items-center justify-between'><span>Total</span> <span>₦{total}</span></p>
                    <div style={{ marginTop: 24 }}>
                        <button className='bg-[#01183C] w-full h-[50px] rounded-md text-white' type="submit">
                            Checkout
                        </button>
                    </div>
                </aside>


            </form>
        </>
    );
};

export default Stepper;