
import { Row, Col, Button, ListGroup } from 'react-bootstrap';

const formatearPrecio = (valor) =>
  `$${Number(valor).toLocaleString('es-AR')}`;

function CarritoItem({ item, onCambiarCantidad, onQuitar }) {
  const subtotal = Number(item.precio) * item.cantidad;

  return (
    <ListGroup.Item className="py-3">
      <Row className="align-items-center g-3">
        <Col xs={4} md={2}>
          <img
            src={item.imagen}
            alt={item.nombre}
            className="img-fluid rounded w-100 carrito-item-imagen"
          />
        </Col>

        <Col xs={8} md={4}>
          <p className="fw-semibold mb-1">{item.nombre}</p>
          <p className="text-muted small mb-0">
            {formatearPrecio(item.precio)} c/u
          </p>
        </Col>

        <Col xs={7} md={3} className="d-flex align-items-center gap-2">
          <Button
            variant="outline-success"
            size="sm"
            aria-label={`Restar una unidad de ${item.nombre}`}
            disabled={item.cantidad <= 1}
            onClick={() =>
              onCambiarCantidad(item.id, item.cantidad - 1)
            }
          >
            −
          </Button>

          <span className="fw-bold px-2" aria-live="polite">
            {item.cantidad}
          </span>

          <Button
            variant="outline-success"
            size="sm"
            aria-label={`Sumar una unidad de ${item.nombre}`}
            onClick={() =>
              onCambiarCantidad(item.id, item.cantidad + 1)
            }
          >
            +
          </Button>
        </Col>

        <Col xs={5} md={3} className="text-end">
          <p className="fw-bold text-success mb-2">
            {formatearPrecio(subtotal)}
          </p>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onQuitar(item)}
          >
            Quitar
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default CarritoItem;
