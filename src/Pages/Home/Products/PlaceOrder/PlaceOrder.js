import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../../Hooks/UseAuth';
import Navigation from '../../Shared/Navigation';

const PlaceOrder = () => {
    const {id}=useParams()
    const [orders, setOrders] = useState({})
  const { user } = UseAuth()

  useEffect(() => {
    fetch(`https://still-beyond-38528.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }
    , [])

  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    fetch('https://still-beyond-38528.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {
          Swal.fire({

            icon: 'success',
            title: 'Order Placed Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset()
        }
      })
  }
  return (
    <div>
      <Navigation></Navigation>
      <div>
       
        <div className="container my-5">
          <div className="row  g-4 my-5">
            <div className="col-12 col-md-7">
              <div className="card d-flex flex-md-row  flex-col">
                <img src={orders.img} className="w-50 " alt="..." />
                <div className="card-body text-start d-flex justify-content-center align-items-center">
                 <div>
                 <h2 className="card-title">{orders.productName}</h2>
                  <h5 className="card-title">Price: $ {orders.price}</h5>
                  <p className="card-title">Category: {orders.category}</p>
                 </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user.displayName} className="w-100 p-2 m-1" type="text" {...register("name")} readOnly /> <br />

                  <input defaultValue={user.email} className="w-100 p-2 m-1" type="email" {...register("email")} readOnly /> <br />

                  <input placeholder=" Selected Product name"  className="w-100 p-2 m-1" type="text" {...register("productName")} required /> <br />

                  <input placeholder="Enter your Address" className="w-100 p-2 m-1 " type="text" {...register("address")} /> <br />
                  <input placeholder="Enter Contact No." className="w-100 p-2 m-1" type="number" {...register("contact")} /> <br />
                  <input placeholder="Enter Product Price" className="w-100 p-2 m-1" type="number" {...register("price")} /> <br />
                  <input className="w-100 p-2 m-1" type="date" {...register("purchaseDate")}  /> <br />
                  <input placeholder="Source of Order"  className="w-100 p-2 m-1" type="text" {...register("sourceOfOrder")} required /> <br />

                  <input defaultValue="pending" className="w-100 p-2 m-1" type="text" {...register("status")} hidden /> <br />
                 
                  <input className="w-100 p-2 m-1 bg-success text-white fw-bold"  type="submit" value="Place Order" />
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
export default PlaceOrder;