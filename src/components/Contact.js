import React from 'react'
import "./Contact.css"

function Contact() {
  return (
   <div className="contact">
    <div className="container">
        <h1>CONTACT <span>US</span></h1>
            <div className="contact__row">
                <div className="contact__col">
                    <img src="./images/maps.png" alt="maps" className='maps' />
                </div>
                <div className="contact__col">
                    <div className="contact__form">
                        <h2>GET IN TOUCH</h2>
                        <div className="input">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="cel" placeholder='Mobile Number' />
                        </div>
                        <button>Contact Now</button>
                    </div>
                </div>
            </div>
    </div>
   </div>
  )
}

export default Contact