import { useEffect, useState } from 'react';

const CLAVE_STORAGE = 'punto-market-carrito';
const CANTIDAD_MAXIMA = 99;

// Lee el carrito guardado. Si no hay nada, o el dato está roto, devuelve [].
function leerCarritoGuardado() {
  try {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    const datos = guardado ? JSON.parse(guardado) : [];
    return Array.isArray(datos) ? datos : [];
  } catch {
    return [];
  }
}

function useCarrito() {
  // useState con inicialización perezosa: localStorage se lee una sola vez, al montar.
  const [carrito, setCarrito] = useState(leerCarritoGuardado);

  // useEffect: cada vez que el carrito cambia, se guarda en localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(carrito));
    } catch {
      // Si el navegador no permite guardar, el carrito sigue funcionando en memoria.
    }
  }, [carrito]);

  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);

      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + 1, CANTIDAD_MAXIMA) }
            : item,
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    const cantidad = Math.min(Math.max(nuevaCantidad, 1), CANTIDAD_MAXIMA);
    setCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad } : item)),
    );
  };

  const quitarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  // Valores derivados: se calculan en cada render, no hace falta guardarlos en un estado.
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce(
    (acc, item) => acc + Number(item.precio) * item.cantidad,
    0,
  );

  return {
    carrito,
    agregarProducto,
    cambiarCantidad,
    quitarProducto,
    vaciarCarrito,
    totalUnidades,
    totalPrecio,
  };
}

export default useCarrito;