import Layout from "../components/Layout"
import ProductCard from '../components/ProductCard'
import oculus from '../assets/oculus.svg'
import filled from '../assets/Filled.svg'
import filled1 from '../assets/Filled (1).svg'
import filled2 from '../assets/Frame 472.svg'
import { Button } from "antd"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

interface Product {
  id: number;
  name: string;
  get_image: string;
  image1: string;
  image2: string;
  image3: string;
  price: string;
  category: number;
  description: string;
  // ... any other properties that a product might have
}

const Productpage = () => {
  const { id } = useParams()
  const { data: product } = useFetch<Product>(`https://api.kwick.ng/api/v1/product/${id}`)
  console.log(id, product);
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

              <Button
                type="primary"
                className="bg-[#01183C] h-[40px] block w-full mx-auto my-[1rem] max-md:hidden"
              >
                Add to Cart
              </Button>
            </div>
            <Button
              type="primary"
              className="bg-[#01183C] h-[40px] md:hidden order-3 block w-full mx-auto my-[1rem]"
            >
              Add to Cart
            </Button>
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
    </Layout>
  )
}

export default Productpage
