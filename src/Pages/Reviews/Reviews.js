import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import './Review.css'

const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const[Review,setReview] =useState([]);
      useEffect(()=>{
        fetch(`https://assignment-11-server-sigma.vercel.app/customerReview`)
        .then(res => res.json())
        .then(data => {
          setReview(data)
          console.log(data)
        })
      },[])
    return (
        <Container>
          <h2 className='text-center text-danger py-4'>Patient Review</h2>
            <Slider {...settings}>
          {
            Review?.map(u => <div className='review text-center justify-center'>
              <h3 className='py-3 text-danger'>{u?.name}</h3>
              <p>{u?.message}</p>
              <p>service name : {u?.serviceName}</p>
            </div>)
          }
        </Slider>
        </Container>
    );
};

export default Reviews;