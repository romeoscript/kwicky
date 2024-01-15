import Layout from "../components/Layout"
import filled from '../assets/Filled.svg'
import filled1 from '../assets/Filled (1).svg'
import filled2 from '../assets/Frame 472.svg'
import { Button } from "antd"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom"
import { useCart } from "../context/cartContext"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import useFetch from "../hooks/useFetch"
import useRecentlyViewedProducts from "../hooks/useRecent"


interface Product {
  id: number;
  name: string;
  get_image: string;
  image1: string;
  image2: string;
  image3: string;
  price: number;
  img: string;
  total: number;
  rating: number;
  category: number;
  description: string;
  quantity: number;
}
interface AggregatedCartItem extends Product {
  quantity: number;
}
const Productpage = () => {
  const { id } = useParams()
  const { data: product } = useFetch<Product>(`https://api.kwick.ng/api/v1/product/${id}`)
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart()

  const handleAddToCart = (item: Product) => {
    addToCart(item)
  }

  const handleDecreaseQuantity = (item: Product) => {
    decreaseQuantity(item);
  };



  console.log(cartItems);

  const foundItem = cartItems.find(item => item.id === product?.id);

  console.log(foundItem, product?.id);

  const aggregatedCartItems: Record<number, AggregatedCartItem> = cartItems.reduce((acc: Record<number, AggregatedCartItem>, item: Product) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});




  const imageurls = product ? [product.get_image, product.image1, product.image2, product.image3] : [];
  const imageElements = imageurls.slice(0, 3).map((url, index) => (
    <aside className="flex-1" key={index}>
      <img src={url} className="md:h-full" alt={`Product Image ${index + 1}`} />
    </aside>
  ));

  const mainImage = imageurls.map((url, index) => (
    <div key={index}>
      <img src={url} className="md:h-[500px] h-[300px] object-cover w-full rounded-md" alt="" />
    </div>
  ))

  return (
    <Layout>
      <div className="pt-[100px]">
        <aside className="grid md:grid-cols-2 gap-4 m-[2rem] ">
          <figure className=" min-h-[500px]  grid md:grid-cols-[1fr_3fr] gap-4 ">
            <div className="flex md:flex-col md:h-[500px] gap-4 max-md:order-2">
              {imageElements}
            </div>
            <div className="h-full max-md:order-1 ">
              <div className="">
                <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={3000} showStatus={false} infiniteLoop={true}>

                  {mainImage}
                </Carousel>
              </div>
              {foundItem ? <> {Object.values(aggregatedCartItems).map((item, index) => (
                <figure key={index} className="max-md:hidden">
                   <aside className='flex gap-4 p-[1rem] max-md:hidden'>
                    <Button type="primary" className='h-[60px] bg-gray-500 important rounded-md' onClick={() => handleDecreaseQuantity(item)} icon={<MinusOutlined />} />
                    <input type="text" value={item.quantity} className="input rounded-md bg-white input-bordered input-primary w-[30px] text-center p-0 h-[30px] md:w-[60px] md:h-[60px] max-w-xs" readOnly />
                    <Button type="primary" className='md:w-[60px] md:h-[60px] bg-[#01183C] important rounded-md' onClick={() => handleAddToCart(item)} icon={<PlusOutlined className='text-xs' />} />
                  </aside>
                </figure>
              ))}</> : <Button
                type="primary"
                className="bg-[#01183C] h-[40px] block w-full mx-auto my-[1rem] max-md:hidden"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>}

            </div>
            <div className="flex md:hidden order-3 text-black items-center w-full justify-between font-bold text-md">
              <h2 >{product?.name}</h2> <p>&#8358; {product?.price}</p>
            </div>
          {foundItem ? <> {Object.values(aggregatedCartItems).map((item, index) => (
                <figure key={index} className="order-3 md:hidden ">
                   <aside className='flex gap-4 p-[1rem] md:hidden'>
                    <Button type="primary" className='h-[60px]  bg-gray-500 important rounded-md' onClick={() => handleDecreaseQuantity(item)} icon={<MinusOutlined />} />
                    <input type="text" value={item.quantity} className="input rounded-md bg-white input-bordered input-primary w-[30px] text-center p-0 h-[30px] md:w-[60px] md:h-[60px] max-w-xs" readOnly />
                    <Button type="primary" className='md:w-[60px] md:h-[60px] bg-[#01183C] important rounded-md' onClick={() => handleAddToCart(item)} icon={<PlusOutlined className='text-xs' />} />
                  </aside>
                </figure>
              ))}</> : <Button
                type="primary"
                className="bg-[#01183C] md:hidden order-3 h-[40px] block w-full mx-auto my-[1rem] md:hidden"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>}


          </figure>

          <figure className=" min-h-[50px] md:w-[90%]  mx-auto">
            <h1 className="text-2xl font-bold my-[1rem]">Product Description </h1>
            <h1 className="text-xl">{product?.name}</h1>
            <p>{product?.description} </p>
          </figure>
        </aside>

      </div>

      <div className="flex items-center max-md:flex-col gap-4 w-[95%] my-[4rem] m-auto">
        <aside className="flex flex-col">
          <h2 className="flex items-center text-xl"> <img src={filled} alt="" /> Extended Warranty for Peace of Mind</h2>
          <p className="px-[2.6rem] max-md:text-xs md:w-[90%]">Our extended warranty goes beyond the standard coverage, providing you with additional peace of mind. Should any issues arise with your product after the initial warranty period, our dedicated support team is here to assist you.</p>
        </aside>
        <aside className="flex flex-col">
          <h2 className="flex items-center text-xl"> <img src={filled1} alt="" /> Customer Satisfaction Guarantee </h2>
          <p className="px-[2.6rem] max-md:text-xs md:w-[90%]">We are so confident in the quality of our products that we offer a 100% customer satisfaction guarantee. If for any reason you are not completely satisfied with your purchase, simply contact our dedicated customer support team within 24 days of receiving your order, and we will make it right.</p>
        </aside>
        <aside className="flex flex-col">
          <h2 className="flex items-center text-xl"> <img src={filled2} alt="" /> Return Policy</h2>
          <p className="px-[2.6rem] max-md:text-xs md:w-[90%]"> Our return policy ensures your satisfaction. If, for any reason, you're not completely happy with your preorder, reach out to our dedicated support team within 24 days of receiving your order. We're here to make it right and ensure your experience with us is nothing short of exceptional.
          </p>
        </aside>

      </div>

      {/* <Recents /> */}
    </Layout>
  )
}

export default Productpage
