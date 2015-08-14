/// <reference path="typings/angular2/angular2.d.ts" />
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
define(["require", "exports", 'angular2/angular2', "angular2/router", 'components/home', 'components/map', 'components/trending', 'components/about', 'components/account'], function (require, exports, angular2_1, router_1, home_1, map_1, trending_1, about_1, account_1) {
    var MainApp = (function () {
        function MainApp() {
            this.activeTab = 'home';
            this.pages = [
                { url: 'home', icon: 'ion-happy-outline' },
                { url: 'map', icon: 'ion-ios-location' },
                { url: 'trending', icon: 'ion-ios-bolt' },
                { url: 'about', icon: 'ion-ios-information' },
                { url: 'account', icon: 'ion-ios-person' }
            ];
        }
        MainApp.prototype.selectTab = function (tabSelected) {
            this.activeTab = tabSelected;
        };
        ;
        MainApp = __decorate([
            angular2_1.Component({
                selector: 'main-app'
            }),
            angular2_1.View({
                directives: [router_1.RouterOutlet, router_1.RouterLink, angular2_1.NgFor, angular2_1.CSSClass],
                templateUrl: 'templates/main.html'
            }),
            router_1.RouteConfig([
                { path: '/', component: home_1.Home, as: 'home' },
                { path: '/map', component: map_1.Map, as: 'map' },
                { path: '/trending', component: trending_1.Trending, as: 'trending' },
                { path: '/about', component: about_1.About, as: 'about' },
                { path: '/account', component: account_1.Account, as: 'account' }
            ]), 
            __metadata('design:paramtypes', [])
        ], MainApp);
        return MainApp;
    })();
    angular2_1.bootstrap(MainApp, [router_1.routerInjectables]);
});
