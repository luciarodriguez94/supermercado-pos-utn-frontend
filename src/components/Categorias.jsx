import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriaCard from './CategoriaCard';

function Categorias() {
  const categorias = [
    {
      nombre: 'Almacén',
      imagen: '/categoria-almacen.jpg',
    },
    {
      nombre: 'Lácteos',
      imagen: '/categoria-lacteos.jpg',
    },
    {
      nombre: 'Frutas y verduras',
      imagen: '/categoria-frutas.jpg',
    },
    {
      nombre: 'Bebidas',
      imagen: '/categoria-bebidas.jpg',
    },
  ];

  return (
    <section id="categorias" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Explorá nuestros productos
          </span>

          <h2 className="fw-bold">Categorías</h2>

          <p className="text-secondary mb-0">
            Encontrá todo lo que necesitás para tu compra.
          </p>
        </div>

        <Row className="g-4">
          {categorias.map((categoria) => (
            <Col key={categoria.nombre} xs={12} sm={6} lg={3}>
              <CategoriaCard
                nombre={categoria.nombre}
                imagen={categoria.imagen}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categorias;