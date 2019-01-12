# Data Lovers: League of Legends

## Índice

* [Contexto](#contexto)
* [Descripción](#resumen-del-proyecto)
* [Proceso de diseño](#proceso-de-diseño)

***

## Contexto
League of Legends (también conocido por sus siglas LoL) es un videojuego del juego de género multiplayer online battle arena (MOBA) y deporte electrónico desarrollado por Riot Games para Microsoft Windows y OS X. En un principio los servidores estaban alojados en la empresa GOA y fue vendida a la empresa china Tencent Holdings Limited.

El juego fue diseñado para el sistema operativo Microsoft Windows y lanzaron una beta para OS X dejando al poco tiempo el proyecto de lado.​ Esta beta ha sido mejorada por parte de usuarios del juego, haciendo posible jugar a una versión actualizada de League of Legends.

En octubre de 2012, contaba con 70 millones de jugadores registrados.3​ Para marzo de 2013 se registró un pico de 5 millones de jugadores conectados al mismo tiempo en todo el mundo. Es un juego de alta competitividad siendo uno de los juegos más populares de los deportes electrónicos (e-sports).

El juego está inspirado en el popular mapa personalizado del Warcraft III, Defense of the Ancients: Allstars diseñado por Steve «Guinsoo» Feak el cual a su vez está basado en el escenario de StarCraft «Aeon of Strife».


## Resumen del proyecto

En este proyecto construimos una página web para visualizar un
conjunto de datos que se adecúa a lo que nuestro usuario necesita. Este set de datos muestra la lista de jugadores en una liga del juego League of Legends (LoL).

Primero elegimos quién sería nuestro usuario y qué
necesita saber o ver exactamente; luego construimos una interfaz que le va ayudar a interactuar y entender mejor esos datos. Nuestra página web permitirá **visualizar la data, filtrarla, ordenarla**.

## Proceso de diseño
### **1. Descubrimiento e investigación**

![Sin Título](src/img/Descubrimiento.png)
Los usuarios a los que este proyecto va dirigido son aquellos jugadores de videojuegos (gamers) o personas que se inician en el mundo de “League of Legends” y quieren conocer más de los campeones con los que este MOBA (multiplayer online battle arena) se desarrolla. 

### **2. Síntesis y Definición**

![Sin Título](src/img/Definicion.png)

El usuario entrevistado es un jugador principiante de League of Legends, conoce el juego desde hace mucho tiempo, pero comenzó a jugarlo gracias a la publicidad del último campeonato mundial en el 2018.  Durante la entrevista el usuario hizo hincapié en la cantidad de campeones que se pueden usar en el juego. La diversidad en estos más de 130 personajes hace complicado para un jugador principiante el poder reconocerlos y asociarlos con sus roles, habilidades, dificultad, etc. Si pudiese visualizar la información de los héroes como sus nombres e imágenes, la dificultad de uso de cada uno, los tipos/roles que cumplen (assassin, fighter, mage, marksman, support, tank) e información extra como los puntos de vida y de maná de cada campeón por niveles, está seguro que le facilitaría a desarrollarse mejor en el juego.

![Sin Título](/src/img/arquetipoLOL.JPG)

#### HISTORIAS DE USUARIO
1.  Yo como usuario quiero poder visualizar a todos los campeones con sus nombres e imágenes para poder diferenciarlos.
2.	Yo como usuario quiero poder ver la dificultad de cada campeón de League of Legends para poder saber con cuál personaje comenzar a jugar.
3.	Yo como usuario quiero poder filtrar a los campeones por sus roles para poder identificarlos y poder conocerlos.
4.	Yo como usuario quiero poder ver las estadísticas de vida de cada campeón de League of Legends para poder saber el cuidado con el cuál usarlos durante cada nivel de las partidas. 


### **3. Ideación**
![Sin Título](/src/img/Ideacion.png)

Ya que tenemos la data de los campeones, la idea de producto es una página web que ayude a nuestro usuario a que conozca a los campeones de League of Leyends de una forma más práctica y sencilla, visualizar, buscar, ordenar y filtrar la data según sus requerimientos.

### **4. Prototipado**
![Sin Título](/src/img/Prototipado.png)

* #### Prototipo de baja fidelidad

![Sin Título](/src/img/prototipobajafidelidad.JPG)

En un primer lugar se realizó lo que vendría luego a ser la página que lista a los campeones de League of legends. De manera resumida mostraría a cada uno como cartas con una imagen y su nombre, a su vez en la parte superior se vería un listado de roles/tipos de los campeones como checkboxes para filtrar la data y un input para poder buscar. Este primer prototipo no resolvía el problema de poder ordenar a los campeones de alguna forma así que se añadió dos select donde se añadirían diferentes tipos de ordenamientos, por nombre y dificultad. Después de que se realizaron varios tests de usabilidad, se comprobó que el uso de dos selects no facilitaba el ordenamiento de la data, por este motivo las opciones de ordenamiento se colocaron en un solo select y el otro select pasó a solo ser un Label que nombre dicho select. Además, se añadió una barra de menú donde se visualizarían 3 opciones. Los tests de usabilidad demostraron que la página necesitaba dinamismo y que se veía muy plana, por ello es que se añadió la opción de una página de Inicio o Home donde se pudiese ver más información del juego como una introducción. La segunda opción vendría a ser la página en la que se pueden visualizar a todos los campeones y la tercera página vendría a ser de datos y cuadros estadísticos. Esto último generó un conflicto dado que el usuario quería poder visualizar un breve cuadro estadístico con la información que quería (Healthe Points de cada campeón por niveles) dentro de la ventana modal que se abriría al hacer 'click' sobre las tarjetas de cada campeón; al final, esta opción de la barra de menú fue eliminada. 

* #### Prototipo de alta fidelidad 

Nuestro prototipo de alta fidelidad fue realizado en el programa Figma con la ayuda del Zeplin. Tomamos como modelo un molde de celular para trabajar de manera responsive. Le añadimos funcionabilidad para poder pre visualizar lo que nuestra aplicación haría al momento de que se le añada ciertas funciones.

<https://www.figma.com/proto/P58SAngl1ic6269Q9QMRP39i/Data-Lovers-Celular-LOL?node-id=0%3A1&scaling=min-zoom>

<https://zpl.io/a8p1GNQ>

![Sin Título](/src/img/PrototipoAFcelular.png)

Decidimos realizar dos páginas, una de Inicio o "Home" y otra llamada "Lista de Campeones". En la página de Inicio se visualizará información del juego en sí, donde al final hay un botón que te mand a la página oficial del juego para poder descargarlo, un slide de seis imágenes donde también se ve el "Código del Invocador" que son las reglas con las que cada jugador o invocador debe cumplir, y una pequeña sección de noticias donde hay información acerca del último video viral generado por RiotGames. En la otra página, el "Listado de Campeones", se ven en cartas todos los campeones que la data nos pudo brindar, cada uno abre una ventana modal donde se puede ver más información de ellos con un dato estadístico que le brinda la información al jugador/usuario acerca de los puntos de vida (Health Points) de cada campeón y cómo estos se multiplican cada ciertos niveles hasta llegar al tope. En la parte superior hay dos opciones para poder filtrar la data según el tipo o rol que cumplen cada campeón (assassin, figther, mage, marksman, supporte, tank) y para poder ordenarlos de manera alfabética (ascendentemente y descendentemente) o dependiendo el nivel de dificultad de cada hérore (del 1 al 10). Adicionalmente se le añadió un buscador donde se puede ingresar los nombres de los campeones para facilitar aún más la búsqueda de cada uno. 

![Sin Título](/src/img/PrototipoAFfuncionabilidad.png)





