import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';


const Login = () => {
     const { loginUser, authError } = UseAuth();
  
    const location = useLocation();
    const nevigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      const { email, password } = data;
      loginUser(email, password, location, nevigate)
    }
  
    return (
        <div className=" text-center w-75 mx-auto p-3 pt-5">
        
          <h1 className="pt-5 mt-5">Login</h1>
         
      
        <form onSubmit={handleSubmit(onSubmit)} className=" p-5 pt-5 mx-auto border">


          <input type="email" className="w-100 my-2 p-2 mt-5" placeholder="Enter your Email" {...register("email", { required: true })} /> <br />


          <input type="password" className="w-100 my-2 p-2" placeholder="Enter your Password" {...register("password", { required: true })} /> <br />
          {/* errors will return when field validation fails  */}
          {errors.email && <span className="text-danger pb-2 mb-3">This field is required</span>} <br />
          <p className="text-danger">{authError}</p>
          <input className="btn-regular  rounded w-100 fw-bold mb-3" type="submit" /><br />
        </form>
        <p className="text-white text-center">New to Shoeinverse?  <Link to="/register">Create an account</Link></p>
      </div>
    
    );
};

export default Login;