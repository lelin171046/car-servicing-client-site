import React from 'react';
import useAuth from '../useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInUser } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success('Login Successful');
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div><Link to={'/signin'}><p>If you new here please Sign UP</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
