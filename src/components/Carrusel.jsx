import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/oferta1.jpg"
          alt="Primera oferta"
        />
        <Carousel.Caption>
          <h3>Ofertas especiales</h3>
          <p>Encontrá las mejores promociones.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/oferta2.jpg"
          alt="Segunda oferta"
        />
        <Carousel.Caption>
          <h3>Promociones</h3>
          <p>Productos seleccionados a precios especiales.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/oferta3.png"
          alt="Tercera oferta"
        />
        <Carousel.Caption>
          <h3>Ofertas del supermercado</h3>
          <p>¡Aprovechá nuestras promociones!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;