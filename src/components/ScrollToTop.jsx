import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash, hacemos scroll a la parte superior (ideal para cambios de página, footer, etc.)
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Si hay hash, buscamos el elemento y hacemos scroll suave hacia él
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Pequeño timeout para asegurar que el DOM cargó si venimos de otra página
    }
  }, [pathname, hash]);

  return null;
}
