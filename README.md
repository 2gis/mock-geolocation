#Geolocate
Модуль подменяет стандартную геолокацию браузера
```javascript
var point = [54.980206086231, 82.898068362003];

geolocate.use();

navigator.geolocation.getCurrentPosition(function(position) {
  assert(position.coords.latitude).equal(point[0]);
  assert(position.coords.longitude).equal(point[1]);
});

geolocate.send({lat: point[0], lng: point[1]);
```
##API
###.use()
Заменяет ```navigator.geolocation```
###.restore()
Возвращает ```navigator.geolocation``` в исходное состояние
###.send(options)
TODO
###.change(options)
TODO
###.sendError(options)
TODO
###.changeError(options)
TODO
