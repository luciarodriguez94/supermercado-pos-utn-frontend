import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriaCard from './CategoriaCard';

function Categorias() {
  const categorias = [
    {
      nombre: 'Almacén',
      imagen: '/almacen.jpg',
    },
    {
      nombre: 'Lácteos',
      imagen: '/lacteos.jpg',
    },
    {
      nombre: 'Frutas y verduras',
      imagen: '/frutas-y-verduras.jpg',
    },
    {
      nombre: 'Bebidas',
      imagen: '/bebidas.jpg',
    },
  ];

  return (
    <section id="categorias" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Categorías</h2>

        <Row>
          {categorias.map((categoria) => (
            <Col md={3} sm={6} xs={12} key={categoria.nombre} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={categoria.imagen}
                  alt={categoria.nombre}
                />

                <Card.Body>
                  <Card.Title className="text-center">
                    {categoria.nombre}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categorias;