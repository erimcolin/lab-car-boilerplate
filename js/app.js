// mapa estático
// navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
//
// var divMap = document.getElementById("map");
//
// function fn_mal(){}
// function fn_ok(respuesta){
//   var lat = respuesta.coords.latitude;
//   var lon = respuesta.coords.longitude;
//   var coordenada = lat + ',' + lon;
//
//   divMap.innerHTML= "<img src='http://maps.googleapis.com/maps/api/staticmap?size=400x400&markers="+coordenada+"' />";
// }


// mapa dinámico
var divMap = document.getElementById('map');
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
function fn_mal(){};
function fn_ok(rta){
  var lat = rta.coords.latitude;
  var lon = rta.coords.longitude;

  var gLatLon = new google.maps.LatLng(lat, lon);
  var objConfig = {
    zoom: 17,
    center: gLatLon
  };

  var gMapa = new google.maps.Map(divMap, objConfig);

}
