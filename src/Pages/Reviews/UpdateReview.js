import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { AuthContextt } from '../../Shared/ContextApi/AuthContext';

const UpdateReview = () => {
    const{user} = useContext(AuthContextt)
    const {id} = useParams();
    const[data,setData]= useState({})
    useEffect(()=>{
        fetch(``)
    },[id])
    const addingReview = e =>{
        e.preventDefault()
        const form = e.target;
        const updateInfo={
            message: e.target.message.value,
        }
        fetch(`http://localhost:5000/update/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body : JSON.stringify(updateInfo)
        }).then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='my-5'>
            <Container className='my-5'>
            {
                    user ? <>
                        <Row>
                            <Col md="6">
                                <form onSubmit={addingReview}>
                                    
                                    <textarea className='w-100 my-2' placeholder='ratting' name="message" rows="10" cols="30">

                                    </textarea><br></br>
                                    <Button variant="danger" className='submit-btn' type="submit">
                                        Submit
                                    </Button>
                                </form>
                            </Col>
                            <Col></Col>
                        </Row>
                    </> : <Link className='link' to="/login"><Button className='my-5 btn btn-warning'>Please login to add review</Button></Link>
                }
            </Container>
        </div>
    );
};

export default UpdateReview;