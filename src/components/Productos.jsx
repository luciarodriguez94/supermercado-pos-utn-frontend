import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const productos = [
  { id: 1, nombre: 'Leche entera 1L', categoria: 'Lácteos', precio: 1450, imagen: 'https://placehold.co/400x300/198754/ffffff?text=Leche' },
  { id: 2, nombre: 'Pan lactal', categoria: 'Panadería', precio: 2300, imagen: 'https://placehold.co/400x300/fd7e14/ffffff?text=Pan' },
  { id: 3, nombre: 'Manzanas rojas (kg)', categoria: 'Frutas', precio: 2800, imagen: 'https://placehold.co/400x300/dc3545/ffffff?text=Manzanas' },
  { id: 4, nombre: 'Arroz largo fino 1kg', categoria: 'Almacén', precio: 1900, imagen: 'https://placehold.co/400x300/6c757d/ffffff?text=Arroz' },
  { id: 5, nombre: 'Aceite de girasol 900ml', categoria: 'Almacén', precio: 3200, imagen: 'https://placehold.co/400x300/ffc107/000000?text=Aceite' },
  { id: 6, nombre: 'Gaseosa cola 2.25L', categoria: 'Bebidas', precio: 2600, imagen: 'https://placehold.co/400x300/212529/ffffff?text=Gaseosa' },
  { id: 7, nombre: 'Queso cremoso (kg)', categoria: 'Lácteos', precio: 7800, imagen: 'https://placehold.co/400x300/0dcaf0/000000?text=Queso' },
  { id: 8, nombre: 'Detergente 750ml', categoria: 'Limpieza', precio: 2100, imagen: 'https://placehold.co/400x300/0d6efd/ffffff?text=Detergente' },
];

function Productos({ onAgregar = () => {} }) {
  return (
    <Container id="productos" className="py-5">
      <h2 className="text-center mb-4 fw-bold">Nuestros productos</h2>

      <Row xs={1} sm={2} lg={4} className="g-4">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
              <Card.Body className="d-flex flex-column">
                <Badge bg="success" className="align-self-start mb-2">
                  {producto.categoria}
                </Badge>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text className="fs-5 fw-bold text-success mt-auto">
                  ${producto.precio.toLocaleString('es-AR')}
                </Card.Text>
                <Button variant="success" onClick={() => onAgregar(producto)}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;