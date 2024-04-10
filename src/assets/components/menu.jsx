import React from 'react';
import { menu } from '../../../data';
console.log(menu);

const Menu = () => {
    return (
        <>
            <section className='menu' id='menu'>
                <div className='menu-heading'><h1>Our <span>menu</span></h1></div>
                <div className='menu-content'>
                    {menu.map((item, index) => (
                        <div className='box' key={index}>
                            <img src={item.img}></img>
                            <h3>Healthy and Tasty</h3>
                            <div className='price'>$15.99 <span>20.99</span></div>
                            <button className='add-cart-btn'>add to cart</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Menu
