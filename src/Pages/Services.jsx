import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]); 
    console.log(services);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(response => {
                setServices(response.data); 
            })
            .catch(error => {
                console.error("There was an error fetching the services:", error);
            });
    }, []);

    return (
        <div className="space-y-4">
            <div className="m-auto">
                <h2 className='text-2xl'>Services</h2>
                <h3 className='text-3xl text-orange-600'>Our Services</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
