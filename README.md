# REST Countries by seba5dev

## Arquitectura

### ¿Cómo se estructura el proyecto?

El proyecto está estructurado según la estructura de Next.js, con la carpeta `app` que contiene toda la aplicación, y la carpeta `components` que contiene los componentes reutilizables.

Todos los estilos del proyecto fueron hechos con TailwindCSS y se añadieron los estilos mencionados más adelante en los lineamientos de la prueba.

Los iconos fueron obtenidos de [FontAwesome](https://fontawesome.com) y se añadieron a la aplicación con `react-icons`.

Se utilizaron hooks como `useCountries` y `useCountry` para hacer las llamadas a la API de REST Countries con `SWR`. También se utilizó `useTheme` de `next-themes` para cambiar el tema de la aplicación de forma sencilla.

Normalmente no utilizo TypeScript, pero en este caso lo utilicé para poder tener una mejor idea de los datos que se reciben de la API y seguir los lineamientos de la prueba.

Se crearon tests unitarios con Cypress para probar la aplicación.

### ¿Cómo se hizo?

Principalmente, se estableció que librerías se iban a utilizar y se crearon los componentes que se iban a utilizar en la aplicación. Luego, se crearon los hooks para hacer las llamadas a la API y se crearon los estilos de la aplicación.

Se utilizó SWR para evitar hacer llamadas innecesarias a la API y para poder cachear los datos de la API, evitando hacer uso de useEffect. También se utilizó `next-themes` para poder cambiar el tema de la aplicación de forma sencilla sin modificar la estructura de la aplicación.

## Front-end Style Guide

### Layout

The designs were created to the following widths:

- Desktop: 1440px

### Colors

#### Neutral

- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

### Typography

#### Body Copy

- Homepage Items: 14px
- Detail Page: 16px

#### Fonts

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 600, 800

### Icons

For the icons, you can use a font icon library. Don't worry if the icons that you choose don't look exactly like they do on the design.

Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
