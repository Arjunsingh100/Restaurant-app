import React from 'react'
import aboutImg from '../images/coffee.png'
const About = () => {
    return (
        <div>
            <section className='about' id='about'>
                <div className='about-heading'><h1>About <span>us</span></h1></div>
                <div className='about-content'>
                    <div className='image-container'></div>
                    <div className='content'>
                        <h1>What Makes Our Food Special?</h1>
                        <p>
                            What Makes Our Food Special?
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
                          <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>  
                          <div className='learn button'><button>Learn more</button></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
