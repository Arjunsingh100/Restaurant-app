import React from 'react';
import {blog} from '../../../data';

const Blog = () => {
  return (
    <>
      <section className='blog' id='blog'>
         <div className='blog-heading'><h1>our <span>blog</span></h1></div>
         <div className='blog-content'>
            {
                blog.map((item,index)=>(
                    <div className='blog-box' key={index}>
                        <div className='blog-image'><img src={item.img}></img></div>
                        <div className='blog-box-content'>
                            <h1>tasty and refreshing spices</h1>
                            <h2>by admin/ 21st may, 2021</h2>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
                            <button>read more</button>
                        </div>
                    </div>
                ))
            }
         </div>
      </section>
    </>
  )
}

export default Blog
