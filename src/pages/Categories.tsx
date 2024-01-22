import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"

type Product = {
    id: number;
    name: string;
    get_absolute_url: string;
    description: string;
    price: string;
    get_image: string;
    image1: string;
    image2: string;
    image3: string;
    get_thumbnail: string;
    stock_quantity: number;
    category_name: string;
};

type Category = {
    id: number;
    name: string;
    get_absolute_url: string;
    image: string;
    products: Product[];
};


const Categories = () => {
    const { companyname } = useParams()

    const { data , isLoading } = useFetch<Category[]>(`https://api.kwick.ng/api/v1/category/${companyname}/`)

    if (isLoading) {
        return (
            <Loading />
        )
    }
    const category = data?.[0]; // Get the first category
    const products = category?.products; // Get products of the first category

    return (
        <>
            <Layout>
                <div className='pt-[100px]  gap-4  '>

                    <h2 className="font-bold text-2xl p-[2rem]">
                        {category?.name}
                    </h2>
                    <div className='mb-[6rem] grid md:grid-cols-4 gap-8 place-items-center grid-cols-2 gap-2 p-[1rem] place-items-center'>
                        {products?.map((search: any, index: number) => (
                            <Link to={`/product/${search.id}`} key={index}>
                                <ProductCard
                                    id={search.id}
                                    name={search.name}
                                    img={search.image1}
                                    price={search.price}
                                    rating={123}
                                    total={120}
                                />
                            </Link>
                        ))}


                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Categories
