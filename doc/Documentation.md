# Documentation
En este apartado está una documentación extendida de la realización de cada uno de los hitos.


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
![17](https://user-images.githubusercontent.com/91733073/178247301-11c638d2-239f-44ec-8872-7ad3aba2c004.png)
