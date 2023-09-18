Reorganizar README

En plesk:
subir los archivos el proyecto utiliza .en

REACT_APP_DOMAIN - dominio del sitio
REACT_APP_PORT - modificar el 8081 desde el package por el que se vaya a utilizar

desde el panel de node agregar la version de node

node: 18.16.0
pagage manager: yarn
document root: ruta donde se aloja los archivos
application root: server/index.js

cada cambio subido verificar si necesitas instalar dependencias desde yarn install o si es la primera vez instalar las dependencias

run node.js ejecutar a 

yarn build:webpack:prod

reiniciar la app
- Restart app

# Introduction Website Miraro
Proyecto en react con dependencias principales

- [React](https://es.reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Material UI](https://mui.com/material-ui/getting-started/installation/)

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.    Installation process
2.    Software dependencies
3.    Latest releases
4.    API references

# Build and Test
#### Run React
Ejecutar el proyecto desde modo develop

```bash
npm run start
```

#### Run storybook
Ejecutar el proyecto desde el storybook

```bash
npm run storybook
```
#### Run github static
instala la dependencia 

```bash
npm i gh-pages --save-dev
```

En el package agregar el parametro de homePage: "http://{provedor}.github.io/{repositorio}"


Ejecutar el express y el demon

```bash
yarn start:ssr:prod
```
