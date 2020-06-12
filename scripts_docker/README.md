# Compilador TS

Copiar "compile_ts.sh" en la carpeta "src" donde estan los archivos ".ts". Acceder al directorio "src" y ejecutar: 

```sh
$ ./compile_ts.sh . ../js
```

Siendo "." el directorio actual y "../js" la carpeta "js" que está al mismo nivel que "src".
Para detenerlo, ejecutar:
```sh
$ docker stop ts_compiler
```

# Servidor estático HTTP

Copiar "serve_http.sh" a la carpeta con el sitio web (donde está index.html), acceder a dicho directorio y ejecutar:

```sh
$ ./serve_http.sh . 8000
```

Siendo "." el directorio actual y 8000 el puerto. Para comprobar el funcionamiento acceder desde un navegador a localhost:8000
Para detenerlo, ejecutar:
```sh
$ docker stop http-server
```

# Servidor de PHP

Copiar "serve_php_app.sh" a la carpeta con el sitio web (donde está index.php), acceder a dicho directorio y ejecutar:

```sh
$ ./serve_php_app.sh . 8000
```

Siendo "." el directorio actual y 8000 el puerto. Para comprobar el funcionamiento acceder desde un navegador a localhost:8000/index.php
Para detenerlo, ejecutar:
```sh
$ docker stop php-server
```

# Red
para laventar la red:

```sh
docker network create --driver bridge mysql-net
```

# Motor de base de datos

Copiar "start_mysql.sh" a una carpeta llamada "docker_mysql". Acceder a dicho directorio y crear la carpeta "database". 
Luego ejecutar:

```sh
$ ./start_mysql.sh mysql-net ./database
```

Para detener el contenedor ejecutar docker stop mysql-server


# PHP MyAdmin

Copiar el script "run_phpadmin.sh" a la carpeta "docker_mysql" creada previamente. Luego ejecutar:


```sh
$ ./run_phpadmin.sh mysql-net mysql-server 8085
```

Luego abrir un browser en la url: http://localhost:8085 y deberá abrirse phpmyadmin, entrar con usuario "root" y password "userpass".

Para detener el contenedor ejecutar docker stop phpadmin


# Servidor de PHP con MySQL

Ejecutar previamente el script que levanta el motor de la base de datos.Luego copiar "serve_php_app_net.sh" a la carpeta con el sitio web (donde está index.php), acceder a dicho directorio y ejecutar:

```sh
$ ./serve_php_app_net.sh . 8000
```

Siendo "." el directorio actual y 8000 el puerto. Para comprobar el funcionamiento acceder desde un navegador a localhost:8000/index.php
Para detenerlo, ejecutar:
```sh
$ docker stop php-server
```

# Servidor de NodeJS con MySQL

Ejecutar previamente el script que levanta el motor de la base de datos.Luego copiar "serve_node_app_net.sh" a la carpeta con el sitio web (donde está index.html), acceder a dicho directorio y ejecutar:

```sh
./serve_node_app_net.sh "$PWD" ws/index.js 8000 mysql-net
```

Siendo "." el directorio donde estan los archivos del frontend y "ws" donde están los archivos de backend.
El puerto 8000 es el que debe usarse en el navegador e internamente el codigo de node debe usar el puerto 3000
Para que esto funcione se debe iniciar previamente el container de red y mysql.
 

# Correr todo con Docker compose

Se requiere tener instalado Docker compose. Copiar el archivo "docker-compose.yml" en la raiz del sitio web. 
Crear la carpeta "database" en la raiz del sitio web.

Luego ejecutar

```sh
$ docker-compose up
```

Se levanta el servidor PHP, para nuestra aplicación en el puerto 8081 y PhpMyAdmin en el puerto 8082. 
El usuario para entrar a la base MySQL es root y la contraseña userpass.

Presionar ctrl+c para finalizar los procesos.



