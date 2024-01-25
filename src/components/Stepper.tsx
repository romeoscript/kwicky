import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
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
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm<FormData>();
    const { cartItems, clearCart } = useCart();
    const paystack = new PaystackPop();
    const initialAggregatedItems: AggregatedItems = {};

    const [states, setStates] = useState<any[]>([]);
    const [cities, setCities] = useState<any[]>([]);
    const [selectedState, setSelectedState] = useState('');
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json')
            .then(response => {
                const nigeriaStates = response.data.filter((state: any) => state.country_code === 'NG');
                setStates(nigeriaStates);
            })
            .catch(error => console.error('Error fetching states:', error));

        axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json')
            .then(response => {
                const nigeriaCities = response.data.filter((city: any) => city.country_code === 'NG');
                setCities(nigeriaCities);
            })
            .catch(error => console.error('Error fetching cities:', error));
    }, []);

    const handleStateChange = (value: any) => {
        setSelectedState(value);
        console.log(selectedState);
    };

    const filteredCities = cities.filter((city: any) => city.state_name === selectedState);

    const aggregatedItems = cartItems.reduce((acc: AggregatedItems, item: Product) => {
        const itemId = item.id.toString();
        if (acc[itemId]) {
            acc[itemId].count += 1;
            acc[itemId].totalPrice += parseFloat(item.price.toString());
        } else {
            acc[itemId] = { ...item, count: 1, totalPrice: parseFloat(item.price.toString()) };
        }
        return acc;
    }, initialAggregatedItems);

    const subtotal = Object.values(aggregatedItems).reduce((sum, item) => sum + item.totalPrice, 0);
    const deliveryCost = 0;
    const total = subtotal + deliveryCost;

    const handlePaymentSuccess = async (formData: FormData) => {
        setIsSuccessModalVisible(true);
        const orderItems = Object.values(aggregatedItems).map(item => ({
            product: item.id,
            quantity: item.count,
            price: item.totalPrice
        }));

        const orderData = {
            full_name: formData.fullname,
            city: formData.city,
            email: formData.Email,
            zipcode: "12345",
            country: selectedState,
            paid_amount: total,
            order_number: "NG" + new Date().getTime(),
            phone: formData.Phone,
            address: formData.address,
            items: orderItems
        };

        try {
            const response = await axios.post('https://api.kwick.ng/api/v1/checkout/', orderData);
            console.log(response.data);
            clearCart();
        } catch (error) {
            console.error('Error posting order:', error);
        }
    };

    const handleModalOk = () => {
        setIsSuccessModalVisible(false);
        navigate('/'); // Navigate to home page
    };

    const handleModalCancel = () => {
        setIsSuccessModalVisible(false);
        navigate('/'); // Navigate to home page
    };

    const next = (formData: FormData) => {
        paystack.newTransaction({
            key: "pk_test_c8a37742f08f8233439cc38103f44d5b83faee13",
            amount: total * 100,
            email: formData.Email,
            name: formData.fullname,
            phone: formData.Phone,
            address: formData.address,
            onSuccess: () => handlePaymentSuccess(formData)
        });
    };

    const onSubmit = (data: FormData) => {
        next(data);
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
                                            options={states.map((state: any) => ({ value: state.name, label: state.name }))}
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
                                            options={filteredCities.map((city: any) => ({ value: city.name, label: city.name }))}
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

            <Modal
                title="Success"
                visible={isSuccessModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="Go to Home"
            >
                <div className="bg-white p-6 md:mx-auto">
                    <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                        <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                        <p>Have a great day!</p>
                        <div className="py-10 text-center">
                            <button onClick={handleModalCancel} className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Stepper;