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

- Barra lateral de amigos (compartes gustos/comic que lees actualmente)
- Envío de mensajes/correo interno
- Crear Comics que no estén en la API (con name, desc, img REQUIRED)


### APIs Info

- ComicVine API info and base-endpoint: https://comicvine.gamespot.com/api
- Marvel API doc: https://developer.marvel.com/documentation/generalinfo
- Marvel base-endpoint: http://gateway.marvel.com/v1/public

## Comenzando 🚀

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_TODO_


### Instalación 🔧

_TODO_


## Despliegue 📦

_TODO_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* NodeJS
* Express
* MongoDB
* Mongoose
* ComicVine API
* Vanilla JavaScript

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.

