import React from 'react';
import Banner from './Banner/Banner';
import About from '../About';
import Services from '../Services';

const Home = () => {
    return (
        <div className='my-4'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
         
        </div>
    );
};

export default Home;