(function($){

    // function initialize() {
    //     var config = [
    //         {
    //             "featureType": "administrative",
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative.country",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#deb8cd"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative.country",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#90756a"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative.province",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#dadada"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative.province",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#ac9173"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative.locality",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#6e6d6c"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape",
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape.man_made",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape.natural",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#e7f3df"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape.natural.terrain",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi",
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.business",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#c2d4f3"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.business",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#4f6177"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.government",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#9d5050"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.medical",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#dceaf5"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.medical",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#6ca5d4"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.park",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#c0e6c8"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.school",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#f0d7d7"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road",
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#fcd49a"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway.controlled_access",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#ffe5aa"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.arterial",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#f9eac6"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.arterial",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#6b6b6b"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.local",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#fbf7f2"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.local",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#969b9d"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#bbafb9"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit",
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit.line",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#e7c4d9"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit.station.airport",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "hue": "#00caff"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit.station.bus",
    //             "elementType": "labels.icon",
    //             "stylers": [
    //                 {
    //                     "hue": "#ffb200"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit.station.rail",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#604356"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "water",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#bee7f0"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "water",
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#81a0c1"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "water",
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         }
    //     ],
    //     location = new google.maps.LatLng(-6.703853,106.884285),
    //     centerLocation = new google.maps.LatLng(-6.703,106.884285),
    //     mapOptions = {
    //         center: centerLocation,
    //         zoom: 18,
    //         styles: config,
    //         scrollwheel: false,
    //         panControl: false,
    //         mapTypeControl: false,
    //         streetViewControl: false,
    //         zoomControl: true,
    //         zoomControlOptions: {
    //             style: google.maps.ZoomControlStyle.LARGE,
    //             position: google.maps.ControlPosition.RIGHT_CENTER
    //         },
    //     },
    //     map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
    //     marker = new google.maps.Marker({
    //         position: location,
    //         map: map,
    //         title: 'Degung Hillside',
    //         // icon: 'assets/img/contact.png'
    //     }),
    //     infowindow = new google.maps.InfoWindow({
    //         content: '' +
    //             '<article class="map-info">' +
    //                 '<div class="image-area">' +
    //                     '<img src="assets/img/logo.png" width="150" height="" alt="Degung Hillside" />' +
    //                 '</div>' +
    //                 '<div class="row">' +
    //                     '<div class="col-sm-6">' +
    //                         '<div class="list-group">' +
    //                             '<h5 class="label-title">Email us</h5>' +
    //                             '<h6><a href="mailto:hello@degunghillside.com">hello@degunghillside.com</a></h6>' +
    //                         '</div>' +
    //                         '<div class="list-group">' +
    //                             '<h5 class="label-title">Call us</h5>' +
    //                             '<h6><a href="tel:+622518292364">+62 251 829-2364</a><br></h6>' +
    //                             '<h6><a href="tel:+62281372442389">+62 813 7244-2389 (Arief)</a></h6>' +
    //                         '</div>' +
    //                     '</div>' +
    //                     '<div class="col-sm-6">' +
    //                         '<h5 class="label-title">Visit us</h5>' +
    //                         '<h6 class="">Cibedug, Ciawi<br>' +
    //                             'Bogor, West Java<br>' +
    //                             'Indonesia</h6>' +
    //                     '</div>' +
    //                 '</div>' +
    //             '</article>',
    //         maxWidth: 600
    //     });

    //     google.maps.event.addListener(marker, 'click', function () {
    //         infowindow.open(map, marker);
    //     });
    //     infowindow.open(map, marker);
    // }
    // if ($('#map-canvas').length > 0) {
    //     google.maps.event.addDomListener(window, 'load', initialize);
    // }

})(jQuery);