


# RehabTime [![Build Status](https://app.travis-ci.com/e89835/RehabTime.svg?branch=main)](https://app.travis-ci.com/e89835/RehabTime) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/e89835/RehabTime/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/e89835/RehabTime/tree/main) ![DockerHub Action](https://github.com/e89835/rehabtime/actions/workflows/docker-image.yml/badge.svg) ![GHCR Action](https://github.com/e89835/rehabtime/actions/workflows/ghcr-image.yml/badge.svg)
Bienvenid@ a la página principal del proyecto RehabTime, dentro de CC en la convocatoria extraordinaria 2122.

# Enlaces
- En el siguiente enlace encontrará la [descripción](https://github.com/e89835/RehabTime/blob/main/doc/Description.md) del proyecto.

- En el siguiente enlace se encuentra la [documentación](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md).

- En el enlace [fichero tareas](https://github.com/e89835/RehabTime/blob/main/doc/fichero_tareas) se encuentran los comandos para crear, ejecutar y testear el proyecto. Para ver cómo se ha creado la aplicación, visite este [enlace](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#rehabtime---creaci%C3%B3n-aplicaci%C3%B3n).
    - Aunque la aplicación se genera automáticamente con el comando `npx create-react-app@latest rehabtime`, se recomienda usar el comprimido _[node_modules](https://mega.nz/file/7EMyCJ4S#gRVO5BYa3Z_PvXFG_3RLr9H6glRqR0EY-QndHghT1eY)_ al truncar GitHub la carpeta subida _node_modulos_ a 1K ficheros, omitiendo 62 entradas.

- Los enlaces a las Historias de Usuario están en la carpeta [doc](https://github.com/e89835/RehabTime/blob/main/doc/): [HU1](https://github.com/e89835/RehabTime/blob/main/doc/US1.md), [HU2](https://github.com/e89835/RehabTime/blob/main/doc/US2.md), [HU3](https://github.com/e89835/RehabTime/blob/main/doc/US3.md), [HU4](https://github.com/e89835/RehabTime/blob/main/doc/US4.md) y [HU5](https://github.com/e89835/RehabTime/blob/main/doc/US5.md).

- Para el testeo de la aplicación, se ha usado el gestor de tareas **NPM** y el marco de pruebas **Jest** y **RTL**. La justificación más detallada se encuentra en la [documentación del H2](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#rehabtime---hito-2).

- Para los contenedores, se usa la distribución [Alpine](https://hub.docker.com/_/alpine) Node 10 en contenedor [Docker](https://docs.docker.com/get-started/overview/). La imagen resultante se sube a [Docker Hub](https://hub.docker.com/) y a GitHub Container Registry ([GHCR](https://github.com/features/packages)). Las actualizaciones automáticas se hacen usando [GitHub Actions](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#automatic-updates).Para más detalle ver la [documentación del H3](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#rehabtime---hito-3).

- Para la Integración Continua, se usa [Travis CI](https://app.travis-ci.com/github/e89835/RehabTime) y [Circle CI](https://app.circleci.com/pipelines/github/e89835/RehabTime). También se usa [Docker + Travis CI](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#docker--travis-ci). Para más detalle ver la [documentación del H4](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#rehabtime---hito-4).

- Para el microservicio, se usa [React](https://en.reactjs.org/). Para la API, usaremos la [API REST](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#api-rest) con el método [**fetch**](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#api-fetch). Para el testeo de la API se usa [POSTMAN](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#postman). Las buenas prácticas se pueden ver [aquí](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#buenas-pr%C3%A1cticas). Para el uso de logs, usaremos [**console.log**](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#logs), y para los test, la suite anteriormente mencionada. Para más detalle vr la [documentación del H5](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#rehabtime---hito-5).

- En el siguiente enlace se encuentra el [MVP](https://github.com/e89835/RehabTime/blob/main/doc/MVP.md).

- En este enlace se encuentran los [objetivos de los Hitos](https://github.com/e89835/RehabTime/blob/main/doc/Objectives.md) alcanzados. 

- En este enlace se encuentra la [licencia](https://github.com/e89835/RehabTime/blob/main/LICENSE).

