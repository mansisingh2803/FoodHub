import React, { useState, useContext } from 'react'
import Logo from './logo'
import useOnlineStatus from '../../utils/useOnlineStatus'
import UserContext from '../../utils/userContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai"; // About Icon
import { GiForkKnifeSpoon } from "react-icons/gi";
const Navbar = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    //Subscribing to the store usin our Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='flex sticky z-50 top-0 justify-between items-center bg-white font-[500] shadow-lg px-6 py-1'>
            <div className='pl-4'>
                <Logo />
            </div>
            <div >
                <ul className='flex space-x-6'>
                    <li className='flex items-center space-x-2'>
                        <AiFillHome size={20} />
                        <Link to='/' className="text-md">

                            Home
                        </Link>
                    </li>
                    <li className='flex items-center space-x-2 '>
                        <AiOutlineInfoCircle size={20} color="black" />
                        <Link className='text-md' to='/about'>About</Link>

                    </li>
                    <li className='flex items-center space-x-2'>
                        <GiForkKnifeSpoon size={20} />
                        <Link className='text-md' to='/blogs'>Food Blogs</Link>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <FaShoppingCart size={20} color="black" />
                        <Link to='/cart' className='flex pr-4 '>


                            <div className='flex text-md'>Cart {cartItems.length} </div>

                        </Link>

                    </li>
                    <li className="px-4">{onlineStatus ? '🟢' : '⛔'}</li>

                </ul>
            </div>
        </div >
    )
}

export default Navbar