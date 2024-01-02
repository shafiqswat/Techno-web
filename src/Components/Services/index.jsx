/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../Heading";
import Development from "../Development";

function Services() {
  return (
    <Container>
      <div className='mt-5'>
        <Heading
          txt='Our'
          spn='Services'
        />
        <div className='row '>
          <Development
            icon='fa-sharp fa-solid fa-users bg-primary p-2 text-white '
            title='Web Development'
            description='With Supporting text below as a natural lead-in to additional content'
          />
          <Development
            icon='fa-solid fa-code bg-white text-dark '
            title='App Development'
            description='With Supporting text below as a natural lead-in to additional content'
            style='bg-primary text-white'
          />
          <Development
            icon='fa-sharp fa-solid fa-users bg-primary text-white'
            title='Graphics Design'
            description='With Supporting text below as a natural lead-in to additional content'
          />
          <Development
            icon='fa-sharp fa-solid fa-users bg-primary text-white '
            title='Web Development'
            description='With Supporting text below as a natural lead-in to additional content'
          />
          <Development
            icon='fa-solid fa-code bg-white text-dark '
            title='App Development'
            description='With Supporting text below as a natural lead-in to additional content'
            style='bg-primary text-white'
          />
          <Development
            icon='fa-sharp fa-solid fa-users bg-primary text-white '
            title='Graphics Design'
            description='With Supporting text below as a natural lead-in to additional content'
          />
        </div>
      </div>
    </Container>
  );
}

export default Services;
