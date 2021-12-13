import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="bg-style text-end">
                <Container className='banner-info'>
                <p >It has Finally Started</p>
                <h1 >Season Sale</h1>
                <h3>Upto 60% OFF!</h3>
                </Container>
            </div>
        </div>
    );
};

export default Banner;