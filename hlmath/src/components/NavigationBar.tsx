import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="black" variant="dark" fixed="top" className="navbar px-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="custom-font">
          Higher Level Mathematics
        </Navbar.Brand>
        <div>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/calculus/i">
              Calculus I
            </Nav.Link>
            <Nav.Link as={Link} to="/calculus/ii">
              Calculus II
            </Nav.Link>
            <Nav.Link as={Link} to="/calculus/iii">
              Calculus III
            </Nav.Link>
            <Nav.Link as={Link} to="/linear-algebra">
              Linear Algebra
            </Nav.Link>
          </Nav>
        </div>

        <Nav>
          <NavDropdown title="About" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/about">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">
              Contact Us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
