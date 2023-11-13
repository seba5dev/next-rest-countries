# [REST Countries by seba5dev](https://next-rest-countries.vercel.app/)

[Ver proyecto desplegado](https://next-rest-countries.vercel.app/)

## Arquitectura

### ¿Cómo se estructura el proyecto?

Principalmente, se estableció que librerías se iban a utilizar y se crearon los componentes que se iban a utilizar en la aplicación. Luego, se crearon los hooks para hacer las llamadas a la API y se crearon los estilos de la aplicación.

Todos los estilos del proyecto fueron hechos con TailwindCSS y se añadieron los estilos mencionados más adelante en los lineamientos de la prueba.

Los iconos fueron obtenidos de [FontAwesome](https://fontawesome.com) y se añadieron a la aplicación con `react-icons`.

Se utilizó SWR para evitar hacer llamadas innecesarias a la API y para poder cachear los datos de la API, evitando hacer uso de useEffect. También se utilizó `next-themes` para poder cambiar el tema de la aplicación de forma sencilla sin modificar la estructura de la aplicación.

Normalmente no utilizo TypeScript, pero en este caso lo utilicé para poder tener una mejor idea de los datos que se reciben de la API y seguir los lineamientos de la prueba.

Se crearon tests unitarios con Cypress para probar la aplicación en diseño, responsive, funcionalidad de los filtros y manejo de errores.

El proyecto fue desplegado en Vercel gracias a Github Actions, el cual hace los tests y luego despliega automaticamente después de cada push a main, y se puede ver en el siguiente enlace: [https://next-rest-countries.vercel.app/](https://next-rest-countries.vercel.app/)

### ¿Qué se podría mejorar?

Se podría añadir un paginador para los países, para evitar renderizar todos los países en la página principal.

## ¿Cómo se ejecuta el proyecto?

Primero, se debe clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/seba5dev/next-rest-countries.git
```

Luego, se debe instalar las dependencias del proyecto con el siguiente comando:

```bash
npm install
```

Por último, se debe ejecutar el proyecto con el siguiente comando:

```bash
npm run dev
```

## ¿Cómo se ejecutan los tests?

Primero, se debe clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/seba5dev/next-rest-countries.git
```

Luego, se debe instalar las dependencias del proyecto con el siguiente comando:

```bash
npm install
```

En caso de que no se haya ejecutado el proyecto, se debe ejecutar el proyecto con el siguiente comando:

```bash
npm run dev
```

Por último, en otra terminal se debe ejecutar los tests con el siguiente comando:

```bash
npm run cy:run
```

Si se desea ver los tests en ejecución, se debe ejecutar el siguiente comando:

```bash
npm run cy:open
```

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
