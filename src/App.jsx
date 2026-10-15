
import { Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import RegistroPage from './pages/RegistroPage';
import CategoriasPage from './pages/CategoriasPage';
import CarritoPage from './pages/CarritoPage';

import useCarrito from './hooks/useCarrito';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1800,
  timerProgressBar: true,
});

function App() {
  const {
    carrito,
    agregarProducto,
    cambiarCantidad,
    quitarProducto,
    vaciarCarrito,
    totalUnidades,
    totalPrecio,
  } = useCarrito();

  const handleAgregar = (producto) => {
    agregarProducto(producto);

    Toast.fire({
      icon: 'success',
      title: `${producto.nombre} agregado al carrito`,
    });
  };

  return (
    <>
      <header className="sticky-top">
        <Navbar cantidadCarrito={totalUnidades} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/productos"
            element={<ProductosPage onAgregar={handleAgregar} />}
          />

          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/registro" element={<RegistroPage />} />

          <Route
            path="/carrito"
            element={
              <CarritoPage
                carrito={carrito}
                totalUnidades={totalUnidades}
                totalPrecio={totalPrecio}
                onCambiarCantidad={cambiarCantidad}
                onQuitar={quitarProducto}
                onVaciar={vaciarCarrito}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
