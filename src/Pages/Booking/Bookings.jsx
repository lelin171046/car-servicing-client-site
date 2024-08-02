import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import BookingLIst from "./BookingLIst";
import axios from "axios";

const Bookings = () => {
    const {user} = useAuth()
    const [booking, setBooking] = useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            setBooking(data)
        })
    },[])

    const handleDelete = id =>{
        const proceed = confirm("Are you sure you want to delete?");
        if(proceed){
            axios.delete(`http://localhost:5000/bookings/${id}`)
            // .then(res => res.json())
            .then(data =>{
                console.log('hhhh',data.data);
                if(data.deletedCount > 0){
                    alert('delete successful')
                }
                const remaining = booking.filter(booking => booking._id !==id)
                setBooking(data.remaining)
            })
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                const remaining = booking.filter(booking => booking._id !==id);
                const updated = booking.find(booking => booking._id !==id);
                updated.status = "confirm";
                const newBooking = [updated, ...remaining];
                setBooking(newBooking)
            }
            
        })
    }
    return (
       <div className="">
        {
            booking?.map(booking=><BookingLIst 
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleBookingConfirm={handleBookingConfirm}
            ></BookingLIst>)
        }
       </div>
    );
};

export default Bookings;