import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ref = React.createRef();
const ServiceDetails = () => {

const ref = React.createRef();

const services = useLoaderData();
const {_id, title, instructor, price, details, image_url, rating, total_enrolled} = services;
    
return (
        <div>
              <div className='Container' style={{ width: '22rem', height: '70rem'  
      }}>
      <div 
    
      className='p-4 d-flex justify-content-end' > 
      <div>
          <div className='d-flex justify-content-between align-items-center'>


          </div>
          <div>
            
            <div variant="top" src={image_url} />
            <div ref={ref}>
            <div className='text-center'><h2>{title}</h2></div>
            <div className='d-flex mt-3 text-center'>
                  <div
                      roundedCircle
                      className='me-1 mt-3 text-center'
                      src={instructor.img}
                      style={{height: '30px'}}
                  ></div>
                  <div>
                      <p className='mb-0 mt-2 text-center'><strong>Course Instructor: {instructor.name}</strong></p>
                      <p className='text-center'>Course Published Date: {instructor.published_date}</p>
                  </div>
              </div>
            <div>
              {
                 
                 <p className='text-center'>{details}</p>
                  
              }
               <h3 className='text-center'>Course Price: {price} $</h3>
              </div>
              </div>
          </div>
          <div className="d-flex justify-content-between">
              <div>
                 
                  {/* <FaStar className='text-warning me-2'></FaStar> */}
                  <span>Rating: {rating?.number}</span>
              </div>
              <div>
                  <small>Total enrolled:</small>
                  <span>{total_enrolled}</span>
              </div>
              
              <button variant="primary">Send Feedback</button>
          </div>
          </div> 

  </div>
</div>
        </div>
    );
};

export default ServiceDetails;