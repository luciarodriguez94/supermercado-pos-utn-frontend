import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
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
   
{
  nombre: 'Panadería',
  imagen: '/categoria-panaderia.png',
},
{
  nombre: 'Limpieza',
  imagen: '/categoria-limpieza.png',
},

  ];

  return (
    <section id="categorias" className="py-5 bg-light">
      <Container>
        <div className="text-center py-4">
          <Badge
            bg="success"
            className="fs-4 px-4 py-3 mb-3"
          >
            Explorá nuestros productos
          </Badge>

          <p className="fs-5 text-dark mb-4">
            Tus compras online más simples
          </p>
        </div>

        <Row className="g-4">
          {categorias.map((categoria) => (
            <Col key={categoria.nombre} xs={12} sm={6} lg={4}>
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