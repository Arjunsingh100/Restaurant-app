import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
      <div className='social-icons'>
        <a href='#' className='fas fa-brands fa-facebook-f'></a>
        <a href='#' className='fas fa-brands fa-twitter'></a>
        <a href='#' className='fas fa-brands fa-instagram'></a>
        <a href='#' className='fas fa-brands fa-linkedin'></a>
        <a href='#' className='fas fa-brands fa-pinterest'></a>
      </div>
      <div className='links'>
        <a href='home'>home</a>
        <a href='about'>about</a>
        <a href='menu'>menu</a>
        <a href='products'>products</a>
        <a href='review'>review</a>
        <a href='contact'>contact</a>
        <a href='blogs'>blogs</a>
      </div>
      <div className='bottom'>Created By <span>Coding Circulate</span> | All Rights Reserved</div>
      </footer>
    </>
  )
}

export default Footer
