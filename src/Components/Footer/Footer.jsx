import React from 'react';
import Flogo from "../../assets/keenkeeper.png"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] h-100 lg:h-70 mt-10 p-5 lg:p-10  '>
            <div className='w-[100%] lg-[1400px]'>
                <div className='text-white text-center'>
                    <img className='m-auto' src={Flogo} alt="" />
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className=' lg:text-xl font-bold mt-5 mb-3'>Social Links</p>
                    <div className='flex gap-3 justify-center mb-5'>
                        <FaInstagram className='bg-white text-black p-1 w-6 h-6 rounded-full cursor-pointer ' />
                        <FaFacebookF className='bg-white text-black p-1 w-6 h-6 rounded-full cursor-pointer ' />
                        <FaXTwitter className='bg-white text-black p-1 w-6 h-6 rounded-full cursor-pointer ' />
                    </div>

                </div>
                <hr className='border border-green-800 my-5'/>
                <div className='text-white grid lg:grid-cols-2 gap-3 justify-between w-[100%] lg:w-[1400px] m-auto'>
                    <p>
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <ul className='flex
                     gap-2  underline'>
                        <li>Privacy Policy   </li>
                        <li>Terms of Service </li>
                        <li>Cookies</li>
                    </ul>



                </div>


            </div>
        </div>
    );
};

export default Footer;