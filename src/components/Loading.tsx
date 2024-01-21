import { MoonLoader } from "react-spinners"
const Loading = () => {
    return (
        <div className='flex justify-center items-center' style={{ height: '80vh' }}>
            <MoonLoader color={'#123abc'} size={150} />
        </div>
    )
}

export default Loading
