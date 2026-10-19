
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const promociones = [
  {
    nombre: 'Pan lactal',
    precio: '$2.300',
    imagen: '/oferta-pan-lactal-punto-market.png',
  },
  {
    nombre: 'Manzanas rojas',
    precio: '$2.800 por kg',
    imagen: '/oferta-manzanas-punto-market.png',
  },
  {
    nombre: 'Yogures',
    precio: '$990',
    imagen: '/oferta-yogur-punto-market.png',
  },
];

function Promociones() {
  return (
    <section id="promociones" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <Badge
            bg="success"
            className="rounded-pill px-4 py-2 mb-3"
          >
            PUNTO MARKET
          </Badge>

          <h2 className="fw-bold text-success">
            ¡Ofertas imperdibles!
          </h2>

          <p className="text-secondary fs-5">
            Descubrí nuestras promociones destacadas.
          </p>
        </div>

        <Row className="g-4">
          {promociones.map((promocion) => (
            <Col key={promocion.nombre} xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src={promocion.imagen}
                  alt={`Oferta de ${promocion.nombre}`}
                  className="w-100 promocion-imagen"
                />

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">
                    {promocion.nombre}
                  </Card.Title>

                  <p className="fs-4 fw-bold text-danger mb-0">
                    {promocion.precio}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Promociones;
