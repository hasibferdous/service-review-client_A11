import React, { useEffect, useState } from 'react';

const ReviewRow = ({ order, handleDelete }) => {
    const { _id, serviceName, phone, customer, price, service, description } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://service-review-server-theta.vercel.app/reviews/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='bg-red-100 p-3'>Delete Review</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{description}</td>
 
        </tr>
    );
};

export default ReviewRow;