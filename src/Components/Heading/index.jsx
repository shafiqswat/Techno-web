/** @format */

import React from "react";

function Heading({ txt, spn }) {
  return (
    <div>
      <h1
        className='text-center'
        data-aos='fade-up'
        data-aos-offset='200'>
        {txt} <span class='text-primary'>{spn}</span>
      </h1>
      <hr class='w-25 m-auto' />
    </div>
  );
}

export default Heading;
