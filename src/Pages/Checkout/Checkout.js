import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title } = useLoaderData();
    return (
        <div>
            <h2 className="text-4xl">You are about to order: {title}</h2>
        </div>
    );
};

export default Checkout;