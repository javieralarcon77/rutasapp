# Rutasapp

Aplicación creada siguiendo el curso de Fernando Herrera de React Native

## Instalación

Ejecutar npm para instalar las dependendencias

```bash
    npm install
```
## NECESARIO

Para ejecutar el programa es necesario crear una apikey de google maps api con permisos para 
api maps android e api maps ios si se desea correr en ambas plataformas.

El api key se debe agregar en /android/app/src/main/AndroidManifest.xml

```xml
    ...

    <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="API_KEY"/>

    ....
```

## Correr en el emulador

```bash
    npx react-native run-android
```

## Recursos
[CURSO REACT NATIVE](https://www.udemy.com/course/react-native-fh)

[GOOGLE MAPS API](https://developers.google.com/maps/documentation?hl=es)

## Screenshots

<div style="display:flex; flex-direction: row; flex-wrap: wrap">
    <div>
        <p>Pantalla Inicial Solicitud de Permisos</p>
        <img src="/screenshots/permisos-1.png" alt="Pantalla Inicial Solicitud de Permisos" width="200"/>
    </div>
    <div>
        <p>Mensaje de Solicitud de Permisos</p>
        <img src="/screenshots/permisos-2.png" alt="Mensaje de Solicitud de Permisos" width="200"/>
    </div>
    <div>
        <p>Mapa Activo</p>
        <img src="/screenshots/mapa-1.png" alt="Mapa Activo" width="200"/>
    </div>
    <div>
        <p>Ruta Marcada en el Mapa</p>
        <img src="/screenshots/mapa-2.png" alt="Ruta Marcada en el Mapa" width="200"/>
    </div>
<div>