# Frik

Buscador / red social de comics/manga para realizar un seguimiento de issues, ver recomendaciones e interactuar con gente que tenga los mismos gustos en comics.

## Puntos principales 📦

- Base de datos
- ComicVine API ó Marvel API
- Panel de Usuario con:
  - Nivel Frik (basado en puntos que ganas por completar/leer comics)
  - Añadir comic/serie leído para seguimiento
  - Lista de comics leídos y seguimiento
  - Barra de progreso
- Pagina Home:

  - NavBar
  - Mapa de tiendas cercanas
  - Heavy users (basado en el nivel Frik)
  - Hot Comics (basado en comics más leídos/seguidos)

- Usuarios y Privilegios:
  - USER -> Puede el hacer el CRUD y (opcional) añadir amigos
  - ADMIN -> Lo mimso que el USER pero puede editar privilegios (editar tipo de USER y editar detalles de USER)
  - MOD -> Revisa las reviews y valida antes del posteo

## Endpoints

| Method          | Path                 | Description                                          |
| --------------- | -------------------- | ---------------------------------------------------- |
| get             | /                    | Muestra el index                                     |
| get             | /users               | Muestra la lista de usuarios                         |
| get             | /users/new           | Muestra formulario para crear un usuario             |
| post            | /users/new           | Guarda en la BBDD un usuario                         |
| get             | /users/edit?id=xxx   | Editar usuario (Admin y propio usuario)              |
| post            | /users/edit?id=xxx   | Edita en la BBDD el usuario                          |
| post (o delete) | /users/delete?id=xxx | Borra usuario (Admin y propio usuario)               |
| get             | /users/:id           | Muestra los detalles de un usuario                   |
| get             | /auth/login          | Muestra formulario login                             |
| post            | /auth/login          | Envía formulario de login                            |
| get             | /auth/signup         | Muestra formulario de signup                         |
| post            | /auth/signup         | Envía formulario de signup                           |
| get             | /auth/logout         | Cierra sesion usuario                                |
| get             | /comics              | Muestra resultados de la busqueda                    |
| get             | /comics/:id          | Muestra vista de detalles del comic                  |
| post            | /comics/:id          | Guarda el comic en el Array de comics de ese usuario |

## Project Info

- ComicVine API:
  - JSON
  - API Key
  - 200 request/day
  - Busqueda a través de querys
- Marvel API
  - JSON
  - API Key unica tras registro
  - 3000 request/day
  - md5 digest para generar un hash

### BONUS

- Recomendaciones
- Nivel
- Rol de Moderador

### APIs Info

- ComicVine API info and base-endpoint: https://comicvine.gamespot.com/api
- Marvel API doc: https://developer.marvel.com/documentation/generalinfo
- Marvel base-endpoint: http://gateway.marvel.com/v1/public

## Comenzando 🚀

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_TODO_

### Instalación 🔧

`npm install` o `npm i`

## Despliegue 📦

`npm run start`

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- NodeJS
- Express
- MongoDB
- Mongoose
- ComicVine API
- Vanilla JavaScript

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

- **Fulanito Detal** - _Documentación_ - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- etc.
