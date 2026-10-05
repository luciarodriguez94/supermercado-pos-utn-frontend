import { useState } from 'react';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Categorias from './components/Categorias';
import Productos from './components/Productos';
import Registro from './components/Registro';
import Footer from './components/Footer';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  return (
    <>
      <Navbar cantidadCarrito={carrito.length} />
      <Carrusel />
      <Categorias />
      <Productos onAgregar={agregarAlCarrito} />
      <Registro />
      <Footer />
    </>
  );
}

export default App;