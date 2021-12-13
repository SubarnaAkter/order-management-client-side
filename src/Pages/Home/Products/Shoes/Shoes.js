import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);
    
    const size=10;
    useEffect(() => {
        fetch('https://still-beyond-38528.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setShoes(data);
               
                // const count=data.count;
                // const pageNumber=Math.ceil(count/size)
                // setPagecount(pageNumber)
            });
    }, []);

    return (
        <Container>
            <h1>Available Shoes</h1>
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