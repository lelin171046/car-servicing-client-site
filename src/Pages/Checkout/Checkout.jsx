import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';

const Checkout = () => {
    const{user} = useAuth();
    const service = useLoaderData();
    const {title, price, _id, img} = service;
    
    const handleCheckout = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            CustomerName:name,
            service_id: _id, img, date, email, price, title 
        }
        console.log(booking);
        axios.post(`http://localhost:5000/booking`, booking)
        .then(response =>{
            console.log(response.data);
            if(response.data.insertedId){
                alert('Your order is booked')
                console.log('ok');
            }
        })
    }
    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <h1 className='text-3xl font-bold text-orange-500'>Service Name:{title}</h1>
            <form onSubmit={handleCheckout} className=" ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name='date' className="input input-bordered" required />
                <label className="label">
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' defaultValue={'$'+price} placeholder="price" className="input input-bordered" required />
                <label className="label">
                </label>
              </div>
              </div>
              <div className="form-control mt-6">
                {/* <button >Login</button> */}
                <input className="btn btn-primary" type="submit" value="Order Confirm" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Checkout;