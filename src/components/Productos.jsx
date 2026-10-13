
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const productos = [
  {
    id: 1,
    nombre: 'Leche entera 1L',
    categoria: 'Lácteos',
    precio: 1450,
    imagen: '/producto-leche.jpg',
  },
  {
    id: 2,
    nombre: 'Pan lactal',
    categoria: 'Panadería',
    precio: 2300,
    imagen: '/producto-pan.jpg',
  },
  {
    id: 3,
    nombre: 'Manzanas rojas (kg)',
    categoria: 'Frutas y verduras',
    precio: 2800,
    imagen: '/producto-manzanas.jpg',
  },
  {
    id: 4,
    nombre: 'Arroz largo fino 500 g',
    categoria: 'Almacén',
    precio: 1900,
    imagen: '/producto-arroz.jpg',
  },
  {
    id: 5,
    nombre: 'Aceite de girasol 900 ml',
    categoria: 'Almacén',
    precio: 3200,
    imagen: '/producto-aceite.jpg',
  },
  {
    id: 6,
    nombre: 'Gaseosa cola 2.25 L',
    categoria: 'Bebidas',
    precio: 2600,
    imagen: '/producto-gaseosa.jpg',
  },
  {
    id: 7,
    nombre: 'Queso cremoso (kg)',
    categoria: 'Lácteos',
    precio: 7800,
    imagen: '/producto-queso.jpg',
  },
  {
    id: 8,
    nombre: 'Detergente 750 ml',
    categoria: 'Limpieza',
    precio: 2100,
    imagen: '/producto-detergente.jpg',
  },
];

function Productos({ onAgregar = () => {}, categoriaSeleccionada = '' }) {
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      )
    : productos;

  return (
    <section className="py-5 bg-light">
      <Container id="productos">
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              backgroundColor: '#198754',
              color: '#ffffff',
              fontSize: '1rem',
            }}
          >
            PUNTO MARKET
          </span>

          <h2
            className="fw-bold mb-3"
            style={{
              color: '#146c43',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Nuestros productos
          </h2>

          <div
            className="mx-auto mb-3"
            style={{
              width: '90px',
              height: '5px',
              backgroundColor: '#ffc107',
              borderRadius: '10px',
            }}
          />

          <p className="text-secondary fs-5 mb-0">
            Encontrá todo lo que necesitás para tu compra
          </p>
        </div>

        <Row xs={1} sm={2} lg={4} className="g-4">
          {productosFiltrados.map((producto) => (
            <Col key={producto.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={producto.imagen}
                  alt={producto.nombre}
                />
                <Card.Body className="d-flex flex-column">
                  <Badge bg="success" className="align-self-start mb-2">
                    {producto.categoria}
                  </Badge>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text className="fs-5 fw-bold text-success mt-auto">
                    ${producto.precio.toLocaleString('es-AR')}
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => onAgregar(producto)}
                  >
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Productos;
