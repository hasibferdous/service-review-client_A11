import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import ReviewRow from './ReviewRow';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://service-review-server-theta.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`https://service-review-server-theta.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }
    return (
        <div className='m-11 p-11 bg-slate-300'>
            <h2 className="text-5xl">Number of Reviews: {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>

                    </thead>
                    <tbody>
                        {
                            orders.map(order => <ReviewRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                              
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default  MyReviews;