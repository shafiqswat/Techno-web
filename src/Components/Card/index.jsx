/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Btn from "../Btn";
// import Development from "../Development";

function Card({ name, developer, img }) {
  return (
    <div class='col-sm-12 col-md-4 col-lg-4 my-5'>
      <div
        class='card text-center'
        data-aos='zoom-in-down'
        data-aos-offset='200'>
        <div class='card-body'>
          <img
            src={img}
            class='card-img-top img-fluid rounded-circle border border-primary p-2'
          />
          <h5 class='card-title mt-4'>{name}</h5>
          <p class='card-text'>{developer}</p>
          <Btn text='Read More' />
        </div>
      </div>
    </div>
  );
}

export default Card;
