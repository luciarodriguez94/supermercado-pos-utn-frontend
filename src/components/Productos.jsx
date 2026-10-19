
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button, Badge, Spinner } from 'react-bootstrap';

const API_URL = import.meta.env.VITE_API_URL;
console.log("URL de la API:", API_URL);

const productosLocales = [
  { id: 1, nombre: 'Leche entera 1L', categoria: 'Lácteos', precio: 1450, imagen: '/producto-leche.jpg' },
  { id: 2, nombre: 'Pan lactal', categoria: 'Panadería', precio: 2300, imagen: '/producto-pan.jpg' },
  { id: 3, nombre: 'Manzanas rojas (kg)', categoria: 'Frutas y verduras', precio: 2800, imagen: '/producto-manzanas.jpg' },
  { id: 4, nombre: 'Arroz largo fino 500 g', categoria: 'Almacén', precio: 1900, imagen: '/producto-arroz.jpg' },
  { id: 5, nombre: 'Aceite de girasol 900 ml', categoria: 'Almacén', precio: 3200, imagen: '/producto-aceite.jpg' },
  { id: 6, nombre: 'Gaseosa cola 2.25 L', categoria: 'Bebidas', precio: 2600, imagen: '/producto-gaseosa.jpg' },
  { id: 7, nombre: 'Queso cremoso (kg)', categoria: 'Lácteos', precio: 7800, imagen: '/producto-queso.jpg' },
  { id: 8, nombre: 'Detergente 750 ml', categoria: 'Limpieza', precio: 2100, imagen: '/producto-detergente.jpg' },
];

function Productos({ onAgregar = () => {}, categoriaSeleccionada = '' }) {
  const [productosApi, setProductosApi] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(API_URL);
        setProductosApi(
  Array.isArray(response.data.products)
    ? response.data.products
    : []
);
      } catch (error) {
        console.error('Error al obtener productos:', error);

        Swal.fire({
          icon: 'error',
          title: 'No se pudieron cargar los productos',
          text: 'Ocurrió un problema al consultar la API. Podés seguir viendo los productos del supermercado.',
          confirmButtonText: 'Entendido',
        });
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  const productosLocalesFiltrados = categoriaSeleccionada
    ? productosLocales.filter(
        (producto) => producto.categoria === categoriaSeleccionada,
      )
    : productosLocales;

  const productosMostrados = categoriaSeleccionada
    ? productosLocalesFiltrados
    : [
        ...productosLocales,
        ...productosApi.map((producto) => ({
          id: `api-${producto.id}`,
          nombre: producto.title,
          categoria: 'API - Almacén',
          precio: producto.price,
          imagen: producto.thumbnail,
        })),
      ];

  return (
    <section className="py-5 bg-light">
      <Container id="productos">
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{ backgroundColor: '#198754', color: '#ffffff', fontSize: '1rem' }}
          >
            PUNTO MARKET
          </span>

          <h2
            className="fw-bold mb-3"
            style={{ color: '#146c43', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Nuestros productos
          </h2>

          <div
            className="mx-auto mb-3"
            style={{ width: '90px', height: '5px', backgroundColor: '#ffc107', borderRadius: '10px' }}
          />

          <p className="text-secondary fs-5 mb-0">
            Encontrá todo lo que necesitás para tu compra
          </p>
        </div>

        {cargando && (
          <div className="text-center mb-4" role="status">
            <Spinner animation="border" variant="success" />
            <p className="mt-2">Cargando productos de la API...</p>
          </div>
        )}

        <Row xs={1} sm={2} lg={4} className="g-4">
          {productosMostrados.map((producto) => (
            <Col key={producto.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={producto.imagen}
                  alt={producto.nombre}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Badge bg="success" className="align-self-start mb-2">
                    {producto.categoria}
                  </Badge>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text className="fs-5 fw-bold text-success mt-auto">
                    ${Number(producto.precio).toLocaleString('es-AR')}
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
