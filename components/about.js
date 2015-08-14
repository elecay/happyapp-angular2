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
    var About = (function () {
        function About() {
            this.contributors = [
                { name: 'David Pich', img: 'http://app.hackhappiness.org/img/davidpich.jpg' },
                { name: 'Jorge del', img: 'http://app.hackhappiness.org/img/jorgecasar.png' },
                { name: 'Brad Smith', img: 'http://app.hackhappiness.org/img/brad_smith.jpg' },
                { name: 'Ginés Ortiz', img: 'http://app.hackhappiness.org/img/gines_ortiz.jpg' },
                { name: 'Sebastian Rajo', img: 'http://app.hackhappiness.org/img/sebastian_rajo.jpg' },
                { name: 'Etah Chen', img: 'http://app.hackhappiness.org/img/etah_chen.jpg' },
                { name: 'Clint Pitts', img: 'http://app.hackhappiness.org/img/clint_pitts.jpg' }
            ];
        }
        About = __decorate([
            angular2_1.Component({
                selector: 'about'
            }),
            angular2_1.View({
                directives: [angular2_1.NgFor],
                templateUrl: 'templates/about.html'
            }), 
            __metadata('design:paramtypes', [])
        ], About);
        return About;
    })();
    exports.About = About;
});
