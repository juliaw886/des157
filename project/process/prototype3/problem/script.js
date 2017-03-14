document.addEventListener("DOMContentLoaded", function() {
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZVBuEmtYlrHi50VAWHw6U9itvTcgsBIM&callback=initMap"
    async defer></script>
    <script>
	  var savar = {lat: 23.846111, lng: 90.2575};
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.8091829, lng: -1.6272464},
          zoom: 2
        });
		var marker = new google.maps.Marker({
		position: savar,
		map: map,
		title: 'Rana Plaza Factory'
	  });
      }
}