import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Registro() {
  const [datos, setDatos] = useState({ nombre: '', email: '', password: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario registrado:', datos);
    setEnviado(true);
    setDatos({ nombre: '', email: '', password: '' });
  };

  return (
    <section id="registro" className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <Card className="shadow">
              <Card.Body className="p-4">
                <h2 className="text-center fw-bold mb-4">Crear cuenta</h2>

                {enviado && (
                  <Alert variant="success" dismissible onClose={() => setEnviado(false)}>
                    ¡Registro exitoso! Bienvenido/a a Supermercado Central.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="registroNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={datos.nombre}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="registroEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="nombre@correo.com"
                      value={datos.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="registroPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Mínimo 6 caracteres"
                      minLength={6}
                      value={datos.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="success" type="submit" size="lg">
                      Registrarme
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Registro;