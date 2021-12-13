import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../Hooks/UseAuth';

const Register = () => {
    const { registerUser, authError } = UseAuth();

    const nevigate=useNavigate();
    const location=useLocation();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password,userName ,password2} = data;
        if(password!==password2){
             Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password is not matched!',
                  
                  })
        }
        else{

        registerUser(email, password, userName,nevigate,location);
        }

    }

    return (
        <div>
                <div  className="col-12 container  p-5">
                  <div className=" register text-center bg-white w-75 mx-auto p-3 ">
                      <h1>Register</h1>
                   
                 
                 <div className="">
                 <form onSubmit={handleSubmit(onSubmit)} className="login w-100  p-5 pt-5 mx-auto  " >
                        <input type="text" className="w-100 my-2 p-2 mt-5" placeholder="Enter your Name" {...register("userName")} /> <br />

                        <input type="email" className="w-100 my-2 p-2" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input type="password" className="w-100 mt-2 p-2" placeholder="Enter your Password" {...register("password", { required: true })} /> <br />
                        <input type="password" className="w-100 mt-2 p-2" placeholder="Re-Enter your Password" {...register("password2", { required: true })} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="text-danger pb-2 mb-3">This field is required</span>} <br />
                        <p className="text-danger">{authError}</p>
                        <input className=" btn-regular rounded w-100 fw-bold mb-3" type="submit" /><br />
                    </form>
                    <p className="text-white text-center">Already Registered?  <Link to="/login">Please Login</Link></p>
                 </div>
          </div>
          </div>
        </div>
    );
};

export default Register;