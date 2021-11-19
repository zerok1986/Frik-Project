## FRIK PROJECT

# Descricion:

# Puntos principales:
- Base de datos 
- Marvel API
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

# INFO:
- Marvel API
    - JSON
    - API Key unica tras registro
    - 3000 request/day
    - md5 digest para generar un hash????

# BONUS:
- Barra lateral de amigos (compartes gustos/comic que lees actualmente)
- Envío de mensajes/correo interno
- Crear Comics que no estén en la API (con name, desc, img REQUIRED)


# API Info
- Endpoint base: http(s)://gateway.marvel.com/