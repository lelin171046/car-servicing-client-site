import React from 'react';

const BookingLIst = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { name, price, img, title, date, _id, status } = booking;
    console.log(booking);
    return (

        <div className="">

            <tr>
                <th></th>
                <th>Service Name</th>
                <th>Date</th>
                <th>price</th>
                <th>Status</th>
            </tr>
            <tbody className='gap-6'>
                {/* row 1 */}
                <tr>
                    <th>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-circle">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={img}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div>{title}</div>
                            </div>
                        </div>
                    </td>
                    <td>

                        <br />
                        <span >{date}</span>
                    </td>
                    <td>{price}</td>
                    <th>
{                     status === 'confirm'? <span className='font-bold text-secondary'>Confirmed</span> :  <button onClick={()=> handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
}                    </th>
                </tr>

            </tbody>

        </div>

    );
};

export default BookingLIst;