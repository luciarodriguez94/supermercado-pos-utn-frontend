import Card from 'react-bootstrap/Card';

function CategoriaCard({ nombre, imagen }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imagen}
        alt={nombre}
      />

      <Card.Body>
        <Card.Title className="text-center">
          {nombre}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoriaCard;