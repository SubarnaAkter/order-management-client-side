import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);
    
    
    useEffect(() => {
        fetch('https://still-beyond-38528.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setShoes(data);
               
             
            });
    }, []);

    return (
        <Container>
            <h1 className="text-center m-5 p-5">Available Shoes</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    shoes.map(shoe=><Shoe
                    key={shoe._id}
                    shoe={shoe}
                    ></Shoe>)
                }
             </Row>
        </Container>
    );
};

export default Shoes;