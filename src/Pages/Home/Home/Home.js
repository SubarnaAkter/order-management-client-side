import React from 'react';
import Banner from '../Banner/Banner';
import Shoes from '../Products/Shoes/Shoes';
import Navigation from '../Shared/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Shoes></Shoes>
        </div>
    );
};

export default Home;

