import React, { Suspense } from 'react';
import Hero from '../../Components/Homepage/Hero';
import Friends from '../../Components/Homepage/Friends/Friends';
import { GridLoader } from 'react-spinners';

const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback={ <div className='flex m-auto justify-center' > <GridLoader /> </div> }>
                
            <Friends></Friends>
            </Suspense>
            
        </div>
    );
};

export default Homepage;