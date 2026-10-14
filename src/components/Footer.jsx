import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
   <footer className="bg-success text-light pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="fw-bold">🛒 Punto Market </h5>
            <p className="small mb-0">
              Todo lo que necesitás, en un solo lugar. Productos frescos y de
              calidad, con envío a domicilio.
            </p>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Contacto</h5>
            <ul className="list-unstyled small mb-0">
              <li>📍 San Miguel de Tucumán, Argentina</li>
              <li>📞 +54 9 381 000-0000</li>
              <li>✉️ contacto@puntomarket.com</li>
              <li>🕒 Lunes a Sábado: 8:00 a 21:00</li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Seguinos</h5>
            <div className="d-flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-light">GitHub</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light">Instagram</a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary mt-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()}© 2026 Punto Market. Todos los derechos reservados. 
        </p>
      </Container>
    </footer>
  );
}

export default Footer;