import React from 'react';
import { Card, Col,Button   } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Shoe.css'
const Shoe = ({ shoe }) => {
    const {_id, productName, price, img, category } = shoe;
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="m-0 p-0">
                   <Link to={`/shoe/${_id}`} > <Button  className="w-100  btn-regular">Buy Now</Button></Link>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Shoe;