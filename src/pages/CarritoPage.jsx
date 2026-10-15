import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';

import CarritoItem from '../components/CarritoItem';
import useDocumentTitle from '../hooks/useDocumentTitle';

const formatearPrecio = (valor) => `$${Number(valor).toLocaleString('es-AR')}`;
const textoUnidades = (n) => `${n} ${n === 1 ? 'unidad' : 'unidades'}`;

function CarritoPage({
  carrito,
  totalUnidades,
  totalPrecio,
  onCambiarCantidad,
  onQuitar,
  onVaciar,
}) {
  useDocumentTitle('Mi carrito');

  const confirmarQuitar = async (item) => {
    const { isConfirmed } = await Swal.fire({
      icon: 'warning',
      title: '¿Quitar producto?',
      text: `Se eliminará "${item.nombre}" del carrito.`,
      showCancelButton: true,
      confirmButtonText: 'Sí, quitar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
    });

    if (isConfirmed) onQuitar(item.id);
  };

  const confirmarVaciar = async () => {
    const { isConfirmed } = await Swal.fire({
      icon: 'warning',
      title: '¿Vaciar el carrito?',
      text: 'Se eliminarán todos los productos.',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
    });

    if (isConfirmed) onVaciar();
  };

  const finalizarCompra = async () => {
    const { isConfirmed } = await Swal.fire({
      icon: 'question',
      title: '¿Confirmar compra?',
      text: `${textoUnidades(totalUnidades)} por ${formatearPrecio(totalPrecio)}.`,
      showCancelButton: true,
      confirmButtonText: 'Confirmar compra',
      cancelButtonText: 'Seguir viendo',
      confirmButtonColor: '#198754',
    });

    if (!isConfirmed) return;

    onVaciar();
    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada!',
      text: 'Gracias por elegir Punto Market.',
      confirmButtonColor: '#198754',
    });
  };

  return (
    <Container className="py-4">
      <h1 className="fw-bold text-success mb-4">Mi carrito</h1>

      {carrito.length === 0 ? (
        <Card className="text-center shadow-sm">
          <Card.Body className="py-5">
            <p className="fs-5 mb-3">Tu carrito está vacío.</p>
            <Button as={Link} to="/productos" variant="success">
              Ver productos
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Row className="g-4">
          <Col lg={8}>
            <Card className="shadow-sm">
              <ListGroup variant="flush">
                {carrito.map((item) => (
                  <CarritoItem
                    key={item.id}
                    item={item}
                    onCambiarCantidad={onCambiarCantidad}
                    onQuitar={confirmarQuitar}
                  />
                ))}
              </ListGroup>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5 fw-bold mb-3">Resumen de compra</h2>

                <p className="d-flex justify-content-between mb-2">
                  <span>Unidades</span>
                  <span className="fw-semibold">{totalUnidades}</span>
                </p>
                <p className="d-flex justify-content-between fs-5 fw-bold text-success">
                  <span>Total</span>
                  <span>{formatearPrecio(totalPrecio)}</span>
                </p>

                <div className="d-grid gap-2 mt-3">
                  <Button variant="success" size="lg" onClick={finalizarCompra}>
                    Finalizar compra
                  </Button>
                  <Button variant="outline-danger" onClick={confirmarVaciar}>
                    Vaciar carrito
                  </Button>
                  <Button as={Link} to="/productos" variant="link">
                    Seguir comprando
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CarritoPage;