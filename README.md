# InkVerse

## 1. Título del Proyecto

**InkVerse** es un proyecto web individual orientado a la compra, venta y publicación de ilustraciones digitales organizadas por categorías artísticas.

## 2. Descripción General

InkVerse simula una plataforma de comercio digital para artistas y coleccionistas. El sitio permite explorar obras por estilos visuales como Anime, Terror, Chibi, Caricaturesco, Realista y Paisaje, además de interactuar con una galería, un carrito de compras y un sistema básico de usuarios.

El proyecto resuelve de forma simulada la necesidad de contar con un espacio web donde los artistas puedan mostrar sus ilustraciones, asignarles precio, registrar autoría y permitir que otros usuarios las agreguen a favoritos o al carrito de compra.

## 3. Tecnologías Utilizadas

- **HTML5:** estructura principal de las páginas del sitio.
- **CSS3:** diseño visual, responsividad, tarjetas, paneles, botones y temas claro/oscuro.
- **JavaScript:** lógica dinámica del catálogo, carrito, favoritos, login, subida de imágenes y almacenamiento local.
- **LocalStorage:** persistencia de carrito, favoritos, usuarios, reportes, obras subidas y preferencias de tema.
- **SVG:** recursos visuales usados como imágenes de categorías y avatares.
- **Google Fonts:** uso de la fuente Inter para mejorar la presentación tipográfica.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.
- **GitHub Pages:** despliegue público del proyecto web.
- **Asistencia con IA:** se utilizó apoyo de herramientas de inteligencia artificial para orientación, generación y ajuste de partes del código y documentación.

## 4. Funcionalidades

- Visualización de una galería de ilustraciones digitales.
- Categorías independientes para filtrar obras por estilo: Anime, Terror, Chibi, Caricaturesco, Realista y Paisaje.
- Carrito de compras dinámico con suma de subtotales y cantidades.
- Cambio de moneda entre bolivianos (Bs) y dólares ($).
- Sistema de favoritos para guardar obras preferidas.
- Registro e inicio de sesión de usuarios mediante datos almacenados localmente.
- Acceso a perfil de usuario con edición de información.
- Subida de imágenes por usuarios autenticados, con vista previa antes de publicar.
- Registro de autor para las obras subidas.
- Valoración de obras mediante manchas de pintura.
- Reporte de obras desde la galería.
- Cambio entre tema oscuro y tema claro.
- Diseño responsivo adaptable a pantallas de escritorio y móviles.

## 5. Instrucciones de Uso

### Acceso al sitio desplegado

El proyecto está publicado en GitHub Pages y puede visitarse desde el siguiente enlace:

[https://vaditkiller.github.io/InkVerse/](https://vaditkiller.github.io/InkVerse/)

### Clonar el proyecto localmente

Para descargar el repositorio en una computadora local, ejecutar:

```bash
git clone https://github.com/VaditKiller/InkVerse.git
```

Luego ingresar a la carpeta del proyecto:

```bash
cd InkVerse
```

### Ejecutar el proyecto

Este proyecto es una página web estática, por lo que no requiere instalación de dependencias. Para ejecutarlo localmente se puede abrir el archivo `index.html` directamente en el navegador.

También se puede usar una extensión como **Live Server** en Visual Studio Code para visualizar el sitio con recarga automática.

## 6. Estructura del Proyecto

```text
InkVerse/
├── index.html
├── STYLES.css
├── JAVA.js
├── Multimedia/
│   ├── anime-neon.svg
│   ├── bosque-fantasma.svg
│   ├── chibi-estrella.svg
│   ├── retrato-satirico.svg
│   ├── atardecer-realista.svg
│   └── montanas-amanecer.svg
├── Categoria Anime/
├── Categoria Terror/
├── Categoria Chibi/
├── Categoria Caricatura/
├── Categoria Realista/
├── Categoria Paisaje/
└── Usuario/
```

### Archivos y carpetas principales

- `index.html`: página principal del sitio web.
- `STYLES.css`: hoja de estilos general del proyecto.
- `JAVA.js`: archivo principal de lógica e interactividad.
- `Multimedia/`: carpeta con imágenes SVG usadas en las tarjetas del catálogo.
- `Categoria Anime/`, `Categoria Terror/`, `Categoria Chibi/`, `Categoria Caricatura/`, `Categoria Realista/` y `Categoria Paisaje/`: páginas individuales de cada categoría.
- `Usuario/`: sección de perfil y edición de datos del usuario.

## 7. Autor

**Estudiante:** Vadit Sabrina Soux Vargas  
**Correo institucional:** pendiente de completar

## Repositorio

[https://github.com/VaditKiller/InkVerse](https://github.com/VaditKiller/InkVerse)