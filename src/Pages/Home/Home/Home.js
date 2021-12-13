import React from 'react';
import Banner from '../Banner/Banner';
import Shoes from '../Products/Shoes/Shoes';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Shoes></Shoes>
            <Footer></Footer>
        </div>
    );
};

export default Home;

