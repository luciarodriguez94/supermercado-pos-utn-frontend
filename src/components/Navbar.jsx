import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';

function NavbarPrincipal({ cantidadCarrito = 0 }) {
  return (
    <Navbar
      expand="lg"
      bg="success"
      variant="dark"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-4"
        >
          🛒 Punto Market
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-principal" />

        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" className="fw-semibold">
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categorias" className="fw-semibold">
              Categorías
            </Nav.Link>

            <Nav.Link as={NavLink} to="/productos" className="fw-semibold">
              Productos
            </Nav.Link>

            <Nav.Link as={NavLink} to="/registro" className="fw-semibold">
              Registro
            </Nav.Link>

            <Nav.Link as={NavLink} to="/productos" className="fw-semibold">
              🛒 Carrito{' '}
              <Badge bg="warning" text="dark">
                {cantidadCarrito}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;