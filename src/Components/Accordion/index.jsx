/** @format */

import Accordion from "react-bootstrap/Accordion";
function AccordionContainer() {
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>My Hobbies</Accordion.Header>
        <Accordion.Body>
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>My Qualification</Accordion.Header>
        <Accordion.Body>
          <strong> This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>My Dreams</Accordion.Header>
        <Accordion.Body>
          <strong> This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionContainer;
