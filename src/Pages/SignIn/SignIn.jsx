import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuth';
import Swal from 'sweetalert2';
import { updateProfile as firebaseUpdateProfile } from 'firebase/auth';

const SignIn = () => {

    const { createUser } = useAuth();
  const navigate = useNavigate();


  const { register, handleSubmit,  formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { email, password, fullName, image } = data;
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return firebaseUpdateProfile(user, {
          displayName: fullName,
          photoURL: image
        });
        
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration successfull",
          showConfirmButton: false,
          timer: 1500
        });
         
       

        navigate('/');
      })
    }
  
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">SignUp now!</h1>

            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="username" placeholder="username"  {...register("username", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your image URL</span>
                        </label>
                        <input type="imgUrl" placeholder="imgUrl"  {...register("imgUrl", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"  {...register("email", { required: true })} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"  {...register("password", {
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i
                  })}  className="input input-bordered" required />
                        {errors.password && <span className="text-red-500 text-sm">Password must include at least one letter, one number, and one special character, and be at least 8 characters long.</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignIn;