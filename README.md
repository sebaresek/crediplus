# 🚀 Crediplus - Plataforma de Préstamos Prendarios

**Crediplus** es una solución web de alto rendimiento diseñada para la gestión y simulación de préstamos prendarios. La plataforma permite a los usuarios interactuar con un simulador dinámico, calcular costos basados en diferentes plazos y contactar directamente con la administración para concretar operaciones financieras.

---

## 🛠️ Stack Tecnológico

El proyecto utiliza tecnologías modernas para garantizar una interfaz fluida, segura y escalable:

### Frontend & Frameworks
* **React 19**: Biblioteca principal para la interfaz de usuario.
* **Vite 6**: Herramienta de construcción y servidor de desarrollo ultra rápido.
* **React Router DOM v7**: Gestión de navegación y rutas dinámicas.

### Estilos y Animaciones
* **Tailwind CSS v4**: Framework de utilidades para un diseño "Elegant Dark" y responsivo.
* **Motion**: Motor de animaciones para transiciones suaves y componentes interactivos.
* **Lucide React**: Set de iconos vectoriales para una navegación intuitiva.

### Inteligencia Artificial & Utilidades
* **Google Generative AI**: Integración con modelos de lenguaje para asistencia inteligente.
* **Intl (es-AR)**: Formateo de moneda y números localizado para Argentina.

---

## ✨ Características Principales

* **Simulador en Tiempo Real**: Cálculo instantáneo de cuotas y tasas según el monto solicitado (hasta $1.000.000) y el plazo elegido.
* **Conversión a WhatsApp**: Integración directa que envía un mensaje preconfigurado con el monto y plazo seleccionados para agilizar la atención.
* **Diseño Premium**: Interfaz optimizada con estéticas de glassmorphism y modo oscuro.
* **Estructura Legal**: Páginas dedicadas a Términos y Condiciones, Políticas de Privacidad y Defensa al Consumidor.

---

## 📂 Estructura del Proyecto

Basado en la arquitectura actual del código:
```text
src/
 ├── components/     # Componentes de UI (Calculadora, Hero, Navbar, FAQ)
 ├── pages/          # Vistas legales y páginas estáticas
 ├── App.jsx         # Configuración de rutas principales
 └── main.jsx        # Punto de entrada de la aplicación