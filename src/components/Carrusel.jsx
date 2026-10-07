import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Carrusel() {
  return (
    <Carousel>
    
      <Carousel.Item>
        <img
         className="d-block w-100"
style={{
  height: '500px',
  objectFit: 'cover',
}}
          src="/banner-inicio.png"
          alt="Punto Market - Todo lo que necesitás, en un solo lugar"
        />

        <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3">
          <Button
            variant="warning"
            href="/productos"
            className="fw-bold"
          >
            Ver productos
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

   
      <Carousel.Item>
        <img
        className="d-block w-100"
style={{
  height: '500px',
  objectFit: 'cover',
}} 
          src="/banner-ofertas.jpg"
          alt="Ofertas de la semana en Punto Market"
        />

        <Carousel.Caption className="text-start">
          <div className="bg-dark bg-opacity-75 rounded-3 p-4 d-inline-block">
            <h2 className="fw-bold">Ofertas de la semana</h2>

            <p className="fs-5 mb-3">
              Aprovechá precios especiales en productos seleccionados.
            </p>

            <Button
              variant="warning"
              href="/productos"
              className="fw-bold"
            >
              Ver ofertas
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

 
<Carousel.Item>
  <img
    className="d-block w-100"
style={{
  height: '500px',
  objectFit: 'cover',
}}
    src="/banner-frescura.jpg"
    alt="Frutas y verduras frescas de Punto Market"
  />

  <Carousel.Caption className="text-start">
    <div className="bg-dark bg-opacity-75 rounded-3 p-4 d-inline-block">
      <h2 className="fw-bold">Frescura para tu mesa</h2>

      <p className="fs-5 mb-3">
        Encontrá frutas y verduras frescas todos los días.
      </p>

      <Button
        variant="warning"
        href="/productos"
        className="fw-bold"
      >
        Ver productos
      </Button>
    </div>
  </Carousel.Caption>
</Carousel.Item>
   </Carousel>
  );
}

export default Carrusel;