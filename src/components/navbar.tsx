
import logo from '../assets/logo.svg'
import { BiSupport } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
    return (

        <div className="navbar bg-white h-[80px] z-200  fixed " style={{zIndex:50}}>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">    <img src={logo} className='h-[60px]' alt="" /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-black flex items-center">
                  
                    <li>
                        <details>
                            <summary>
                                category
                            </summary>
                            <ul className="p-2 bg-white rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>

                    <li ><a> <BiSupport/>Support</a></li>
                    <li className='bg-[#01183C] text-white rounded-md '><a><IoCartOutline />Cart</a></li>
                   

                    <li className='ml-[3.5rem]'>
                        <details>
                            <summary>
                            <GrLanguage /><a>Eng</a>
                            </summary>
                            <ul className="p-2 bg-white rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar