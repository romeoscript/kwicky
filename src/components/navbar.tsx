
import logo from '../assets/logo.svg'
import { BiSupport } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { TbMenu } from "react-icons/tb";
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IoMdClose } from "react-icons/io";
import { Input } from 'antd';
import { RiSearch2Line } from "react-icons/ri";
import { useState } from 'react';
import { motion } from 'framer-motion'
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cartItems } = useCart()
    const [mobile, setMobile] = useState(false)

    const showMobile = () => {
        setMobile(!mobile)
    }
    const mobileMenuVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };
    const items: MenuProps['items'] = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item（disabled）',
            key: '3',
            disabled: true,
        },
    ];
    return (
        <>

            <section className='shadow-md fixed  z-200  bg-white w-full h-[80px] ' style={{ zIndex: 50 }}>
                <div className="navbar  max-w-[1440px] m-auto  " >

                    <div className="flex-1">
                        <div className='text-2xl font-bold pl-[1rem] cursor-pointer md:hidden'>
                            <TbMenu onClick={showMobile} />
                        </div>
                        <Link to='/'>
                            <a className="btn btn-ghost text-xl">    <img src={logo} className='h-[60px]' alt="" /></a>

                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-black flex items-center">

                            <li className='max-md:hidden'>
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

                            <li className='max-md:hidden' ><a> <BiSupport />Support</a></li>
                            <Link to='/cart'> <li className='bg-[#01183C] text-white rounded-md '><a><IoCartOutline />Cart {cartItems.length} </a></li>
                            </Link>

                            <li className='ml-[3.5rem] max-md:hidden'>
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
                {mobile &&
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit='hidden'
                        variants={mobileMenuVariants}
                        transition={{ duration: 0.3 }}
                        className=' bg-[blue] flex flex-col gap-8 text-white absolute w-full  p-[1.5rem]' style={{ zIndex: 200 }}>
                        <div className='flex items-center justify-between gap-2 mb-[1rem]'>
                            <a className="btn btn-ghost text-xl">    <img src={logo} className='h-[60px]' alt="" /></a>
                            <IoMdClose className="text-2xl cursor-pointer" onClick={showMobile} />
                        </div>
                        <form >
                            <Input
                                className='w-full rounded-full p-[1rem]'
                                size="large"
                                placeholder="Search for Products"
                                prefix={<RiSearch2Line />}

                            />
                        </form>
                        <Dropdown menu={{ items }} className='z-20'>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Category
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>

                        <Dropdown menu={{ items }} className='z-20'>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <GrLanguage /><a>Eng</a>
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>

                        <li className='z-20 flex items-center gap-2' > <BiSupport />Support</li>

                        <li className='bg-[#01183C] text-white rounded-md z-20 flex items-center p-[1rem] justify-center gap-2'><IoCartOutline />Cart</li>

                    </motion.div>
                }
            </section>
        </>

    )
}

export default Navbar