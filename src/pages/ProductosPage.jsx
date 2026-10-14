import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Productos from '../components/Productos';

function ProductosPage({ onAgregar }) {
  const [searchParams] = useSearchParams();
  const categoriaSeleccionada = searchParams.get('categoria') || '';

  return (
    <Container className="py-4">
      {categoriaSeleccionada && (
        <h1 className="text-center fw-bold mb-4 text-dark">
          Productos de {categoriaSeleccionada}
        </h1>
      )}

      <Productos
        onAgregar={onAgregar}
        categoriaSeleccionada={categoriaSeleccionada}
      />
    </Container>
  );
}

export default ProductosPage;

