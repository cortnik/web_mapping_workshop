///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'will-breitkreutz.k6fj4l3f'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY2tlcnIiLCJhIjoiUVpIVjYxYyJ9.TZ4fqO97yoSQxBjGax2nJw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('ckerr.9220d879', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
