require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 4,
          center: [15, 65] // longitude, latitude
        });


view.watch("center, scale", (value, oldValue, propertyName)=>{
  if (propertyName === "center"){
    console.log(value.x, value.y);
  } else {
    console.log("New Value: "+value);
    console.log("Old Value: "+oldValue);
  }
});

});
