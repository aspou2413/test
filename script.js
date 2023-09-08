Latitude = getParam('a');
Longitude = getParam('o');
var mymap = L.map('mapid').setView([0, 0], 18);
L.tileLayer('http://114.148.57.151:8123/tiles/_marker_/world/flat/{x}_{y}/zzzzz_{x}_{y}.jpg?timestamp=1694191481784', {
  maxZoom: 19,
  attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
}).addTo(mymap);
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
