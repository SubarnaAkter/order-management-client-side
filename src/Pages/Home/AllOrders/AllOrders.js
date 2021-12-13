
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Navigation from '../Shared/Navigation';
import './AllOrder.css'
const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [status, setStatus] = useState(true);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size=25;
    useEffect(() => {
        fetch(`https://still-beyond-38528.herokuapp.com/orders?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {setAllOrders(data.orders)
                const count=data.count;
                const pageNumber=Math.ceil(count/size)
                setPageCount(pageNumber)}
            );
    }, [page,status]);

    

    const handleConfirm = (id) => {

        setStatus(false)

        fetch(`https://still-beyond-38528.herokuapp.com/orders/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })
            .then(res => res.json())
            .then(data => {


                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Order Confirmed',
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                }
                setStatus(true)
            })


    }
    return (
        <div>
          <Navigation></Navigation>

            <div className="container my-5">
                <h1 className="text-center">All Orders</h1>
                <Table responsive striped bordered hover className="m-5 ">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Order Status</th>
                            <th>Source of Order</th>
                            <th>Purchase Date</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map(order => <tr
                                key={order.key} >

                               
                                <td>{order.name}</td>
                                <td>{order.contact}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td >{order._id.slice(4, 10)}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>{order.sourceOfOrder}</td>
                                <td>{order.purchaseDate}</td>


                                <td >
                                    <button onClick={() => {
                                        handleConfirm(order._id)
                                    }
                                    } className="me-3 btn btn-success">Confirm Order
                                    </button>

                                   
                                </td>

                            </tr>)
                        }

                    </tbody>
                </Table>
                <div className="pagination m-5">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className= {number === page ? 'selected' : ' '}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                    
            </div>


        </div >
    );
};

export default AllOrders;