import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Navigation = () => {
    const {user,logOut,admin}=UseAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Shoe Plaza</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                          { user.email && admin ? <Nav.Link as={Link} to="/order">All Orders</Nav.Link>: ''}
                          { user.email && admin ? <Nav.Link as={Link} to="/order">Make Admin</Nav.Link>: ''}

                    </Nav>
                    <span className="p-2 text-white">
                  {
                    user.email &&  <span className="p-2 text-white">  {user.displayName} </span>

                       
                  }
             </span>
                    <Nav>
                        {
                          user.email ?
                          <button onClick={logOut} className="btn-regular">  Log out</button>
                            : <Nav.Link as={Link} to="/Login">
                             Login
                           </Nav.Link>
                        }
                       
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div >
    );
};

export default Navigation ;