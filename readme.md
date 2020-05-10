# NodePOP

NodePOP es un API con un front básico para la visualización de anuncios

## Instalación

Vamos a necesitar Node.js v4+ y base de datos MongoDB

Vamos a utilizar la herramienta [NPM](https://www.npmjs.com/) para instalar AnunPractice y sus dependencias.


## Uso

#### Instalando dependencias
```bash
npm install
```

#### Importar base de datos inicial
```bash
npm install_db
```

#### Arrancar microservicio thumCrafter  [PM2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)
```bash
cd MicroSRV
pm2 start thumCrafter.js
```

#### Arrancar NodePOP en modo desarrollo. http://localhost:3000
```bash
npm run dev
```

#### Arrancar NodePOP en modo producción
```bash
npm start
```

## Interacion con el API

#### Logandose para obtener token JWT
```bash
Request URL: http://localhost:3000/api/authenticate
Request Method: POST
Status Code: 200 OK or 401 KO
Usuario: user@example.com
Contraseña: 1234

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFlZDU3Y2RlNDM5NzQwODQzY2Q3MjEiLCJpYXQiOjE1ODkxMDU1NTQsImV4cCI6MTU4OTI3ODM1NH0.Y_jcEgToJAr92z__Fw1uNKG9AAubZdNVpTtpavwIYiY"
}
```

#### Visualizando todos los anuncios (securizada con JWT)
```bash
Request URL: http://localhost:3000/api/anuncios
Request Method: GET
Status Code: 200 OK or 401 KO
```

#### Visualizando un solo anuncio por ID
```bash
Request URL: http://localhost:3000/api/anuncios/5e886da2227d1c4abcff64be
Request Method: GET
Status Code: 200 OK or 500 KO

{
    "result": {
        "tags": [
        "lifestyle"
        ],
        "_id": "5e886da2227d1c4abcff64be",
        "name": "Galletas",
        "sell": true,
        "price": 2,
        "photo": "galletas.JPG",
        "__v": 0
    }
}
```

#### Creando un anuncio por motodo POST
```bash
Request URL: http://localhost:3000/api/anuncios/
Request Method: POST

Headers: 
{
    content-type: 'application/form-data'
}

body:
{
    name: String,
    sell: Boolean,
    price: Number,
    photo: String,
    thumb: String
    tags: [String]
}

{
    "result": {
        "tags": [
            "work",
            "lifestyle"
        ],
        "_id": "5eb7d40904d7551d80ee44cf",
        "name": "avion",
        "price": 50,
        "photo": "ce2c845af41afceffe22d69398705c34",
        "thumb": "ce2c845af41afceffe22d69398705c34",
        "__v": 0
    }
}
```

#### Visualizando tags disponibles
```bash
Request URL: http://localhost:3000/api/anuncios/tags
Request Method: GET

[
    "lifestyle",
    "mobile",
    "motor",
    "work"
]
```

## Filtros disponibles

#### Por nombre
```bash
Request URL: GET /api/anuncios?name=name
Request Method: GET
```
#### Por precio
```bash
Request URL: GET /api/anuncios?price='lowprice'-'highprice'
Request Method: GET
```
#### Por tag
```bash
Request URL: GET /api/anuncios?tag=tag
Request Method: GET
```
#### Por estado
```bash
Request URL: GET /api/anuncios?sell='true->Venta' or 'false-> compra'
Request Method: GET
```
#### Por limite de anuncios
```bash
Request URL: GET /api/anuncios?limit=limit
Request Method: GET
Max without limit = 10
```
#### Por limite de anuncios a ignorar desde 0
```bash
Request URL: GET /api/anuncios?start=start
Request Method: GET
```
#### Por orden
```bash
Request URL: GET /api/anuncios?sort=sort
Request Method: GET
Default sorted by '_id'
```

## Autor
Hodei para Keepcoding Web Bootcamp VIII# NODEADVKCVIII
