import NavbarPrincipal from './components/Navbar';
import Categorias from './components/Categorias';

function App() {
  return (
    <>
      <NavbarPrincipal />

      <div className="container text-center mt-5">
        <h1>Supermercado</h1>
        <p>Proyecto desarrollado con React + Vite</p>
      </div>
    </>
  );
}

export default App;