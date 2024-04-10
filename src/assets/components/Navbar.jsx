import React from 'react'
import { useRef } from 'react';
import logo from '../../assets/images/nlogo.png';
import { cart } from '../../../data';
const Navbar = () => {
    const navbarRef = useRef();
    const cartHandlerRef = useRef();
    const searchHandlerRef = useRef();

    const searchHandler = () => {
        searchHandlerRef.current.classList.toggle('searchbarActive');
        cartHandlerRef.current.classList.remove('cartSectionActive');
        navbarRef.current.classList.remove('active');
    }
    const cartHandler = () => {
        cartHandlerRef.current.classList.toggle('cartSectionActive');
        navbarRef.current.classList.remove('active');
        searchHandlerRef.current.classList.remove('searchbarActive');
    };
    const navHandler = () => {
        navbarRef.current.classList.toggle('active');
        cartHandlerRef.current.classList.remove('cartSectionActive');
        searchHandlerRef.current.classList.remove('searchbarActive');
    };
    return (
        <div>
            <header className='header'>
                <div className='logo'><img src={logo}></img></div>
                <nav className='navbar'>
                    <a href='#home'>home<div className='onHover'></div></a>
                    <a href='#about'>about<div className='onHover'></div></a>
                    <a href='#menu'>menu<div className='onHover'></div></a>
                    <a href='#product'>product<div className='onHover'></div></a>
                    <a href='#reviews'>reviews<div className='onHover'></div></a>
                    <a href='#contact'>contact<div className='onHover'></div></a>
                    <a href='#blog'>blog<div className='onHover'></div></a>
                </nav>
                <div className='icons'>
                    <div className='fas fa-search' onClick={searchHandler}></div>
                    <div className='fas fa-cart-shopping' onClick={cartHandler}></div>
                    <div className='fas fa-bars' onClick={navHandler}>
                    </div>
                </div>
                <div className='navigations' ref={navbarRef}>
                    <a href='#home'>home</a>
                    <a href='#about'>about</a>
                    <a href='#menu'>menu</a>
                    <a href='#product'>product</a>
                    <a href='#reviews'>reviews</a>
                    <a href='#contact'>contact</a>
                    <a href='#blog'>blog</a>
                </div>
                <div className='searchbar' ref={searchHandlerRef}>
                    <input id='search' placeholder='Search here...'></input>
                    <label htmlFor='search' className='fas fa-search'></label>
                </div>
                <div className='cartSection' ref={cartHandlerRef} >
                    {cart.map((item, index) => (
                        <div className='cartItem' key={index}>
                            <img src={item.img}></img>
                            <div>
                                <h3>cart1</h3>
                                <div className='price'>3.5$</div>
                            </div>
                            <span className='fas fa-times'></span>
                        </div>
                    ))}
                    <button>Checkout Now</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
