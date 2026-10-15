import { useEffect } from 'react';

// Cambia el título de la pestaña según la página (útil para SEO y accesibilidad).
function useDocumentTitle(titulo) {
  useEffect(() => {
    document.title = `${titulo} | Punto Market`;
  }, [titulo]);
}

export default useDocumentTitle;