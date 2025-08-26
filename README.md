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

### Lazy Loading y Partial Hydration, ¿qué componentes cargar de forma diferida?

Empezando con **Lazy Loading**, este término se refiere a cargar diferentes recursos de forma diferida, haciendo que se carguen solo cuando se necesitan. Esto permite que el tiempo de carga inicial del sitio se reduzca y que también sea menor el consumo de ancho de banda. Algunos componentes que pueden ser cargados con Lazy Loading son:

- Imágenes de personajes insertando en `<img>` el atributo `loading="lazy"`.
- Generación de resúmenes con IA solo cuando se presione el botón para generar el resumen.

Por otro lado, **Partial Hydration** es una forma de optimizar apps web donde se busca reducir la cantidad de JavaScript a solo las partes donde realmente se necesita. De esta manera solo se cargan y se hidratan las secciones que requieren cierta interactividad. En el caso de esta prueba, las partes que requieren cierta interactividad son:

- Buscador de personajes con ID
- Generador de resumen con IA
- Botón para copiar el JSON del personaje

Pero gracias a Astro, estas partes son las únicas que cargan el JavaScript necesario para que funcionen, aunque en este caso no mediante Partial Hydration sino utilizando JavaScript Vanilla, mientras que el resto del sitio web permanece estático. Sin embargo, en caso de necesitar interactividad más compleja en el futuro, se podría implementar Partial Hydration, ya que esta técnica está orientada al uso de islas en Astro mediante un framework como Vue o Svelte.

### SSR o SSG: ¿cómo y cuándo los usarlos?

Los sitios web de documentación se caracterizan por ser sitios que no suelen variar su contenido de manera frecuente, por lo que herramientas como Astro, que priorizan el **Static Site Generation (SSG)**, son una de las mejores opciones. En este caso, la mayoría del sitio web es estático; las únicas partes que requieren algo de interactividad son el buscador de la barra de navegación y la generación de resúmenes con IA de un personaje. Pese a eso, se lo puede manejar de forma ligera con JavaScript o TypeScript sin sacrificar rendimiento.

En caso de que la aplicación creciera, habría que analizar qué nuevas funcionalidades se quieren implementar, pero en caso de necesitar de alguna sección interactiva compleja, Astro nos permite implementar esa sección con un framework a través de las islas. Las islas son pequeñas partes del sitio web donde sí se cargan con el JavaScript necesario pero el resto del contenido sigue siendo estático, esto permite que las páginas tengan contenido interactivo pero sigan siendo rápidas.

Algunos ejemplos a futuro donde se pueda requerir alguna parte interactiva para esta prueba pueden ser:

- Un **buscador de personajes** más avanzado, por ejemplo, que requiera mayor cantidad de filtros y que estos sean en tiempo real.
- Un **generador de resumen** más completo, donde puedas personalizar el resumen como la longitud o el idioma.
- Un **editor de la API** que permita al usuario probarla desde el navegador.

En conclusión, lo mejor sería mantener el sitio web como un SSG ya que los sitios de documentación suelen ser estático en la mayor parte de su contenido, pero si se requiere de alguna funcionalidad que tenga interactividad, con Astro se podría implementarla a través de las islas sin perder rendimiento. 

<br/>

## 💻 Guía de implementación

### Ejecución del proyecto de forma local

#### Requisitos previos

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

    Abre el proyecto en tu editor de código o IDE de tu preferencia. Una vez abierto, en la raíz del proyecto encontrarás un archivo `.env.example`, ahí debes añadir la clave de tu API de Gemini de la siguiente forma (en caso que no sepas como configurarla, puedes ir a la siguiente sección):

    ```ini
    GEMINI_API_KEY="AQUI_DEBE_IR_TU_CLAVE"
    ```

    Una vez que hayas insertado tu clave, debes cambiar el nombre del archivo llamado `.env.example` por `.env`; o crear una copia del archivo `.env.example` y renombrar el archivo de copia a `.env`. **Ten en cuenta que la clave de tu API debe estar entre comillas**   

