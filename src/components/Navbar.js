import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home "><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FznlRHL2D98e68LTkYtNNMzp9vqTCu1Sfw&usqp=CAU"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto light ">
            <Nav.Link href="#home">HomePage</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our deals</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Main Menu</NavDropdown.Item>
    
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;