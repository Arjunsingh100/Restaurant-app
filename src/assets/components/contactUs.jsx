import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section className='contactus' id='contact'>
        <div className='contactus-heading'><h1><span>Contact</span>  Us</h1></div>
        <div className='contact-content'>
          <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.368749885083!2d77.37000857535793!3d28.618708375672263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a8e7ee5d0d%3A0xe97d372abd8af292!2sSector%2062%20Noida%20Metro%20station!5e0!3m2!1sen!2sin!4v1696389757050!5m2!1sen!2sin"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='contact-form'>
            <div className='form-heading'><h1>get in touch</h1></div>
            <form>
              <div>
                <input type='text' placeholder='Name'></input>
              </div>
              <div>
                <input type='email' placeholder='Email'></input>
              </div>
              <div>
                <input type='phone' placeholder='Phone'></input>
              </div>
              <button type='submit'>contact now</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
