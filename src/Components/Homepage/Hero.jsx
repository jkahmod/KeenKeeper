import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <div className='text-center space-y-5 my-20 w-[1400px] m-auto' >
            <h1 className='text-4xl font-bold '>Friends to keep close in your life</h1>
            <p>our personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'><FaPlus/>Add a Friend</button>
            </div>
        </div>
    );
};

export default Hero;