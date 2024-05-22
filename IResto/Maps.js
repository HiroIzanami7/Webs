	let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 14.748000145789378, lng: 121.03654439479352 },
    zoom: 17,
  });

  // Markers for Maps
  const CarusoRistorante= new google.maps.Marker({
    position: { lat: 14.572329732640625, lng: 121.02359497248041 },
    map: map,
    label: "Caruso Ristorante Italiano",
    title: "",
  });

  const burgerKingMarker = new google.maps.Marker({
    position: { lat: 14.747718265257848, lng: 121.03643391952046 },
    map: map,
    label: "Burger King",
    title: "Burger King",
  });
  const CafeFilipino = new google.maps.Marker({
    position: { lat: 14.749393028439963, lng:121.03377190428338 },
    map: map,
    label: "Cafe Filipino",
    title: "Cafe Filipino",
  });
  const Raffaele= new google.maps.Marker({
    position: { lat: 14.596309446382167, lng:120.97845630482524 },
    map: map,
    label: "Raffaele Woodfired Pizza, The Bayleaf Hotel",
    title: "Raffaele Woodfired Pizza",
  });
  const Bellini = new google.maps.Marker({
    position: { lat: 14.627095113577946, lng:121.05695182820907 },
    map: map,
    label: "Bellini's",
    title: "Bellini's",
  });
}

// Function to navigate to Jollibee location
function goToCarusoRistorante() {
  map.panTo({ lat:  14.572329732640625, lng:121.02359497248041 });
}

// Function to navigate to Burger King location
function goToBurgerKing() {
  map.panTo({ lat: 14.747718265257848, lng: 121.03643391952046 });
}

function goToBellini(){
	map.panTo({lat:14.627095113577946, lng:121.05695182820907});
}

function goToRaffaele(){
	map.panTo({lat:14.596309446382167, lng:120.97845630482524});
}
initMap();