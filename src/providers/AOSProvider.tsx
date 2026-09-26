import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider: React.FC = () => {
  const location = useLocation();

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      delay: 0,
    });
  }, []);

  // Actualizar AOS cuando cambia la ruta
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default AOSProvider;