4. **Ejecutar el proyecto:**

    Vuelve a abrir en la terminal en la carpeta de tu proyecto y ejecuta:

   ```bash
   npm run dev
   ```

   Te dará la siguiente URL: `http://localhost:4321/`, debes copiarla y pegarla en tu navegador. O si pulsas `Ctrl` y le das click a la URL también se abrirá la página en tu navegador predeterminado. Esto es lo que deberías visualizar una vez abierta la página:

   ![image](https://github.com/user-attachments/assets/93013309-c7f6-48e2-9156-ade43fc02c4b)

    De esta manera ya tendrías el proyecto ejecutándose en tu máquina.

### Configuración de la API key de Gemini

En esta sección veremos cómo obtener la API key de Gemini:

#### 1. Crear un proyecto de Google Cloud

1. Nos dirigimos al panel de [Google Cloud Console](https://console.cloud.google.com/).

2. En la parte superior damos click a `seleccionar un proyecto`.

    ![image](https://github.com/user-attachments/assets/0b383363-f4bc-4d5f-808f-b0b4e562ba1d)

3. Y se nos desplegará un panel para seleccionar un proyecto nuestro, en mi caso será `My First Project`, pero en caso de que no tengas un proyecto, solo debes crear uno dando click en `Proyecto Nuevo`, el cual se encuentra en la parte superior derecha del panel.

    ![image](https://github.com/user-attachments/assets/3e8ba200-5bc9-4365-9ef1-b28726c4ad71)

#### 2. Habilitar Gemini API

1. En la parte superior izquierda damos click en las tres rayas, esto habilitará el menú lateral de Google Cloud.

    ![image](https://github.com/user-attachments/assets/e33078af-eb41-4a28-823b-253e6accb978)

2. Pasamos nuestro cursor por `APIs y servicios` y se nos despliegará un menú con unas opciones, seleccionamos la de `Biblioteca`.

   ![image](https://github.com/user-attachments/assets/2417543f-7a0d-4f1e-a11b-e3ab076f44cf)

3. En el buscador de la biblioteca escribimos `Gemini API` y damos click sobre ella.

   ![image](https://github.com/user-attachments/assets/b15f4525-e902-4436-8c0d-de95eff8b8b9)

4. Damos click en el botón azul `Habilitar` y nos llevará al siguiente panel de administración.

    ![image](https://github.com/user-attachments/assets/7fd21bf2-56ca-48a2-96e5-ed9acf441a5a)

#### 3. Crear una clave

1. Ahora debemos crear una clave API, para ello en la parte izquierda veremos un menú lateral, damos click sobre `Credenciales`.

   ![image](https://github.com/user-attachments/assets/0043cb3c-5c6e-4d23-99c6-ab708422dd57)

2. En el panel de `Credenciales` en la parte superior damos click en el botón de `+ Crear credenciales` y seleccionamos `Clave de API`

   ![image](https://github.com/user-attachments/assets/f914fe49-de56-43ac-bedc-357a516209f2)

3. Se nos dará la clave, esa clave debemos copiarla y pegarla en el archivo .env, tal como se hizo en la sección para ejecutar el proyecto de forma local.

   ![image](https://github.com/user-attachments/assets/4886f344-f432-4b5f-930d-fc0c24f02a89)

#### 4. Gestionar cuenta de facturación

Una aclaración breve, para este proyecto se usó el modelo `Gemini 1.5 pro` ya que era un modelo que no tenía problemas para generar resúmenes y estaba disponible. Este nos da un límite permitido gratuito pero en caso de excederlo, al intentar generar un resumen saltaba un `You exceeded your current quota`. La solución a esto era optar por agregar una cuenta de facturación, la cual nos da $300 de manera gratuita antes de proceder al primer pago, al cual nosotros primero debemos dar autorización.

Para activar esta cuenta de facturación hay que hacer lo siguiente:

1. Ir al [panel de facturación](https://console.cloud.google.com/billing).

2. Agregar una cuenta de facturación (que sería la cuenta donde harían los cobros en caso de exceder el límite gratuito).

#### 5. Restringir la clave API

Como buena práctica es útil restringir quienes pueden usar nuestra API, para ello debemos seguir los siguientes pasos:

1. En el panel de `Credenciales` damos click sobre la clave API que creamos previamente.

    ![image](https://github.com/user-attachments/assets/cc1636be-b26f-4863-b8f9-0909da1e6181)

2. En **Restricciones de aplicaciones** dejamos en `Ninguno` y en la parte de **Restricciones de API** seleccionamos `Restringir clave`.

    ![image](https://github.com/user-attachments/assets/9b0df867-b8d8-4e99-8a83-76e7632d09bb)

3. Seleccionamos la API `Generative Language API` y damos click en `Aceptar`

    ![image](https://github.com/user-attachments/assets/b4bbd8b2-af7a-4234-8a14-45a495fd83e8)

4. Guardamos los cambios y ahora debería salir un visto al lado de nuestra clave API.

    ![image](https://github.com/user-attachments/assets/ff6011fe-c533-4a0e-bd7f-a701163601c8)

 > [!WARNING]
> Idealmente en la parte de `Restricciones de aplicaciones` también deberíamos restringir nuestra API, pero al hacerlo a través de la opción de `Sitios Web` ocurría el siguiente error: `Requests from referer are blocked`. Por lo que la opción correcta sería restringir la API seleccionando `Direcciones IP`, pero como el sitio está desplegado usando la prueba versión gratuita de Netlify, este no nos proporciona las IP del servidor en donde está alojada la página. Por lo que se optó en dejar por esta ocasión en la opción de `Ninguno`. 
  
---
Desarrollado por [Joao Conde](https://github.com/JoaoConde12) - Prueba técnica Kushki 2025
