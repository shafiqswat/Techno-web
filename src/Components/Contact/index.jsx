/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../Heading";
import FormContainer from "../Form";

function Contact() {
  return (
    <Container>
      <Heading
        txt='Feel Free'
        spn='To Connect'
      />
      <div className='row my-5'>
        <FormContainer />
        <div class='col-sm-12 col-md-6 col-lg-6 m-auto text-end p-4'>
          <img
            src='./images/s6.jpg'
            class='img-fluid img-thumbnail p-2'
          />
        </div>
      </div>
    </Container>
  );
}

export default Contact;
