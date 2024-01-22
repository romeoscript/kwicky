import error from '../assets/error.png'
import Layout from './Layout'

const Error = () => {
    return (
        <Layout>
            <div className='flex items-center md:h-[100vh] justify-center'>
                <img src={error} className='w-full max-h-[500px] max-w-[500px]' alt="No Results Found " />
            </div>
        </Layout>
    )
}

export default Error
