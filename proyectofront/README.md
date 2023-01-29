# PROYECTO 5 FRONT CON REACT
***
Se crea la parte frontal de una pagina web con React de Javascript.
***
## Tabla de contenido
1. [Header](#Header)
2. [Body](#Body)
3. [Como funciona](#Como-funciona)

### General Info
***
La pagina web es reactiva segun las peticiones que se realicen, hara llamadas a nuestra API que creamos en el proyecto anterior,
tendra un [Header] estatico y un [body] que sera dinamico.

Cada usuario debera estar logeado en la pagina para poder alquilar peliculas en la plataforma.

Cuando un cliente se logea correctamente su nombre aparecera en el Header en el cual podra entrar a su perfil.

### Header

* Tenemos un logo [START] en el cual podemos darle click en cualquier momento y nos regresara al Home.

* Contamos con un input, que se utilizara para buscar series por su nombre o palabras similares a las escritas.

* Se encuentra el boton [login], nos redirige a una pagina en la cual podremos logearnos con su correo y contraseña. Una vezz logeados se activara [REDUX] en el cual guardaremos las credenciales de cada usuario logeado.

* Una vez el cliente se a logeado correctamente se habilitara otra pagina en la cual podremos ir a nuestro perfil y ver los datos que tenemos guardados en nuestra base de datos.

* si el usuario logeado es un admin tendra un apartado especial en el cual tendra todos los alquileres que se han realizados y todos los usuarios registrados.

* Tenemos el boton [Register] en el cual podra registrarse cada usuario nuevo que desee alquilar peliculas, se solicitara ciertos datos del usuario que seran guardados en la base de datos.

### Body

El body sera la parte mas reactiva del proyecto ya que sera la que mas cambie,
* [HOME] aqui tendremos unas series de base que se mostraran al cliente por si le apetece alquilar alguna, igualmente tendra un buscador en el Header que podra buscar la que le apetezca, en Home sera reactiva si busca una pelicula o si le da click en alguna serie

* [Serie_Detail] Los datos de cada serie esta almacenado en nuestro REDUX  en cual le haremos la peticion para que nos muestre los detalles de la seleccionada, si el usuaurio esta logeado aparecera un bonton de alquilar, el cual nos permite poder darle una copia al cliente de la serie y enviara a la base de datos en la coleccion rental los datos del cliente y la serie alquilada.

* [admin] esta seccion solo esta realizada para que lo visualice el o los admin de la pagina, aqui aparecera todos los alquileres realizados y los correos y nombre de cada usuario, como son datos sensibles se procura que los datos sean los mas sencillos posibles.

### Como funciona
nuestra parte frontal realizara unas peticiones a nuestra API
* [post](http://localhost:5500/users/login, credenciales): esta peticion le dara a la base de datos unas credenciales la cual sera el correo y la contraseña y nos dara una respuesta, si es valido y el usuario se encuentra en nuestra base de datos le dara un token con sus datos, si no existe el cliente dara una respuesta de no valida.

* [post](http://localhost:5500/users, userData): Con este endpoint le enviaremos a la API los datos de el cliente que se quiere registrar.

* [get](http://localhost:5500/series): Es la primera peticion que se realiza a la API ya que son las primeras series que se muestran en el HOME

* [get](http://localhost:5500/series/name/${search}): se activara este endpoint cuando se quiera buscar una pelicula en especifico en el input de search que esta en el Header.

* [post](http://localhost:5500/rentals, token, config): Este endpoint se usara cuando el cliente quiera realizar un alquiler se enviara los datos del usuario a traves del token y los datos de la serie a traves del config.
* [get](http://localhost:5500/users/allusers, config): Este endpoint es unico para administradores ya que trae todos los usuarios registrados.

* [get](http://localhost:5500/rentals/, config): Endpoint especial para administradores ya que trae todas las rentas.


