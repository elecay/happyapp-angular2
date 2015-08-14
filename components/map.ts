/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'map'
})
@View({
	template: '<div id="map"></div>'
})
export class Map {
	constructor() {
		this.initMap();
	};
	initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 41.3968504, lng: 2.1509136},
			zoom: 13
		});
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
			}, function() {
				// ha ocurrido un error
			});
		}
	};
}