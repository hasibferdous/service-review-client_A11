import React from 'react';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-theta.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div className=' bg-slate-200 mt-5 pt-5 px-5'>
            <div className='text-center mb-4'>
                <h6 className="text-2xl font-bold text-purple-400">Food Bank</h6>
                <h4 className="text-5xl font-semibold">Available Food items for you.!!</h4>
                <p></p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.slice(3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/serviceall'><button class="mb-11 mt-11 ml-11 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">See All</button></Link>
        </div>
    );
};

export default Services;