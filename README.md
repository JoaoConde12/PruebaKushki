# Kushki Prueba - Generador de Documentación Interactiva

## 🏗️ Decisiones arquitectónicas

### Tecnologías usadas

- Astro
- TypeScript
- Tailwind CSS

### ¿Por qué se seleccionaron esas tecnologías?

Astro es un framework moderno que ha ganado popularidad en el último tiempo, es ideal para la construcción de sitios web estáticos como blogs, documentación y landing pages. En esta prueba se solicitó un sitio que consuma una API, genere tarjetas con los personajes y permita visualizar detalles de cada uno, incluyendo un resumen generado con IA. Dado que la mayor parte del sitio es estático, Astro brinda:

- Un sitio web rápido para el usuario final, priorizando la entrega de contenido estático con mínimo JavaScript.
- Una experiencia de desarrollo amigable, con la flexibilidad de integrar frameworks como Vue, React o Svelte si se requiere en el futuro.

Se eligió Astro frente a otros frameworks como Next.js o Vite debido a su enfoque en la generación de contenido estático y a su simplicidad de configuración, manteniendo un rendimiento óptimo al cargar muy poco JavaScript.

Además, Astro incluye TypeScript por defecto, permitiendo trabajar con tipado estricto, mejor detección de errores en tiempo de desarrollo y mayor seguridad en el código. Por otro lado, Tailwind CSS facilita la creación de estilos de forma rápida y escalable, permitiendo obtener o desarrollar componentes reutilizables.

<br/>

## 📈 Estrategias de rendimiento para el futuro

### Lazy Loading y Partial Hydration

### SSR o SSG

## 💻 Guía de implementación

### Ejecución del proyecto de forma local

#### Requsitos previos

- Node.js v20 o superior
- npm (o `pnpm` / `yarn` si decides cambiar)

> [!Tip]
> Para comprobar la versión de node que tienes ejecutar en tu terminal:
> ```bash
> node -v

#### Instalación

1. **Clonar el repositorio:**

    Abre tu terminal y ejecuta:
    ```bash
    git clone https://github.com/JoaoConde12/PruebaKushki.git
    cd PruebaKushki
    ```

2. **Instalar dependencias:**

    Una vez en la carpeta del proyecto ejecuta:
    ```bash
    npm install
    ```
    
3. **Configuración de .env:**

    Abre el proyecto en tu editor de código o IDE de tu preferencia. Una vez abierto, en la raíz del proyecto encontrarás un archivo `.env.example`, ahí debes añadir la clave de tu API de Gemini (en caso que no sepas como configurarla, puedes ir a la siguiente sección) de la siguiente forma:

    ```ini
    GEMINI_API_KEY="AQUI_DEBE_IR_TU_CLAVE"
    ```

    Una vez que hayas insertado tu clave, debes cambiar el nombre del archivo llamado `.env.example` por `.env`; o crear una copia del archivo `.env.example` y renombrar el archivo de copia a `.env`. **Ten en cuenta que la clave de tu API debe estar entre comillas**   

4. **Cuatro:**


### Configuración de la API key de Gemini

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
