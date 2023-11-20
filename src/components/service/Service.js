import React from "react";
import "../../styles/service.css"
import arrowApply from '../../static/assests/service/arrow_forward_24px.png'
function Service() {
  return (
    <>
      <div className="service-layout">
        <div className="inner-text">
          <div className="heading">
            <h6>
              We provide various vehicle financing options to meet your needs.{" "}
            </h6>
          </div>
          <div className="service-parah">
            <p>
              Whether you're purchasing your new ride directly from Wingfield or
              a private owner, or simply looking to refinance your current
              vehicle, Wingfield is always here to help. Our finance division is
              staffed by top financing experts that will guide you through every
              step of the process.
            </p>
          </div>
        </div>

        <div className="service-category">
          <div className="category-layout">
            <div className="category-text">
              I am buying a vehicle from Wingfield Motors
            </div>
            <div className="category-button">
            <button className="category-button-apply">Apply Now</button>
            <img src={arrowApply} alt="" srcset="" />
            </div>
          </div>
          <div className="category-layout">
            <div className="category-text">
              I am buying a vehicle from Wingfield Motors
            </div>
            <div className="category-button">
            <button className="category-button-apply">Apply Now</button>
            <img src={arrowApply} alt="" srcset="" />
            </div>
          </div>
          <div className="category-layout">
            <div className="category-text">
              I am buying a vehicle from Wingfield Motors
            </div>
            <div className="category-button">
            <button className="category-button-apply">Apply Now</button>
            <img src={arrowApply} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
