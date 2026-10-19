
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CategoriaCard({ nombre, imagen }) {
  return (
    <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <Card.Img
        variant="top"
        src={imagen}
        alt={nombre}
        className="categoria-imagen w-100"
      />

      <Card.Body className="text-center p-4">
        <Card.Title className="fw-bold mb-3">
          {nombre}
        </Card.Title>

        <Button
          as={Link}
          to={`/productos?categoria=${encodeURIComponent(nombre)}`}
          variant="success"
          className="fw-semibold"
        >
          Ver productos
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CategoriaCard;
