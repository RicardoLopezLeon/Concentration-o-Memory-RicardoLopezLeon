# Concentration o Memory

Concentration o Memory es un juego de cartas en vase a la memoria, el cual consiste en que el jugador debe ir volteando las cartas intentando adivinar las cartas que se repiten.
Por cada turno el jugador debe voltear 2 cartas.
- Si las cartas no coinciden, se le sumara 1 punto al marcador de errores.
- Si las cartas coinciden, se le sumara 1 punto al marcador de aciertos.

## Tech

Concentration o Memory utiliza varios proyectos de código abierto para el funcionamineto correcto
- [ReactJS] - HTML optimizado para aplicaciones web.
- [Vite] - Herramienta de desarrollo web que ayuda a crear aplicaciones modernas de manera más rápida y eficiente.
- [Visual Studio Code] - Editor de texto.
-[Redux Toolkit] - Un patrón de arquitectura de datos que concede manipular el estado de la aplicación.
- [Redux-persist] - Crear un nuevo reducer para agregar la capacidad de almacenar y cargar el estado utilizando un motor de almacenamiento.
- [Tailwindcss] - Framework de CSS de código abierto​ para el diseño de páginas web.
- [sweetalert2] - Librería de JavaScript que permite mostrar notificaciones al cliente.

Y, por supuesto, Concentration o Memory es de código abierto y cuenta con un repositorio público en GitHub.

## Instalation

Concentration o Memory fue desarrollado con React v19+.

Descargar el proyecto desde el reposirotio de GitHub y posteriormente instalar las dependencias.

```sh
git clone https://github.com/RicardoLopezLeon/Concentration-o-Memory-RicardoLopezLeon
cd Concentration-o-Memory-RicardoLopezLeon
npm install
```

Posteriormente de hacer la instalación del proyecto en la raiz de Concentration-o-Memory. Para la ejecución del proyecto tanto en desarrollo o producción son los siguientes:

Para entorno de desarrollo...

```sh
npm run dev
```
Despues de ejeutar el script para el funcionamiento del proyecto en desarrollo se debe ingresar en el navegador la url siguiente: http://localhost:5173/


Para entorno de producción...

```sh
npm run build
npm run preview
```
Despues de ejeutar el script para el funcionamiento del proyecto en producción se debe ingresar en el navegador la url siguiente: http://localhost:4173/


## Observaciones

Para tomar en cuenta que las imagenes no se encuentran estandarizadas en cuanto al tamaño y relación de aspecto decidi ocupar la propiedad objetfit cover para no estirar las imagenes, aun asi aplicando este criterio no se pierde la igualdad de las imagenes en ambas cartas.

Al implementar Tailwindcss se quedaron algunas clases en css debido a algunos problemas con efectos en las cartas.
