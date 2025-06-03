import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function CustomNavbar({ onSelect }) {
  return (
    <>
    <div>
        <Navbar expand="lg" className="bg-body-tertiary, navbar-custom">
          <Container>
            <Navbar.Brand className="navvier">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => onSelect("chi_sono")}>
                  Chi sono
                </Nav.Link>
                <NavDropdown title="Esperienze" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => onSelect("esperienza1")}>
                    Esperienza 1
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onSelect("esperienza2")}>
                    Esperienza 2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Progetti" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => onSelect("progetto1")}>
                    Progetto 1
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onSelect("progetto2")}>
                    Progetto 2
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
