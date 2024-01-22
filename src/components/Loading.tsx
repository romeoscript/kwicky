import { MoonLoader } from "react-spinners"
const Loading = () => {
    return (
        <div className='flex justify-center bg-white items-center' style={{ height: '100vh' }}>
            <MoonLoader color={'#123abc'} size={100} />
        </div>
    )
}

export default Loading
