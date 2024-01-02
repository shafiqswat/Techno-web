/** @format */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarContainer() {
  return (
    <Navbar
      expand='lg'
      className='navbar-light bg-white fixed-top px-4'>
      <Container fluid>
        <Navbar.Brand
          href='#home'
          className='fs-2 '>
          Techno-<span className='text-primary'>web</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto navbar-nav mb-2 mb-lg-0 fs-5 text-center'>
            <Nav.Link
              href='#home'
              className='text-primary'>
              Home
            </Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <NavDropdown
              title='Services'
              id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>SEO</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Web Design</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.3'>
                Graphics Design
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#about'>Our Team</Nav.Link>
            <Nav.Link href='#about'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
