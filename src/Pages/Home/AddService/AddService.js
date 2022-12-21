import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
//import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const AddService = () => {
    const[loading,setLoading] = useState(true)


    const submithandler = e =>{
      
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const _id = form.id.value;
        const description = form.description.value;

        const service = {
          title,
          img,
          price,
          _id,
          description
        }
       
        fetch(`https://service-review-server-theta.vercel.app/services`,{
          method : 'POST',
          headers :{
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify(service)
          
        }).then(res => res.json())
        .then(data =>{
          form.reset()
          alert('Add service  done')
          console.log(data)
        })
        
     
    }

    return (
        <div>
            <form onSubmit={submithandler} className='m-11 p-11 bg-slate-300'>
                <h2 className="text-4xl text-center mb-8">Add Food Items</h2>
             
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {/* <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bserviceed mb-3 p-3" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bserviceed mb-3 p-3" /> */}
                    <input name="title" type="text" placeholder="title" className="input input-ghost w-full  input-bserviceed mb-3 p-3" required />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bserviceed mb-3 p-3" required />
                    <input name="img" type="text" placeholder="photoURL" className="input input-ghost w-full  input-bserviceed mb-3 p-3"/>
                    {/* <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bserviceed mb-3 p-3" readOnly /> */}
                </div>
                <textarea name="description" className="textarea textarea-bserviceed h-24 w-full mb-3 mt-3 p-3" placeholder="Description" required></textarea>

                <input className='bg-indigo-300 rounded p-3' type="submit" value="Submit your review" />
            </form>
        </div>
    );
};

export default AddService;