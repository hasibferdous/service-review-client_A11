import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Reviews = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        
        const email = user?.email || 'unregistered';
        const item = form.item.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            item,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('https://service-review-server-theta.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <form onSubmit={handleReviews} className='m-11 p-11 bg-slate-300'>
                <h2 className="text-4xl text-center mb-8">Add Your Reviews</h2>
             
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered mb-3 p-3" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered mb-3 p-3" />
                    <input name="item" type="text" placeholder="Reviewed Food Name" className="input input-ghost w-full  input-bordered mb-3 p-3" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered mb-3 p-3" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mb-3 mt-3 p-3" placeholder="Your Reviews" required></textarea>

                <input className='bg-indigo-300 rounded p-3' type="submit" value="Submit your review" />
            </form>
        </div>
    );
};

export default Reviews;