
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import cartimg from '../assets/cartimg.png'
import { Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

interface CartItem {
    id: number;
    name: string;
    img: string;
    price: number;
    rating: number;
    total: number;
    quantity: number;
}

// Define the type for aggregated cart items
interface AggregatedCartItem extends CartItem {
    quantity: number;
}

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart()

    const handleAddToCart = (item: CartItem) => {
        addToCart(item)
    }
    const handleRemoveFromCart = (item: CartItem) => {
        removeFromCart(item)
    }
    const handleDecreaseQuantity = (item: CartItem) => {
        decreaseQuantity(item);
    };



    const aggregatedCartItems: Record<number, AggregatedCartItem> = cartItems.reduce((acc: Record<number, AggregatedCartItem>, item: CartItem) => {
        if (acc[item.id]) {
            acc[item.id].quantity += 1;
        } else {
            acc[item.id] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});


    const total = cartItems.reduce((sum, product) => {

        return sum + parseFloat(product?.price); // Directly use price as a number
    }, 0);


    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Layout>
            {cartItems.length > 0 ? <div className='pt-[100px] mb-[3rem] '>
                {Object.values(aggregatedCartItems).map((item, index) => (
                    <aside className='flex items-start justify-between p-[2rem] border-2' key={index}>
                        <figure className='flex items-center gap-4'>
                            <img src={item.image1} alt="" className='md:w-[150px] md:h-[150px] h-[80px] w-[80px] rounded-xl object-cover' />
                            <aside className='font-bold text-black capitalize'>
                                {item.name} <br />
                                <span className='md:text-3xl'>&#8358;{item.price}</span>
                            </aside>
                        </figure>
                        <figure>
                            <p className='text-right px-[1rem] text-[blue] cursor-pointer' onClick={() => handleRemoveFromCart(item)}>Remove</p>
                            <aside className='flex gap-4 p-[1rem]'>
                                <Button type="primary" className='h-[60px] bg-gray-500 important rounded-md' onClick={() => handleDecreaseQuantity(item)} icon={<MinusOutlined />} />
                                <input type="text" value={item.quantity} className="input rounded-md bg-white input-bordered input-primary w-[30px] text-center p-0 h-[30px] md:w-[60px] md:h-[60px] max-w-xs" readOnly />
                                <Button type="primary" className='md:w-[60px] md:h-[60px] bg-[#01183C] important rounded-md' onClick={() => handleAddToCart(item)} icon={<PlusOutlined className='text-xs' />} />
                            </aside>
                        </figure>
                    </aside>
                ))}
                <aside className='md:w-[250px] m-[2rem]'>
                    <p className='mb-[0.7rem] text-xl font-bold text-black' >Cart Summary</p>
                    <p className='flex justify-between'><span>Subtotal</span> <span>${total}</span></p>
                    <p className='border-b-2 border-t-2 my-[0.7rem] flex justify-between'><span>Shipping fee</span> <span>free</span></p>
                    <p className='flex justify-between font-bold text-black'><span>Total</span> <span>${total}</span></p>
                    <Link to='/process'>
                        <Button
                            type="primary"
                            className="bg-[#01183C] h-[40px] block w-full mx-auto my-[1rem] "

                        >
                            checkout
                        </Button>
                    </Link>
                </aside>

            </div> :
                <div className='pt-[100px] mb-[2rem] flex items-center shadow-md ' >
                    <img src={cartimg} className=' md:h-[400px] md:w-[50%] m-auto' alt="" />
                </div>
            }



            {/* <div className='my-[3rem] grid md:grid-cols-4 grid-cols-2 md:gap-[2%] gap-8 w-full overflow-auto p-[1rem] place-items-center'>
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
