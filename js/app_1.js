///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'ckerr.9220d879'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY2tlcnIiLCJhIjoiUVpIVjYxYyJ9.TZ4fqO97yoSQxBjGax2nJw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/dcparks2.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map)

featurelayer.on('ready',function(){
  this.setstyle({
    'color':'#ec008c',
    'fillColor':'#ec008c',
    'weight':4,
    'opacity':.7
});
map.fitBounds(featurelayer.gitBounds());
});
