/** @format */

import React from "react";
import Btn from "../Btn";

function Development({ icon, title, description, style }) {
  return (
    <div
      className='col-sm-12 col-md-4 col-lg-4 my-5'
      data-aos='zoom-in-up '
      data-aos-offset='200'>
      <div className={`${style} card`}>
        <div className='card-body'>
          {icon && <i className={`${icon} p-2  mb-2 rounded`}></i>}
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <Btn text='Book Now!' />
        </div>
      </div>
    </div>
  );
}

export default Development;
