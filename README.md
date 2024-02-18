Jean Carlo Ruiz Muñoz

El projecto esta montando en un esqueleto construido con webdriverIO

Para correr el proyecto solo es necesario:

1- Correr npm install  
2- Los test se ejecutan con el comando npx wdio run wdio.conf.js  
3- Para generar los reportes se realiza el comando allure generate allure-results --clean -o allure-report  
4- Para generar los reporte por primera vez en caso de presentar problemas primero instalar allure 
    * Apple: brew install allure
    * Windows: scoop install allure  
    5- Los reportes generados se pueden ver en la carpeta allure-report bajo el nombre de index.html, es aqui donde se encuentra el requisito de reporte para la tarea 



El test esta pensando para que:  
1- Se entre a la pagina de Vueling  
2- Coloque destino, origen, fechas y marque solo ida   
3- Luego de esto cambiara de pagina y lo reconocera ademas escogera un mensaje en la pagina de seleccion de vuelos para comprobar que ha sido un exito
