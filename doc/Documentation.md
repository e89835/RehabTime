# Documentation
En este apartado está una documentación extendida de la realización de cada uno de los hitos.


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
´npm install --save-dev @testing-library/react´
´npm install --save-dev @testing-library/jest-dom´

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

