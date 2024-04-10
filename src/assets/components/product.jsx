import React from 'react'
import { products } from '../../../data';
const Product = () => {
    return (
        <>
            <section className='products' id='product'>
                <div className='products-heading'><h1>Our<span> products</span></h1></div>
                <div className='products-container'>
                    {products.map((ele, index) => (
                        <div className='product-box' key={index}>
                            <div className='product-icons'>
                                <div className='fas fa-cart-shopping'></div>
                                <div className='fas fa-heart'></div>
                                <div className='fas fa-eye'></div>
                            </div>
                            <img src={ele.img}></img>
                            <div className='pro-content'>
                                <h1>fressh coffee</h1>
                                <div className='stars'>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star-half-alt'></i>
                                </div>
                                <div className='product-price'>$15.99 <span>$20.99</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Product
