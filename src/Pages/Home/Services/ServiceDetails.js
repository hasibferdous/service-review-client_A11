import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../../Reviews/Reviews';

const ServiceDetails = () => {
    const { _id, img, price, title,description} = useLoaderData()
    
    return (
        <div className='bg-slate-100 -mt-5 pb-11'>
            <div>
            <div className="my-9 py-3 px-3 card card-compact w-3/4 mx-auto bg-base-100 shadow-xl m-4 bg-red-100">
            <PhotoProvider>
            <PhotoView src={img}>
            <figure><img src={img} className='ml-11 pl-5 pt-11' alt="foods" /></figure>
            </PhotoView>
            </PhotoProvider>
            <div className="ml-2 p-2">
                <h2 className="card-title"><strong>{title}</strong></h2>
                <p className='text-2xl text-red-500 font-semibold'>Price: {price} BDT</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="bg-indigo-400 p-1  rounded mt-2 ml-1 mb-5 text-center">Order Now!</button>
                    </Link>
                </div>
            </div>
            
        </div>
            <div className=' bg-red-100 w-3/4 mx-auto rounded mb-11 mt-11'>
                <h2 className='text-center text-4xl mb-3 pt-5'>Reviews</h2>
                <div className='w-3/4 mx-auto grid lg:grid-cols-2 justify-between '>
                    <h2 className='text-xl'> Food Item: <span className='text-center text-xl font-semibold text-red-400'>{title}</span></h2>
                    <br/><h2 className='text-xl'> Price: <span className='text-center text-xl font-semibold text-red-400'>{price}</span></h2>
                </div>
                <div className='mb-5'>
                    <Link to={`/reviews/${_id}`}>
                        <button className="bg-indigo-400 p-1  rounded mt-2 mb-5 text-center ml-11 ">Add Review</button>
                    </Link>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;