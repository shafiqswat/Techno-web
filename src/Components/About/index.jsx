/** @format */
import React from "react";
import Heading from "../Heading";
import AccordionContainer from "../Accordion";
import Btn from "../Btn";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <div class='my-5'>
        <Heading
          txt='About'
          spn='me'
        />
      </div>
      <div className='row'>
        <div
          className='col-sm-12 col-md-6 col-lg-6'
          data-aos='zoom-in'
          data-aos-offset='200'>
          <h1>
            What do you <span className='text-primary'> want to know?</span>
          </h1>
          <p>
            Use our powerful mobile-first flexbox grid to build layouts of all
            shapes and sizes thanks to twelve column system, six default
            responsive tiers, Sass variables and mixins, and dozensof
            pre-defined classes
          </p>
          <Btn
            text='More about me'
            style='btn btn-light mb-5'
          />
          <AccordionContainer />
        </div>
        <div
          className='col-sm-12 col-md-6 col-lg-6 m-auto text-end'
          data-aos='fade-right'
          data-aos-offset='200'>
          <img
            src='/Images/s4.jpg'
            className='img-fluid img-thumbnail'
          />
        </div>
      </div>
    </Container>
  );
}

export default About;
