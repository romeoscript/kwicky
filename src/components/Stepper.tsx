import React, { useState, useEffect } from 'react';
import { message } from 'antd';

import { useCart } from '../context/cartContext';
import PaystackPop from '@paystack/inline-js'
import { useForm, Controller } from 'react-hook-form';
import { Select, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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




const Stepper: React.FC = () => {
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm<FormData>();
    const { cartItems, clearCart } = useCart()
    const paystack = new PaystackPop()
    const initialAggregatedItems: AggregatedItems = {};
    const [states, setStates] = useState([]); // Stores states data
    const [cities, setCities] = useState([]); // Stores cities data
    const [selectedState, setSelectedState] = useState(''); // Tracks the selected state

    // Fetch states and cities data
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json')
            .then(response => {
                const nigeriaStates = response.data.filter(state => state.country_code === 'NG');
                setStates(nigeriaStates);
            })
            .catch(error => console.error('Error fetching states:', error));

        axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json')
            .then(response => {
                const nigeriaCities = response.data.filter(city => city.country_code === 'NG');
                setCities(nigeriaCities);
            })
            .catch(error => console.error('Error fetching cities:', error));
    }, []);
    const handleStateChange = value => {
        setSelectedState(value);
        console.log(selectedState);

    };

    // Filtered cities based on the selected state
    const filteredCities = cities.filter(city => city.state_name === selectedState);


    const aggregatedItems = cartItems.reduce((acc: AggregatedItems, item: Product) => {
        const itemId = item.id.toString(); // Convert the id to string if it's a number
        if (acc[itemId]) {
            acc[itemId].count += 1;
            acc[itemId].totalPrice += parseFloat(item.price.toString()); // Assuming price is a number here
        } else {
            acc[itemId] = { ...item, count: 1, totalPrice: parseFloat(item.price.toString()) }; // Assuming price is a number here
        }
        return acc;
    }, initialAggregatedItems);


    const subtotal = Object.values(aggregatedItems).reduce((sum, item) => sum + item.totalPrice, 0);
    const deliveryCost = 0;
    const total = subtotal + deliveryCost;

    const [current, setCurrent] = useState(0);
    const handlePaymentSuccess = async (formData: FormData) => {

        message.success('Payment successful!'); // Display success message

        const orderItems = Object.values(aggregatedItems).map(item => ({
            product: item.id, // Adjust this if your product identifier differs
            quantity: item.count,
            price: item.totalPrice
        }));

        const orderData = {
            full_name: formData.fullname, // Adjust these field names if needed
            city: formData.city,
            email: formData.Email,
            zipcode: "12345", // Add if available or use a default value
            country: selectedState, // Adjust as per your requirement
            paid_amount: total,
            order_number: "NG" + new Date().getTime(), // Create a unique order number
            phone: formData.Phone,
            address: formData.address,
            items: orderItems
        };
        try {
            // Using Axios
            const response = await axios.post('https://api.kwick.ng/api/v1/checkout/', orderData);
            console.log(response.data); // Handle response data
            clearCart();
            navigate('/cart');
        } catch (error) {
            console.error('Error posting order:', error);
            // Handle errors (e.g., show error message)
        }

        // Clear the cart
    };

    const next = (formData: FormData) => {
        setCurrent(current + 1)
        paystack.newTransaction({
            key: "pk_test_c8a37742f08f8233439cc38103f44d5b83faee13",
            amount: total * 100,
            email: formData.Email,
            name: formData.fullname,
            phone: formData.Phone,
            address: formData.address,
            onSuccess: () => handlePaymentSuccess(formData)
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
                            <label htmlFor=""> Full name</label>
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
                            <label htmlFor=""> Email</label>
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
                            <label htmlFor=""> Phone</label>
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
                            <label htmlFor=""> Address</label>
                                <Controller
                                    name="address"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="address"
                                            className='p-[0.5rem]'
                                            allowClear
                                        />
                                    )}
                                />
                            </div>

                            <div >
                                <label htmlFor=""> State</label>
                                <Controller
                                    name="state"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            value={selectedState} // Set the value to the selected state
                                            className='w-full'
                                            onChange={(value) => {
                                                field.onChange(value); // Notify React Hook Form of the change
                                                handleStateChange(value); // Update local component state
                                            }}
                                            placeholder="State"
                                            options={states.map(state => ({ value: state.name, label: state.name }))}
                                        />
                                    )}
                                />

                            </div>
                            <div>
                            <label htmlFor=""> City</label>
                                <Controller
                                    name="city"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className='w-full'
                                            placeholder="City"
                                            options={filteredCities.map(city => ({ value: city.name, label: city.name }))}
                                            disabled={!selectedState} // Disable if no state is selected
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