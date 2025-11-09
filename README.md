Reorganizar README

En plesk:
subir los archivos el proyecto utiliza .en

REACT_APP_DOMAIN - dominio del sitio
REACT_APP_PORT - modificar el 8081 desde el package por el que se vaya a utilizar

**IMPORTANTE: En producción, eliminar o comentar la línea "proxy" del package.json antes de hacer el build**

desde el panel de node agregar la version de node

node: 18.20.8
package manager: yarn
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


#Notas para unica vez
- En el certificado ssl hacer el redirect de http a https para que no truene los llamados a los json por cros
- desactive el fireware pero posiblemente no es necesario
- se duplica el public2 dentro de public para compilarlo y tenerlo a la mado en el server, en express activo el enlace para public2 ya que no puedo usar el mismo de public porque hace que no me reconozca los archivos
posiblemente agregar en apache los llamados a https y http (apache y ngix) ahora los usa pero posiblemente no son necesarios

Directivas adicionales para HTTP:
Header set Access-Control-Allow-Origin "http://test-quantum.sicssa-lab.com"
Header set Access-Control-Allow-Origin "https://test-quantum.sicssa-lab.com"

Directivas adicionales para HTTPS:
Header set Access-Control-Allow-Origin "https://test-quantum.sicssa-lab.com/"
Header set Access-Control-Allow-Origin "http://test-quantum.sicssa-lab.com"