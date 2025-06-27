# Kushki Prueba - Generador de Documentación Interactiva

> Puedes ver de mejor manera el código aquí:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

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
