
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Envios() {
  const servicios = [
    {
      icono: '🚚',
      titulo: 'Envíos a domicilio',
      descripcion:
        'Recibí tus compras cómodamente en tu casa.',
    },
    {
      icono: '🛒',
      titulo: 'Compra fácil',
      descripcion:
        'Explorá nuestros productos y prepará tu compra online.',
    },
    {
      icono: '📦',
      titulo: 'Tu compra preparada',
      descripcion:
        'Organizamos tus productos para que tu experiencia sea más cómoda.',
    },
  ];

  return (
    <section id="envios" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <span className="badge bg-success rounded-pill px-3 py-2 mb-3">
            PUNTO MARKET
          </span>

          <h2 className="fw-bold text-success">
            Tus compras, más cómodas
          </h2>

          <p className="text-secondary fs-5">
            Conocé nuestros servicios para tu compra.
          </p>
        </div>

        <Row className="g-4">
          {servicios.map((servicio) => (
            <Col key={servicio.titulo} xs={12} md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Body>
                  <div className="fs-1 mb-3" aria-hidden="true">
                    {servicio.icono}
                  </div>

                  <Card.Title className="fw-bold text-success">
                    {servicio.titulo}
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    {servicio.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Envios;
