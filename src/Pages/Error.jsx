import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Error = () => {
    return (
        <div className="diff aspect-[16/9]">
         
    <Link to={'/'}> <h1 className='text-7xl' >404</h1><button className="btn btn-outline btn-info">back to Home</button>
   {
     Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      })
   }
    </Link>


</div>
    );
};

export default Error;