#Geolocate
Мок для ```navigator.geolocation```.
Модуль подменяет стандартную геолокацию браузера.

###[English readme](https://github.com/2gis/geolocate/blob/master/README_EN.md)###

###[Demo](http://2gis.github.io/geolocate/)###

```javascript
var point = [54.980206086231, 82.898068362003];

geolocate.use();

navigator.geolocation.getCurrentPosition(function(position) {
  assert(position.coords.latitude).equal(point[0]);
  assert(position.coords.longitude).equal(point[1]);
});

geolocate.send({lat: point[0], lng: point[1]});

geolocate.restore();
```
## Установка
Вручную:
```html
<script src="geolocate.js"></script>
```
Из ```npm```:
```
npm install geolocate.js
```
Как ```CommonJS``` или ```AMD``` модуль:
```javascript
var geolocate = require('./geolocate.js');
```
##API
###.use()
Заменяет объект ```navigator.geolocation```
###.restore()
Возвращает ```navigator.geolocation``` в исходное состояние
###.send([options])
Имитирует нахождение позиции после вызова метода [getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation.getCurrentPosition) и [watchPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation.watchPosition).
Обновляет текущую позицию из ```options```, в которых могут задаваться все параметры [positions.coords](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) и [timestamp](https://developer.mozilla.org/en-US/docs/Web/API/Position.timestamp).
```javascript
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
});

geolocate.send({
  latitude: 50,
  longitude: 10,
  accuracy: 5,
  timestamp: 3000
});

/* {
  coords: {
    accuracy: 5,
    altitude: null
    altitudeAccuracy: null,
    heading: null,
    latitude: 50
    longitude: 10,
    speed: null
  },
  timestamp: 3000
} */

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
});

geolocate.send();

/* Выведит такую же позицию {
  coords: {
    accuracy: 5,
    altitude: null
    altitudeAccuracy: null,
    heading: null,
    latitude: 50
    longitude: 10,
    speed: null
  },
  timestamp: 3000
} */
```
###.change(options)
Меняет текущую позицию и вызывает ```success callback``` метода ```watchPosition```.
Обновляет текущую позицию из ```options```, в которых могут задаваться все параметры [positions.coords](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) и [timestamp](https://developer.mozilla.org/en-US/docs/Web/API/Position.timestamp).
```javascript
navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude + ',' + position.coords.longitude);
});

geolocate.send();
// 54.9799, 82.89683699999999

geolocate.change({lat: 10, lng: 15});
// 10, 15

geolocate.change({lat: 25});
// 25, 15
```
###.sendError([options])
Вызывает ```error callback``` метода ```getCurrentPosition```.  
В ```options``` задаются параметры [code и message](https://developer.mozilla.org/en-US/docs/Web/API/PositionError).
###.changeError([options])
Вызывает ```error callback``` метода ```watchPosition```.
В ```options``` задаются параметры [code и message](https://developer.mozilla.org/en-US/docs/Web/API/PositionError).
