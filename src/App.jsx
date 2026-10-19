<<<<<<< HEAD
=======

>>>>>>> dev
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

<<<<<<< HEAD
// Aviso pequeño (toast) que aparece arriba a la derecha y se cierra solo.
=======
>>>>>>> dev
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
<<<<<<< HEAD
=======

>>>>>>> dev
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
<<<<<<< HEAD
=======

>>>>>>> dev
          <Route
            path="/productos"
            element={<ProductosPage onAgregar={handleAgregar} />}
          />
<<<<<<< HEAD
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/registro" element={<RegistroPage />} />
=======

          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/registro" element={<RegistroPage />} />

>>>>>>> dev
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
