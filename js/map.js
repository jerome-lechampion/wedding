let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(48.860005, 2.474388),
    zoom: 11,
  });

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },
    info: {
      icon: iconBase + "info-i_maps.png",
    },
    airport: {
      icon: "images/aircraft.png",
    },
    hotel: {
      icon: "images/hotel.png",
    },
    iglesia: {
      icon: "images/iglesia.png",
    },
    park: {
      icon: "images/park.png",
    },
    mairie: {
      icon: "images/mairie.png",
    },
    castle: {
      icon: "images/castle.png",
    },
    bus: {
      icon: "images/bus.png",
    },
    van: {
      icon: "images/van.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(48.718000, 2.604979),
      type: "van",
      title: "Van",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Van</h4>' +
      "Un van proposera des allers retours entre les hôtels du" +
      "<br />secteur et le château tout au long de la soirée" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.731780, 2.610285),
      type: "hotel",
      title: "Hôtel",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Hôtel Abbaye du golf de Lésigny</h4>' +
      "<p><b>Prix moyen:</b> 100€/nuit " +
      '<br /><b>Transport:</b> Voiture uniquement, Parking gratuit sur place' +
      '<br /><a href="https://www.hotelabbayedugolf.com/fr/index.html" target="_blanck">' +
      "hotelabbayedugolf.com</a> " +
      "</p>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.703431, 2.599490),
      type: "hotel",
      title: "Hôtel",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Kyriad Brie Comte Robert</h4>' +
      "<p><b>Prix moyen:</b> 70€/nuit " +
      '<br /><b>Transport:</b> Voiture uniquement, Parking gratuit sur place' +
      '<br /><a href="https://brie-comte-robert.kyriad.com/fr-fr/" target="_blanck">' +
      "brie-comte-robert.kyriad.com</a> " +
      "</p>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.832050, 2.387082),
      type: "hotel",
      title: "Hôtel",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Hôtel Adagio Paris Bercy</h4>' +
      "<p><b>Prix moyen:</b> 130€/nuit " +
      '<br /><b>Transport:</b> Ligne de Métro 14' +
      '<br /><a href="https://www.adagio-city.com/fr/hotel-6789-aparthotel-adagio-paris-bercy-village/index.shtml" target="_blanck">' +
      "adagio-city.com</a> " +
      "</p>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.847107, 2.342384),
      type: "park",
      title: "Parking",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Parking de la rue Soufflot</h4>' +
      "<p>4€/Heure " +
      "</p>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.846211, 2.344600),
      type: "mairie",
      title: "Mairie",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Mairie du 5ème arrondissement</h4>' +
      "<p>Cérémonie à 14h00 " +
      '<br /><b>Transport:</b> RER B station Luxembourg ou' +
      '<br />Metro 10 station Cardinal Lemoine ou' +
      '<br />Metro 7 station Place Monge' +
      '<br />Parking payant à proximité' +
      "</p>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.846613, 2.347456),
      type: "iglesia",
      title: "Église",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Église de Saint Étienne du Mont</h4>' +
      "<p>Cérémonie à 15h00 " +
      '<br />Parking payant à proximité' +
      "</p>" +
      "</div>"
    },
    {
      position: new google.maps.LatLng(48.743427, 2.613943),
      type: "castle",
      title: "Château",
      content: '<div id="content">' +
      '<h4 id="firstHeading" class="firstHeading">Château de Lésigny</h4>' +
      "<p>Cocktail + Dîner à partir de 17h30 " +
      '<br /><b>Transport:</b> Voiture ou navette' +
      '<br />Parking gratuit sur place' +
      "</p>" +
      "</div>"
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      map: map,
      title: features[i].title,
			icon: {
        url: icons[features[i].type].icon,
				size: new google.maps.Size(64, 64),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 32)
			}
    });
    const infowindow = new google.maps.InfoWindow({
      content: features[i].content,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }

  const flightPlanCoordinates = [
    {lat:48.703431, lng:2.599490},
    {lat:48.731780, lng:2.610285},
    { lat: 48.743427, lng:2.613943 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#ff00ff",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;