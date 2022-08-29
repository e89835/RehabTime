# Documentation
En este apartado está una documentación extendida de la realización de cada uno de los hitos.

# Rehabtime - Hito 5
## React
Según la encuesta de [desarrolladores de StackOverflow de 2021](https://insights.stackoverflow.com/survey/2021), [React](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks) se encuentra como ganador en la categoría de frameworks web, con más de un 40% de votos.

![image](https://user-images.githubusercontent.com/91733073/187188531-ed673725-8752-4c68-b783-b20acd8b9720.png)


En la misma [encuesta](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-love-dread), se posicionó en 4 posición como el framework más querido, con casi un 70% de votos positivos, y algo más de un 25% de votos sobre el total recibidos. 
 
![image](https://user-images.githubusercontent.com/91733073/187188617-2c6fb206-7be7-4fa6-9ac0-49c789c6cb28.png)

 
 [React](https://en.reactjs.org/) es una bilbioteca de JavaScript que permite desarrollar una interfaz de usuario de reacción superior para aplicaciones web y móviles. Se integra convenientemente con otras bibliotecas y marcos JavaScript, incluidos pequeños fragmentos de código reutilizables denominados componentes. Las bibliotecas de componentes de React no sólo optimizan el proceso de desarrollo de la interfaz de usuario, sino que también brindan una flexibilidad extrema debido a su alta modularidad.

Debido a la popularidad de REACT (175k estrellas en GitHub), los desarrolladores tienen casi infinitas bilbiotecas de interfaz de usuario de React.

![image](https://user-images.githubusercontent.com/91733073/187187976-a7e9983d-55cc-4301-9756-ee55744661ee.png)

Se han contemplado otras opciones como VUE JS o NextJS. El primero se descarta por la aplastante ventaja de REACT en las citadas encuestas de StackOverflow (doblando en popularidad 	React a VUE) y el segundo porque, aunque NextJS ofrece varias herramientas para minimizar el proceso de desarrollo, React tiene mejores recursos para el desarrollo front-end.

Para ver la creación de la aplicación en detalle, visite el siguiente [enlace](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#rehabtime---creaci%C3%B3n-aplicaci%C3%B3n).


## API REST
API significa Application Programming Interface (Interfaz de Programación de Aplicaciones), y es un medio que permite que diferentes aplicaciones se comuniquen entre sí, dando respuestas en tiempo real.

Roy Fielding definió REST en los 2000 como un estilo arquitectónico y una metodología comúnmente utilizados en el desarrollo de servicios de internet. REST significa Representatiol State Transfer (Transferencia de estado representacional)
	
Cuando se realiza una solicitud a través de una API REST, se envía una representación del estado actual del recurso al punto final. Esta representación puede ser en formato JSON (notación de objetos JavaScript), XML o HTML. Se elige JSON por ser el formato más utilizado, por ser independiente del idioma y por resultar fácil de leer por humanos.
	
Se pueden construir API REST de varias maneras, pero nosotros elegimos FETCH API que es un navegador integrado. Para ello, necesitaremos dos React Hook principales:
	
- [UseEffect Hook](https://reactjs.org/docs/hooks-effect.html): en React, realizamos solicitudes de API dentro del gancho `useEffect()`. Se procesa inmediatamente cuando se monta la aplicación o después de alcanzar un estado específico. La sintaxis es:
```
useEffect(() => {
    // your-data-fetching-goes-here
}, []);
```
	
- [UseState Hook](https://reactjs.org/docs/hooks-state.html): cuando solicitamos datos, debemos preparar un estado en el que se vayan a almacenar los datos cuando se devuelvan. Podemos guardarlo en una herramienta de gestión de estado como REDUX o en un objeto de contexto. O para simplificar las cosas, almacenamos los datos devueltos en el estado local de REACT.
```
const [posts, setPosts] = useState([]);
```

## API FETCH
Fetch API es un método integrado de JavaScript para recuperar recursos de un servidor o un punto final de API. Está integrado, por lo que no necesita instalar dependencias ni paquetes de terceros.
El método `fetch()` requiere un argumento obligatorio, que es la ruta o URL del recurso que desea obtener. Luego devuelve una _promesa_ para que pueda manejar el éxito o el fracaso utilizando los métodos then() y catch()
Un ejemplo básico sería:
```
fetch('https://your-url-goes-here.es/id=11')
   .then(response => response.json())
   .then(data => console.log(data));
``` 
Ahora creamos un estado en el código para almacenar los datos que recuperamos de la API, para poder usarlos luego en nuestra aplicación. Además, establecemos el valor predeterminado:

`const [data, setData] = useState(null);`
	
La mayor operación _then_ ocurre en el estado _useState_, cargando los datos al iniciar la aplicación. La operación _fetch_ tiene una promesa, que podemos aceptar o rechazar:
```
useEffect(() => {
  fetch('https://your-url-goes-here.es/id=11')
     .then((response) => console.log(response) );
}, []);
```
Sin embargo, cuando se devuelve un objeto respuesta, necesitamos convertirlo a JSON usando el método `json()`:
```
useEffect(() => {
               fetch(url, { signal: abortContr.signal })
                .then(res => {
                    console.log(res);
                    return res.json();
                }) .then(data => {
                    console.log(data);
                    setData(data);
               });
}, []);
```
Hasta ahora, hemos incluido la respuesta aceptada pero no la rechazada. La rechazada quedaría añadiendo:
```
useEffect(() => {
  fetch(url, { signal: abortContr.signal })
    .then(res => {
       console.log(res);
       return res.json();
    }) .then(data => {
         console.log(data);
         setData(data);
  }) .catch(err => {
    console.log('fetch aborted');
  });
}, []);
```
Hasta aquí habríamos hecho una petición **GET**.

### POST
El método POST añade datos desde un _endpoint_. Para ello, una vez se ha recibido un evento (clic con el ratón), usamos _preventDefault_ para evitar que se recargue-refresque el navegador. Después, nos creamos una entrada  _blog_ con los campos necesarios. Ponemos un flag _setIsPending_ a true hasta que termine la operación. 

Cogemos los datos con la API usando `fetch`, y ponemos el método POST con la nueva entrada _blog_ convertida a JSON. Una vez añadido lo mostramos por log y ponemos el flag _setIsPending_  a false. Por último, vamos a HOME ('/'). Quedaría así para añadir una entrada:
```
const handleSubmit = (e) => {
  e.preventDefault();
  const blog = {title, body, author, likes, image, comments};

  //console.log(blog);
  setIsPending(true);
  fetch('http://localhost:8000/blogs/', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body : JSON.stringify(blog)
  }).then(() => {
    console.log('new blog added');
    setIsPending(false);
  });
	
  history.push('/');
}
```

### DELETE
El método DELETE elimina datos desde un _endpoint_. Para ello, una vez se ha recibido un evento, usamos `fetch` con la URL y el identificador a eliminar. Una vez eliminado, nos vamos a HOME ('/'): Quedaría así para eliminar una entrada:
```
const handleClickDelete= () => {
  fetch('http://localhost:8000/blogs/' + blog.id, {
    method: 'DELETE'
    }).then(() =>{
       history.push('/')
    })
}
```
El uso de la API está alineada con las Historias de Usuario: [HU1](https://github.com/e89835/RehabTime/blob/main/doc/US1.md), [HU2](https://github.com/e89835/RehabTime/blob/main/doc/US2.md), [HU4](https://github.com/e89835/RehabTime/blob/main/doc/US4.md) y [HU5](https://github.com/e89835/RehabTime/blob/main/doc/US5.md).

## Buenas prácticas
- Como buenas prácticas se usa una configuración distribuida, separando el funcionamiento de la parte front-end y back-end.
- En caso de no poder entablar comunicación, saldrá un mensaje de error: _Failed to fetch_.
- La base de datos se hace en formato JSON, por ser el de mayor uso.
- Los métodos PUT y DELETE dentro del uso de la API REST están limitados a una única clase de creación _Create.js_ y una única clase de actualización de los detalles del blog _BlogDetails.js_ (me gusta, comentarios, etc.).
- Los métodos GET de la API REST se usan en dos clases: _Home.js_ y _App.js_. Esto se hace así para "engañar" a react antes de renderizar la aplicación.


## Logs
Para los logs en REACT, usamos la herramienta [console.log](https://www.npmjs.com/package/react-console-log). Se elige esta herramienta por su amplio uso, por estar incluida en los paquetes instalados por defecto, y por su facilidad de uso.

Para instalarla, usamos el comando `npm i react-console-log`. Una vez instalada, podemos usar cuatro tipos log:
- Log normal.
- Log de información.
- Log de atención.
- Log de error.

Ahora añadimos en App.js los cuatro tipos de log:

![image](https://user-images.githubusercontent.com/91733073/187191500-806b82d0-89c2-4410-8919-8a993478b895.png)

Y lo ejecutamos para ver las diferencias:

![image](https://user-images.githubusercontent.com/91733073/187191528-ba15338e-da0c-4a7a-90ab-a57af483f533.png)

![image](https://user-images.githubusercontent.com/91733073/187191542-0ced1854-0744-4805-8508-a17163e26d98.png)

Vemos que el tipo log y el tipo info muestran por pantalla el mensaje que hayamos puesto, mientras que el warning y error dan más información:

![image](https://user-images.githubusercontent.com/91733073/187191611-67d9bbc0-7cb2-4528-820d-e9bf025df6c0.png)

El uso de logs está incluido en la aplicación donde se ha considerado mayor relevancia. Para más información sobre console.log, se puede mirar la [documentación oficial](https://www.npmjs.com/package/react-console-log).

## Logs - Ampliación:
Como ampliación a los logs, se han creado los ficheros `Environment.ts`, `Logger.ts` y `react-app-env.d.ts`. 

Esto se hace para poder incluir en la aplicación logs de tres tipos:
- Log.
- Warning.
- Error.

Y que según el tipo de aplicación que desarrollemos y el flag que pasemos en la construcción de la aplicación, _devel_ o _prod_, se incluyan automáticamente todos los logs o sólo warning y error.

Los ficheros se pueden explorar aquí: [`Environment.ts`](https://github.com/e89835/RehabTime/blob/main/src/Environment.ts), [`Logger.ts`](https://github.com/e89835/RehabTime/blob/main/src/Logger.ts) y [`react-app-env.d.ts`](https://github.com/e89835/RehabTime/blob/main/src/react-app-env.d.ts). 


## Test
Los test en este Hito no han sufrido modificaciones, estando alineados con las Historias de Usuario.

La siguiente imagen muestra su ejemplo de ejecución:

![image](https://user-images.githubusercontent.com/91733073/187192858-07f1582c-30a1-45df-bc69-dd695eeecb6a.png)








# Rehabtime - Hito 4
## Travis CI
Para la integración continua (CI, por sus siglas en inglés, _Continuous Integration_) elegimos [Travis CI](https://www.travis-ci.com/). Travis CI es una plataforma de integración continua alojada que es gratuita para todos los proyectos de código abierto alojados en GitHub. Haciendo uso de un único archivo `.travis.yml` que contiene la información de nuestro proyecto, podemos ejecutar compilaciones automáticas con cada cambio en nuestra base de código. Se puede consultar más información en la [documentación oficial](https://docs.travis-ci.com/).

Para poder usar Travis CI, el primer paso es ir a la web y acceder con nuestra cuenta de GitHub:

![image](https://user-images.githubusercontent.com/91733073/186729317-a25728bb-5b2b-4e93-a4de-cb6b0c71320c.png)

Ahora hay que darle permisos para que pueda sincronizarse con GitHub:

![image](https://user-images.githubusercontent.com/91733073/186729466-9699404e-0192-47fa-9865-2f8cf1185622.png)

Y comprobamos que los permisos están dados y la aplicación se encuentra en GitHub:

![image](https://user-images.githubusercontent.com/91733073/186729658-9fe39efd-d3da-4065-a378-9c2fd93a621d.png)

A continuación, el primer paso es configurar el repositorio que queremos integrar, así como elegir el plan:

![image](https://user-images.githubusercontent.com/91733073/186729751-fa5b8754-590e-47c8-89a3-e1fec2130340.png)

Le damos permiso a todos los repositorios:

![image](https://user-images.githubusercontent.com/91733073/186729810-9befa4c6-f40d-4c7d-9f89-6a00c6a28a48.png)

Y seleccionamos nuestro repositorio:

![image](https://user-images.githubusercontent.com/91733073/186729869-bbe0d4ec-a15e-4023-b3c5-2ab5cfc13e34.png)

Seguidamente, hacemos nuestro fichero `.travis.yml` en GitHub:

![image](https://user-images.githubusercontent.com/91733073/186730021-7c84d848-9d03-4412-93e2-53de7a14a2ee.png)

A continuación seleccionemos el plan y ponemos nuestra tarjeta de crédito (sino, no funciona la integración):

![image](https://user-images.githubusercontent.com/91733073/186730242-b5e1686d-39ca-491a-8a87-a42898158b49.png)

Esto se debe a que desde noviembre de 2020, Travis CI tiene un nuevo sistema de pago, y tenemos que tener una tarjeta de crédito válida para integrar tareas.
Además, hay que tener activada la opción: _Consume paid credits for OSS_. Una vez configurado, vamos a Travis y vemos que se está ejecutando:

![image](https://user-images.githubusercontent.com/91733073/186730397-752b1545-6d06-4159-bdaa-7e4bef684fc8.png)

Y esperamos a que termine:

![image](https://user-images.githubusercontent.com/91733073/186730493-7205a6a6-39e7-4d59-8f59-3abc80c6f8a9.png)

Después, actualizamos el readme y añadimos la medalla de Travis en el README:

![image](https://user-images.githubusercontent.com/91733073/186730633-61b98509-a072-4b97-a822-b278c4894888.png)

Travis CI se lanzará con cada _commit_ que hagamos, pero podemos cambiar esto en la configuración de Travis CI:

![image](https://user-images.githubusercontent.com/91733073/186730722-6a88cc54-a361-4254-8594-99fa903d2c1a.png)


## Circle CI
Como sistema adicional de CI, elegimos [Circle CI](https://circleci.com/). Circle CI es una plataforma de integración continua y entrega continua. Circle CI es una de las plataformas más utilizadas, ejecutando casi un millón de trabajos al día en unas treinta mil organizaciones. Una de sus ventajas es que los trabajos se ejecutan rápidamente y las compilaciones se pueden optimizar. Para más información, se puede consultar la [documentación oficial](https://circleci.com/docs) y [_about_](https://circleci.com/docs/about-circleci).

Para comenzar el uso de Circle CI, primero nos vamos a la web donde accedemos con nuestra cuenta de GitHub:

![image](https://user-images.githubusercontent.com/91733073/186732737-95aaf641-df42-4be8-84ef-1a7e8d8a9f43.png)

Autorizamos y damos permiso a Circle CI en GitHub:

![image](https://user-images.githubusercontent.com/91733073/186732844-c4b029f7-1ce2-4348-b9a7-20a984c508d2.png)

Y seleccionamos nuestro usuario y repositorio. Además, creamos inicialmente el fichero `.circleci/config.yml`:

![image](https://user-images.githubusercontent.com/91733073/186733039-92f4ef48-e263-4f4c-b232-47ca5facbd19.png)

El fichero de configuración queda así:

![image](https://user-images.githubusercontent.com/91733073/186733161-3babc91c-51ea-4174-bcab-1680e72ef01a.png)

A continuación, nos mandan un correo con el aviso de haber añadido una nueva clave pública y se lanza el trabajo en Circle CI:

![image](https://user-images.githubusercontent.com/91733073/186733341-144084f4-0612-4e7e-a66c-7ffc0e9581d5.png)

Una vez terminado, vemos la medalla en verde y podemos ver los detalles de ejecución:

![image](https://user-images.githubusercontent.com/91733073/186733448-93c99cb1-a275-4641-ada6-b95ff5686513.png)

Por último, añadimos nuestra medalla de Circle CI en nuestro `Readme.md`:

![image](https://user-images.githubusercontent.com/91733073/186733538-1a1f7ddb-0bbd-4d4a-b831-d3b98db86a4b.png)

## Buenas prácticas
Como buenas prácticas dentro de este Hito 4, se mencionan las siguientes:
- Sólo se ejecuta el test en el fichero Travis CI.
- Circle CI se lanza siempre con cada commit.
- Uso de _checkout_ en Circle CI, como paso especial para verificar el código fuente configurado ([más info](https://circleci.com/docs/configuration-reference#checkout)).
- En Travis CI usamos cache de contenido para acelerar la construccion del proceso:
  - Esto se consigue activando en ON las opciones _Build pushed branches_ & _Build pushed pull request_.
- En Travis CI, lanzar los test de forma única y no con el _watcher_.

![image](https://user-images.githubusercontent.com/91733073/186736086-4dc5760b-9864-4b54-8c27-2eb562d46025.png)

## Docker + Travis CI
Por último se pide usar el contenedor Docker del Hito 3 con CI. Para incluir CI en nuestra imagen docker, nos vamos al fichero Travis CI y lo modificamos como queda:

![image](https://user-images.githubusercontent.com/91733073/186737392-1fc91086-f986-4491-b7c9-6be56528a080.png)

Ahora, nos vamos a Travis CI y vemos que los tests se han ejecutado correctamente:

![image](https://user-images.githubusercontent.com/91733073/186737485-b433ea53-5785-4784-94fe-416ccf0ed62a.png)

De esta forma podremos ejecutar los test automáticamente de Travis en Docker al hacer Commit.
Como comentario importante, el contenedor no se para, dado que se lanza en modo _watcher_.

Para lanzar el contenedor de test con una única ejecución, cambiamos el script añadiendo `CI=true`. Al añadir este comando se fuerza el Test a ejecutarse en modo CI, ejecutándose sólo una vez en lugar de lanzar el _watcher_. El comando quedaría:

`docker run -d -p 127.0.0.1:80:3000 -e CI=true e89835/rehabtime npm run test`

Y el fichero `.travis.yml` quedaría:

![image](https://user-images.githubusercontent.com/91733073/187028037-0f26ec16-9bb9-4ca9-9d2b-107320093764.png)

De esta manera, una vez lanzado el test, se termina la ejecución como muestra la siguiente imagen:

![image](https://user-images.githubusercontent.com/91733073/187028180-7570d537-b97d-4b4e-b07b-234dd26c9838.png)






# RehabTime - Hito 3
Primero, comenzamos eligiendo [Node Apline](https://hub.docker.com/_/node) ejecutado en [Docker](https://docs.docker.com/get-started/overview/) como contenedor base.
- Elegimos **Docker** por ser un PaaS abierto, por su facilidad de uso y por su amplia utilización en la actualidad. Docker permite el despliegue de aplicaciones dentro de contenedores, proporcionando una capa adicional de abstración y automatización. Docker usa características Linux, permitiendo que varios contenedores se lancen dentro de una única instancia. Además, el kernel de Linux aisla la vista que tiene una aplicación de su entorno operativo, además de proporcionar aislamiento de recursos. Por último, la compatibilidad es muy elevada, pudiendo ejecutarse en local, nubes públicas, privadas y/o mixtas. Podemos ver más información en la [documentación oficial](https://docs.docker.com/) y en [Wikipedia](https://en.wikipedia.org/wiki/Docker_(software)).
- Elegimos **Node-Alpine** por ser una distribución basada en Linux diseñada para ser pequeña, simple y segura. A diferencia de la mayoría de las otras distribuciones de Linux, Alpine usa *musl* y *BusyBox* en lugar de *Glibc* y *GNU Core Utilities* y *OpenRC* para su sistema de inicio en lugar de *systemd*. Por razones de seguridad, Alpine compila todos los archivos binarios del espacio de usuario como ejecutables independientes de la posición con protección contra destrucción de pila. Debido a su pequeño tamaño, se usa comúnmente en contenedores que brindan tiempos de arranque rápidos. Podemos ver más información en la [documentación oficial](https://hub.docker.com/_/node).

## Dockerfile
Para crear el Dockerfile, primero comenzamos por la instalación de [Docker Desktop](https://www.docker.com/products/docker-desktop/):

![image](https://user-images.githubusercontent.com/91733073/185759743-e05751b3-28e5-4c9d-85a2-cb8c1bbe6eb0.png)

A continuación, instalamos la extensión de Docker en VS Code:

![image](https://user-images.githubusercontent.com/91733073/185759765-e6c03ca5-c7d7-4dc5-b978-6845f00781bb.png)

El siguiente paso es crear los ficheros necesarios para Docker, para ello clicamos Ctrl+Shift+P:

![image](https://user-images.githubusercontent.com/91733073/185759778-21f1dbe3-941e-4aba-83ed-ba7eac22040a.png)

Seleccionamos *Add Docker Compose files to Workspace* y siguientes predeterminados, y escribimos nuestro fichero Docker. Una vez terminado, construimos la imagen con el comando `docker build -t node-docker --target test`. Para esta imagen estamos usando [Node 14.15.4](https://nodejs.org/en/blog/release/v14.15.4/).

![image](https://user-images.githubusercontent.com/91733073/185759895-9df6b8ff-7f00-4a17-a158-000359e03b0c.png)

Seguidamente, nos vamos a Docker Desktop y comprobamos que la imagen ha sido creada:

![image](https://user-images.githubusercontent.com/91733073/185759937-a288d933-6ae8-4349-bd9f-7a4d5c91538a.png)

Creamos el contenedor _strange_perlman_ y lo lanzamos en línea de comandos (CLI): 

![image](https://user-images.githubusercontent.com/91733073/185759964-12771ec5-a1bd-418b-8dc1-817a4f561c4f.png)

Se nos abre nuestro contenedor, con lo que ejecutamos los tests desde la CLI del contenedor:

![image](https://user-images.githubusercontent.com/91733073/185759988-7c9f89a8-818b-4e88-a4c3-7e6a5f3f5d8a.png)

Vemos que la suite de test se ejecutan y pasan correctamente:

![image](https://user-images.githubusercontent.com/91733073/185760000-16e1e250-f10c-444a-843f-612e8dc7e73c.png)

### Alpine
Con el apartado anterior ya estaríamos, pero el contenedor tiene un tamaño de 1.45 GB y se puede optimizar. Para ello, elegimos la versión [Alpine](https://hub.docker.com/_/alpine) 10:

![image](https://user-images.githubusercontent.com/91733073/185760345-3b3a03c9-82cf-4188-91cf-7d0873d0e29e.png)

Construimos la imagen con el comando `docker build -t node-alpine --target test` y nos vamos a Docker Desktop a comprobar que se ha creado correctamente:

![image](https://user-images.githubusercontent.com/91733073/185760363-abd8c874-d720-45cb-a6b2-be778f0c7ea2.png)

Creamos el contenedor _dazzling_edison_ y lo lanzamos en línea de comandos (CLI):

![image](https://user-images.githubusercontent.com/91733073/185760425-3fe0f9ac-9d8e-4492-8eb8-52b6b94f754d.png)

Por último, ejecutamos la suite de tests y vemos que se ejecutan correctamente:

![image](https://user-images.githubusercontent.com/91733073/185760448-dbfd50f3-7d83-426b-8d3e-430a393288ea.png)

De esta manera, conseguimos el mismo resultado (la correcta ejecución de los tests) pero al usar la imagen Alpine, hemos pasado de casi 1.5 GB a algo más de 500MB, una reducción a casi un 33% del total.

## Docker Hub
Para subir la imagen a [Docker Hub](https://hub.docker.com/), nos vamos a Docker Desktop, y en la imagen que queremos subir, clicamos en los tres puntos y hacemos clic en _Push to Hub_: 

![image](https://user-images.githubusercontent.com/91733073/185760635-7bd4d8f5-11da-4bb0-88f9-d98fffdcaf1c.png)

El siguiente paso es abrir una terminal, hacer login, etiquetar la imagen y subirla usando _push_:
```
login -u e89835
docker tag node-alpine:latest e89835/rehabtime:rehabtime-node
docker push e89835/rehabtime:rehabtime-node
```
![image](https://user-images.githubusercontent.com/91733073/185760713-811b658e-f6f5-4f06-8b03-e50a9d98189f.png)

Pasados unos segundos, vemos que ha terminado con éxito, y podemos verla en Docker Hub:

![image](https://user-images.githubusercontent.com/91733073/185760750-d4f58773-6f06-4f06-a031-1c861d8e3880.png)

![image](https://user-images.githubusercontent.com/91733073/185760754-f05cc0b9-1c9e-42cb-9cee-fe281d6ab125.png)

Por último, actualizamos la información y podemos acceder a la imagen con este [enlace](https://hub.docker.com/repository/docker/e89835/rehabtime):

![image](https://user-images.githubusercontent.com/91733073/185760777-98b6a825-de58-4434-9ab8-9541ee34b63c.png)

Para un uso futuro, y automatizar la subida a Docker Hub, nos creamos el siguiente script:

![image](https://user-images.githubusercontent.com/91733073/185760812-ad0683fb-08ec-4a94-b71a-7bf726b33ead.png)

Al lanzar el script, necesitamos poner dos argumentos, siendo estos nuestro usuario y contraseña.
Este método fue el usado inicialmente, pero por tediosidad, se decide usar GitHub Actions para la publicación de la imagen Docker. Este [enlace](https://github.com/e89835/RehabTime/blob/main/doc/Documentation.md#automatic-updates) muestra el detalle.

## GitHub Container Registry
Elegimos GitHub Container Registry ([GHCR](https://docs.github.com/en/packages)) que es una versión mejorada y rediseñada de paquetes de GitHub. Además de reemplazar al servicio Paquetes Docker representa un cambio fundamental en la forma que GitHub va a proporcionar paquetes a sus usuarios, dado que vincula los paquetes a organizaciones y cuentas en lugar de repositorios. 
GHCR cuenta con su propia URL: ghcr.io, y también representa un paso más hacia un enfoque nativo de la nube para los flujos de trabajo CI/CD.

Para usarlo, comenzamos por crear nuestro PAT ([Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)). Nos vamos a la versión web, Herramientas / PAT:

![image](https://user-images.githubusercontent.com/91733073/185761163-00f606c4-d4c0-4013-b4c5-706cd7a0e751.png)

Y creamos un PAT llamado CR_PAT marcando las opciones _repo_, _write_ y _delete_:

![image](https://user-images.githubusercontent.com/91733073/185761218-a57d830d-7db6-4ea1-9639-38233e63b026.png)

Después, abrimos la [Git Bash](https://gitforwindows.org/) y exportamos la clave. Comprobamos el funcionamiento haciendo login usando dicha clave:

![image](https://user-images.githubusercontent.com/91733073/185761317-4494965f-b59d-4336-86c9-1464152f18e4.png)

A continuación, añadimos la etiqueta y hacemos push de la imagen en GHCR:

![image](https://user-images.githubusercontent.com/91733073/185761326-2ef193f0-2269-4950-b88e-f9a641f79d44.png)

Una vez terminado, nos vamos a GitHub web, y en paquetes, vemos que se ha creado correctamente nuestro paquete:

![image](https://user-images.githubusercontent.com/91733073/185761345-f3eac5d9-822f-49ba-bf32-5a8a88266f7e.png)

El paquete por defecto se crea como privado, así que lo hacemos público en las herramientas del paquete creado:

![image](https://user-images.githubusercontent.com/91733073/185761383-366ab9eb-11bc-4643-989f-dfd52f198f3f.png)

Y lo enlazamos al repositorio de la aplicación:

![image](https://user-images.githubusercontent.com/91733073/185761393-3596b012-fd34-47c3-9840-205a148359fa.png)

Con lo que ahora podemos acceder directamente a través del [enlace público](https://github.com/e89835?tab=packages) y desde el [repositorio del proyecto](https://github.com/e89835?tab=packages&repo_name=RehabTime).

![image](https://user-images.githubusercontent.com/91733073/185761440-fb17637f-5b4e-40ac-8bf8-96aaa0cc8d75.png)

![image](https://user-images.githubusercontent.com/91733073/185761449-325c8117-5ab6-4dcb-81b4-091248163b38.png)

## Automatic Updates
Elegimos usar [GitHub Actions](https://github.com/features/actions) para publicar la imagen de Docker automáticamente en vez del uso del script de PowerShell, por su integración automática al hacer un _pull request_ o _pull_. 

### Docker Action
Para crear una GitHub Action con Docker, primero generamos los secretos usuario y contraseña. Para ello, nos vamos a _Settings/Actions/Secret/New Secret_ y ponemos el usuario y la contraseña:

![image](https://user-images.githubusercontent.com/91733073/187301935-1d09c6db-8a49-4fe0-8053-792694f888b4.png)

Para la contraseña, nos vamos a DockerHub y generamos un Token:

![image](https://user-images.githubusercontent.com/91733073/187301986-784799ab-966d-418a-b250-a2a80be7566b.png)

Copiamos el Token y lo añadimos en GitHub:

![image](https://user-images.githubusercontent.com/91733073/187302190-c5a8556b-4d31-4378-bead-a29397f7c69a.png)

![image](https://user-images.githubusercontent.com/91733073/187302217-99f0c8a0-923b-4e75-a4de-b075eac8be5f.png)

Ahora, en Actions, seleccionamos Docker Image y escribimos la acción de la publicación:

![image](https://user-images.githubusercontent.com/91733073/187302276-2b05f81c-33e4-4449-9a8f-b78b54ec2b27.png)

Ahora esperamos a que se ejecute:

![image](https://user-images.githubusercontent.com/91733073/187302306-0e001d9c-7fa4-4432-bbba-f16fc05211d0.png)

Y pasen los test correctamente:

![image](https://user-images.githubusercontent.com/91733073/187302423-73f14505-e717-41a7-80c7-affb216c9732.png)

### GHCR Action
Para crear la Acción para publicar en GitHub Container Registry, nos vamos en GitHub a _Settings/Developer settings/PAT_ y generamos un Token de Acceso Personal.

En GitHub, en _Settings/Actions/Secret/New Secret_ añadimos el secreto como queda:

![image](https://user-images.githubusercontent.com/91733073/187302830-8cb7d31a-135f-42dc-afa3-18bab9dfa14a.png)

Ahora añadimos la acción en el apartado Actions, escribiéndo el código de la acción:

![image](https://user-images.githubusercontent.com/91733073/187302937-590d6286-1e9c-41e0-ab8d-50a3e3fda3a0.png)

Hacemos _commit_ y vemos que se empiezan a ejecutar todas las acciones, incluida la GHCR recién creada:

![image](https://user-images.githubusercontent.com/91733073/187303015-c216302c-1022-48fa-b1fc-94f26714daef.png)

Finalmente, esperamos a que termine todo correctamente:

![image](https://user-images.githubusercontent.com/91733073/187303042-228541fb-fdd8-4064-9dfa-524ea9290295.png)











# RehabTime - Hito 2
Para la realización del Hito 2, se pide:
- Elegir y configurar un gestor de tareas.
    - En nuestro caso elegimos el gestor de tareas **NPM**, dentro del eje estándar dentro de los gestores de tareas. 
        - NPM (Node Package Manager) es el gestor de tareas de JavaScript, mantenido por nmp INC.
        - Consiste en un cliente de línea de comandos también llamado npm y una base de datos en línea de paquetes públicos y privados. 
        - Se accede al registro a través del cliente, y los paquetes disponibles se buscan a través del sitio web de npm. 
        - Para mayor detalle, se puede consultar la [documentación oficial](https://docs.npmjs.com/about-npm) así como la entrada de [Wikipedia](https://en.wikipedia.org/wiki/Npm_(software)).

- Elegir y usar una biblioteca de aserciones.
    - En nuestro caso elegimos la biblioteca de aserciones **getByText**. 
        - getByText forma parte de ByText, cuya función es buscar todos los elementos que tengan un nodo de texto que coincida con el texto a encontrar.
        - Podemos encontrar más info y ejemplos en la [documentación oficial](https://testing-library.com/docs/queries/bytext/).

- Elegir y usar un marco de pruebas.
    - En nuestro caso elegimos el marco de pruebas **React-Testing-Library** y **JEST**. 
        - La biblioteca de pruebas de React fue creada por Kent Dodds y cuenta con un amplio apoyo en la comunidad de desarrolladores. Esta librería es un conjunto de utilidades de React DOM y permite probar de manera sencilla los componentes y simular el comportamiento de usuario. Entre sus ventajas está la consulta de elementos dentro de textos, etiquetas, etc., el disparo de cualquier evento y la espera de que aparezca un elemento.
        - Jest es el marco de trabajo más popular para pruebas con más de 16 millones de descargas a la semana. Fue creado y es mantenido por Facebook. Además, también ha sido adoptado por Airbnb, Uber y otras empresas. Jest viene con funciones de ejecución de pruebas y aserción. Entre sus mayores ventajas está su rapidez, realización de pruebas de métodos instantáneos, paralelización y asíncronos, simulación de funciones, sintaxis estándar y gran compatibilidad.

Una vez que hemos elegido las herramientas, instalamos JEST y RTL con los comandos:
```
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
```

Comprobamos que está instalado correctamente mirando las dependencias en _package.json_:

![image](https://user-images.githubusercontent.com/91733073/184546535-74fe77e8-d807-44f3-ad4a-781d6c52b705.png)

Ahora programamos los ficheros JavaScript siguiendo las Historias de Usuario (HU - US) del Hito 1:
- App.js
- Contact.js
- Create.js
- Home.js
- Search.js

Y hacemos los tests para los ficheros:
- App.test.js
- Contact.test.js
- Create.test.js
- Home.test.js
- Search.test.js

Por último, ejecutamos los tests y comprobamos que se han realizado correctamente:

![image](https://user-images.githubusercontent.com/91733073/184546760-e630d1ca-9e1b-494a-994d-cb56919c1c20.png)




# Rehabtime - Creación aplicación
Nuestra aplicación se hará en [React](https://es.reactjs.org/), que es una bilbioteca JavaScript para construir interfaces de usuario.
Comenzaremos por crear nuestra aplicación, donde nos iremos a la carpeta donde queramos guardar el proyecto, y ejecutaremos el comando:

`npx create-react-app@latest rehabtime`

Esto empezará a crear la aplicación como muestra la siguiente imagen:

![image](https://user-images.githubusercontent.com/91733073/185757749-7528d4f6-e32e-43b2-81d3-fcce50f79c15.png)

Una vez terminado, obtenemos la imagen siguiente:

![image](https://user-images.githubusercontent.com/91733073/185757763-6dd3e9fb-77a7-44d6-87c5-2325f8df948e.png)

A continuación, para abrir VS Code, nos vamos a la carpeta creada y ponemos el comando: `code .`:

![image](https://user-images.githubusercontent.com/91733073/185757786-1ee72711-bbe0-4675-a6e3-199b0af4913b.png)

VS Code se nos abrirá automáticamente, y veremos un ejemplo muy sencillo en React:

![image](https://user-images.githubusercontent.com/91733073/185757809-8a29856c-09cb-43a0-910a-6b482cef7953.png)

Y si lo ejecutamos, veremos le ejecución de la aplicación de prueba en React:

![image](https://user-images.githubusercontent.com/91733073/185757839-49ac7352-7453-482f-91d4-df9758483111.png)

Ahora, procedemos a instalar las dependencias mostradas en [fichero_tareas](https://github.com/e89835/RehabTime/blob/main/doc/fichero_tareas):
```
npm install react-router-dom@5
npm install styled-components
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
```

Por último, procedemos a crear y programar los distintos ficheros de la aplicación:
1. **App.js**: En este fichero es la raíz de la aplicación, en el controlamos el diseño y la navegación general. Todos los componentes tienen acceso.
2. **Announcer.js**: En este fichero pondremos lo necesario para poder buscar mientras escribimos (search as you type).
3. **BlogDetails.js**: En este fichero pondremos los detalles de cada entrada del blog, tendremos en especial consideración el identificador de la entrada. Esto permitirá usar la API para borrar y actualizar un elemento, por ejemplo.
4. **BlogList.js**: En este fichero está recogida la lista de todas las entradas disponibles en el blog. Para ello, usaremos props, dado que es más reusable, dado que los props permiten pasar datos de un padre a un hijo.
5. **Contact.js**: En este fichero vemos información sobre la aplicación.
6. **Create.js**: En este fichero crearemos las nuevas entradas al blog.
7. **data/db.json**: Este fichero se usará como base de datos, usando un servidor json en el puerto 8000 que tendremos que lanzar en una terminal desde VS Code. Este fichero incluirá todas las entradas del blog. Se usa esta forma para simplificar la instalación y configuración de una base de datos de un proveedor como MySQL o MongoDB.
8. **GlobalStyles.js**: En este fichero definimos un componente y le asignamos un fondo y un color, con lo que, cuando cliquemos el botón noche, se hará la transición en el tiempo deseado (0.5 s).
9. **Home.js**: Pantalla de bienvenida a la página.
10. **Index.css**: En este fichero están todos los estilos de la aplicación.
11. **NavBar.js**: Barra superior de la página, con título y los botones:
- Home.
- Contacto.
- Buscar.
- Crear blog.
- Modo noche.
En este fichero usaremos “Link to” en vez de “a href” para enlazar las páginas, mejorando así la eficiencia de la aplicación.
12. **NotFound.js**:  En este fichero pondremos una página para cuando accedamos a cualquier URL no contemplada en la aplicación, es decir, el error 404.
13. **Search.js**: En este fichero haremos las búsquedas de la aplicación.
14. **Theme.js**: En este fichero definimos los objetos claro y oscuro, con los colores que usará el fondo de la aplicación.
15. **useFetch.js**: En este fichero tenemos un custom hook, es decir, hacemos la lógica externa para recoger los datos, haciendo el código más reusable, poniendo el componente en un fichero aparte para poder reutilizarlo exportándolo, en vez de tener que reescribirlo cada vez.
Además, usaremos una regla de limpiado para que no se produzcan alertas en caso de cambiar muy rápido dentro de la aplicación de una página a otra.



# RehabTime - Hito 1
Para la realización de este Hito 1, es importante entender:
- Qué es el concepto de proyecto y cómo se organiza.
- Que los Hitos son Productos Mínimamente Viables, que recogen los deseos del usuario, aportan valor y maximizan los recursos del equipo.
- Que las Historias de Usuario y los Roles han de estar relacionados con la lógica de negocio.
- Que la aplicación ha de aportar:
    - Beneficios para el usuario.
    - Lógica de negocio.
- Que las HU azanzan con los issues.
- Que hay que tener un plan.
- Que el código importa.

Todo lo anterior viene explicado en: 
- Los [apuntes](https://github.com/JJ/CC/blob/master/documentos/proyecto/1.Infraestructura.md) del profesor.
- Los apartados [Servicios](https://jj.github.io/curso-tdd/temas/servicios.html), [Diseño](https://jj.github.io/curso-tdd/temas/dise%C3%B1o.html) y [A Programar](https://jj.github.io/curso-tdd/temas/a-programar.html) en el curso [TDD](https://jj.github.io/curso-tdd/) del profesor.
- En la [guía de Atlassian](https://www.atlassian.com/es/agile/project-management/user-stories) sobre las HU.
- En el [blog de Roman Pichler](https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/) con pistas para escribir buenas HU.
- En el [blog de Roman Pichler](https://www.romanpichler.com/blog/agile-scenarios-and-storyboards/) donde explica los escenarios ágiles y los _storyboards_.
- En el [blog Zenhub](https://zenhub.medium.com/beginners-guide-to-using-epics-and-milestones-in-github-c0052bfa9de0) sobre cómo usar épicas en GitHub.
 
Por último, para la creación de la etiqueta _user-stories_, seguimos la [documentación oficial](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label).
Comprobamos que tenemos la etiqueta creada en el apartado Issues / Etiquetas:
![image](https://user-images.githubusercontent.com/91733073/183288466-27de9332-d922-4859-9a89-066639c65dc0.png)




# RehabTime - Hito 0
### Descarga de Git
- Para descargar Git, acudimos al [centro de descargas](https://git-scm.com/download/win). Descargamos y ejecutamos el instalador.

### Creación de clave GPG
Para crear las claves privadas GPG, seguimos la [documentación oficial](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).

1. Comenzamos con la descarga de la herramienta de línea de comandos GPG, en nuestro caso, Gpg4win.
 
![0](https://user-images.githubusercontent.com/91733073/178247203-6edd0e0a-27aa-416a-b623-19e4fc5baa94.png)


2. Una vez descargada, ejecutamos Gpg4win.

![1](https://user-images.githubusercontent.com/91733073/178247218-acb45ca2-7f68-4a2f-a677-ffcc44583593.png)


3. Generamos la clave:
 
![2](https://user-images.githubusercontent.com/91733073/178247235-61adf065-373b-4998-906f-30baf8687ce7.png)


4. Protegemos la clave con una contraseña alfanumérica:

![3](https://user-images.githubusercontent.com/91733073/178247302-a742129b-403b-4d30-9cbd-b4048cdc0c68.png)


5. Comprobamos que la clave se ha creado correctamente.

![4](https://user-images.githubusercontent.com/91733073/178247305-0d23a38c-b95e-4060-a4b0-49bdaf8542f1.png)


6. A continuación, abtimos la Git Bash, y ponemos el siguiente comando:
```
$ gpg --full-generate-key
```
- Después, rellenamos la información solicitada usando valores por defecto. 
- Nos saldrá un pop-up para proteger la clave con una contraseña alfanumérica. 
- Introducimos la contraseña  y aceptamos.

![6](https://user-images.githubusercontent.com/91733073/178249263-7c13ebc4-e26b-4aac-81f6-ca58cdbb946c.png)

- Esperamos unos segundos y vemos que la clave está creada.

![5](https://user-images.githubusercontent.com/91733073/178247308-864ffcfe-096b-4027-a4e5-57710c633653.png)


7. Ahora mostramos la parte larga de la clave GPG con el formato:
```
$ gpg --list-secret-keys --keyid-format=long
```
8. Después, imprimimos la forma larga de la clave en formato ASCII, usando el siguiente comando:
```
$ gpg --armor --export CLAVE-QUE-QUEREMOS-IMPRIMIR
```

![8](https://user-images.githubusercontent.com/91733073/178247313-4bc542ab-5e73-48ba-b1c7-1e04e05f9931.png)

9. El siguiente paso es copiar la clave GPG y añadirla a GitHub.
- Para ello, nos vamos a nuestro perfil, Herramientas, y claves SSH y GPG.
- Bajo GPG, clicamos añadir nueva clave.
- Copiamos la clave y la añadimos.

![9](https://user-images.githubusercontent.com/91733073/178247315-3511ba01-b8a2-49d5-b87a-bd4760147654.png)

10. Comprobamos que la clave GPG está añadida.


![10](https://user-images.githubusercontent.com/91733073/178247317-9f8273dd-45a7-44d2-944d-61e9f15adaf7.png)

### Creación de clave SSH
Para crear las claves privadas SSH, seguimos la [documentación oficial](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

1. Comenzamos generando la clave SSH en la Git Bash, dejando los valores por defecto, con el siguiente comando:
```
$ ssh-keygen -t ed25519 -C "poner-aqui-tu-email@ejemplo.com"
```

![11](https://user-images.githubusercontent.com/91733073/178247319-e68e9f14-7c93-4317-bd20-abd07995c328.png)

2. Ahora, añadimos la clave SSH al agente SSH.
- Para ello, nos aseguramos que el agente se esté ejecutando, y lanzándolo en segundo plano con el comando:
```
$ eval "$(ssh-agent -s)"
> 2002
```
- Además, añadimos la clave SSH privada al agente con el comando:
```
$ ssh-add ~/.ssh/id_ed25519
```

![12](https://user-images.githubusercontent.com/91733073/178247320-f589bc6f-bb9d-4514-9cd0-526c5c6a9ced.png)

3. Seguidamente, copiamos la clave SSH y la añadimos a GitHub.
- Para ello, nos vamos a nuestro perfil, Herramientas, y claves SSH y GPG.
- Bajo SSH, clicamos añadir nueva clave.
- Copiamos la clave y la añadimos.
4. Por último, comprobamos que esté añadida correctamente.
![13](https://user-images.githubusercontent.com/91733073/178252060-172550d1-7804-4205-94bf-bdc8e9ccf7b6.png)


### Configuración correcta del nombre y correo
Para configurar correctamente el correo y el nombre, nos vamos a las herramientas en nuestro perfil.
- Hacemos clic en perfil público.
- Editamos nuestro nombre: *e89835*.
- Editamos nuestro correo electrónico: *har.....@hotmail.com*.
- Añadimos la UGR bajo el campo compañía.
- Y ponemos la localización en Granada, España.

![14](https://user-images.githubusercontent.com/91733073/178252052-b54846f9-c9d0-40aa-8340-0c814606ce9a.png)


### Configuración MFA
Para configurar correctamente el MFA en GitHub, nos vamos a las Herramientas en nuestro perfil, y clicamos Contraseña y Autenticación.
1. Inicialmente, seleccionamos el uso de aplicación de autenticación para el 2FA.

![15](https://user-images.githubusercontent.com/91733073/178252058-5ceaff01-f164-495a-aadc-725f15c2f84c.png)

2. A continuación, elegimos una aplicación de autenticación, en nuestro caso, MS Authenticator.
- Leemos el QR con la apliación móvil.
- Introducimos el OTP en la web.
- Salvamos los códigos de recuperación.
- Clicamos aceptar.
3. Ahora podemos comprobar que el MFA está funcionando.
 
![16](https://user-images.githubusercontent.com/91733073/178247297-5c822cf2-6de8-4bd8-bcbc-f6c429682dc0.png)

4. Por último, añadimos como mecanismo alternativo de recuperación (*fallback*) el SMS a nuestro número de móvil.
- Introducimos el prefijo y el móvil: +34 6XX XXX XX0.
- Introducimos la clave enviada por SMS en la web.
- Aceptamos y comprobamos que nuestro móvil está como método alternativo de recuperación.
![17](https://user-images.githubusercontent.com/91733073/185757573-d13d29e8-f60a-46bf-95b0-45963f1f231c.png)

