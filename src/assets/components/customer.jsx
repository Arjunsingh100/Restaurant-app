import React from 'react';
import { customer } from '../../../data';

const Customer = () => {
    return (
        <>
            <section className='customers' id='reviews'>
                <div className='customers-heading'><h1>customer's <span>review</span></h1></div>
                <div className='customer-content'>
                    {customer.map((ele, index) => (
                        <div className='customer-box' key={index}>
                            <img src={ele.img1}></img>
                            <div className='para-content'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.</div>
                            <div className='cus-content'>
                                <img src={ele.img2}></img>
                                <h1>JOHN DOE</h1>
                                <div className='stars'>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star-half-alt'></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Customer
