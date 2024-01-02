/** @format */

import React from "react";
import Heading from "../Heading";
import { Container } from "react-bootstrap";
import Card from "../Card";

function Team() {
  return (
    <div>
      <Heading
        txt='Our'
        spn='Team'
      />
      <Container>
        <div className='row '>
          <Card
            img={`images/s2.jpg`}
            name='Andrew'
            developer='Front-end Developer'
          />
          <Card
            img={`images/s4.jpg`}
            name="Keren D'souza"
            developer='App Developer'
          />
          <Card
            img={`images/s3.jpg`}
            name='Kristina'
            developer='Full stack Web Developer'
          />
        </div>
      </Container>
    </div>
  );
}

export default Team;
