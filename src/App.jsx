import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import RegistroPage from './pages/RegistroPage';
import CategoriasPage from './pages/CategoriasPage';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  return (
    <>
      <Navbar cantidadCarrito={carrito.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={<ProductosPage onAgregar={agregarAlCarrito} />}
        />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/registro" element={<RegistroPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;