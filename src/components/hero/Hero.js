import React from 'react'
import car from '../../static/assests/hero/directions_car_24px.png'
import reload from '../../static/assests/hero/refresh_24px.png'
import money from '../../static/assests/hero/monetization_on_24px.png'
import heroimage from '../../static/assests/hero/heroimage.png'
import "../../styles/hero.css"
function Hero() {
  return (
    <>
        <div className="hero-layout">
            <div className="hero-text">
                <h1>Financing  <br /><span>made simple</span></h1>
                <div className="service d-flex">
                    <div className="services-icon">
                        <img src={car} alt="" srcset="" />
                        <p>Benefit  example</p>
                    </div>
                    <div className="services-icon">
                        <img src={reload} alt="" srcset="" />
                        <p>Benefit  example</p>
                    </div>
                    <div className="services-icon">
                        <img src={money} alt="" srcset="" />
                        <p>Benefit  example</p>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src={heroimage} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero