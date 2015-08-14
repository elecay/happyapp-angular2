/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Map = (function () {
        function Map() {
            this.initMap();
        }
        ;
        Map.prototype.initMap = function () {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 41.3968504, lng: 2.1509136 },
                zoom: 13
            });
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(pos);
                }, function () {
                    // ha ocurrido un error
                });
            }
        };
        ;
        Map = __decorate([
            angular2_1.Component({
                selector: 'map'
            }),
            angular2_1.View({
                template: '<div id="map"></div>'
            }), 
            __metadata('design:paramtypes', [])
        ], Map);
        return Map;
    })();
    exports.Map = Map;
});
