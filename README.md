#Geolocate
Модуль подменяет стандартную геолокацию браузера
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
##API
###.use()
Заменяет ```navigator.geolocation```
###.restore()
Возвращает ```navigator.geolocation``` в исходное состояние
###.send(options)
Обновляет текущую позицию из ```options``` и вызывает единожды success callback методов (getCurrentPosition)[https://developer.mozilla.org/en-US/docs/Web/API/Geolocation.getCurrentPosition] и watchPosition.
В опциях могут задаваться все параметры [positions.coords](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) и [timestamp](https://developer.mozilla.org/en-US/docs/Web/API/Position.timestamp).
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

// {coords: {accuracy: 5, altitude: null, altitudeAccuracy: null, heading: null, latitude: 50…}, timestamp: 3000}

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
});

geolocate.send();

// Выведит такую же позицию
// {coords: {accuracy: 5, altitude: null, altitudeAccuracy: null, heading: null, latitude: 50…}, timestamp: 3000}
```
###.change(options)
Меняет текущую позицию и вызывает success callback метода (watchPosition)[https://developer.mozilla.org/en-US/docs/Web/API/Geolocation.watchPosition].
```javascript
navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude);
});

geolocate.send();
// 54.9799

geolocate.change({lat: 10});
// 10
```
###.sendError(options)
TODO
###.changeError(options)
TODO
