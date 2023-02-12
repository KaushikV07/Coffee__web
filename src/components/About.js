import React from 'react'
import "./About.css"

function About() {
  return (
    <div className="about">
        <div className="container">
            <h1>ABOUT <span>US</span></h1>
            <div className="row">
                <div className="col">
                    <div className="left__img">
                        <img src="./images/about-img.jpeg" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="right__details">
                        <h2>what makes our coffee special?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, velit provident. Rerum magni soluta, perspiciatis deserunt beatae veritatis exercitationem quo accusamus dignissimos explicabo, nemo nihil itaque cupiditate quae animi dolor.</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex id itaque totam qui maxime, hic ipsa quae nobis iure accusamus numquam inventore quas autem magnam eveniet animi repudiandae placeat deserunt.</p>

                    <button>Learn More</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About