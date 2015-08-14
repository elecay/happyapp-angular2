/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind, NgFor, CSSClass} from 'angular2/angular2';
import {RouteConfig, routerInjectables, RouterOutlet, RouterLink} from "angular2/router";
import {Home} from 'components/home';
import {Map} from 'components/map';
import {Trending} from 'components/trending';
import {About} from 'components/about';
import {Account} from 'components/account';

@Component({
	selector: 'main-app'
})
@View({
	directives: [RouterOutlet, RouterLink, NgFor, CSSClass],
	templateUrl: 'templates/main.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'home' },
	{ path: '/map', component: Map, as: 'map' },
	{ path: '/trending', component: Trending, as: 'trending' },
	{ path: '/about', component: About, as: 'about' },
	{ path: '/account', component: Account, as: 'account' }
])
class MainApp {
	activeTab = 'home';
	selectTab(tabSelected) {
		this.activeTab = tabSelected;
	};
	pages = [
		{url:'home', icon:'ion-happy-outline'},
		{url:'map', icon:'ion-ios-location'},
		{url:'trending', icon:'ion-ios-bolt'},
		{url:'about', icon:'ion-ios-information'},
		{url:'account', icon:'ion-ios-person'}
	];
}

bootstrap(MainApp, [routerInjectables])