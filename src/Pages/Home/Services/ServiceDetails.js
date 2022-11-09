import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {



const service = useLoaderData();
const { service_id, img, price, title,description } = service;
    
return (
    <div className="my-9 py-3 px-3 card-compact w-96 h-auto bg-base-100 shadow-xl">
    <figure><img src={img} alt="foods" /></figure>
    <div className="ml-2 p-2">
        <h2 className="card-title"><strong>{title}</strong></h2>
        <p className='text-2xl text-red-500 font-semibold'>Price: {price} BDT</p>
        <p>{description} <span className='text-gray-500'>See more</span></p>
        <div className="card-actions justify-end">
            <Link to={`/foods/${service_id}`}>
                <button className="bg-indigo-400 p-1  rounded mt-2 ml-1 mb-5 text-center">View Details</button>
            </Link>
        </div>
    </div>
    
</div>
    );
};

export default ServiceDetails;