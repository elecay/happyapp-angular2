/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';
import {RouteConfig, routerInjectables, RouterOutlet, RouterLink} from "angular2/router";
import {Home} from 'components/home'
import {Map} from 'components/map'
import {Trending} from 'components/trending'
import {About} from 'components/about'
import {Account} from 'components/account'

@Component({
	selector: 'main-app'
})
@View({
	directives: [RouterOutlet, RouterLink],
	templateUrl: 'templates/main.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'home' },
	{ path: '/map', component: Map, as: 'map' },
	{ path: '/trending', component: Trending, as: 'trending' },
	{ path: '/about', component: About, as: 'about' },
	{ path: '/account', component: Account, as: 'account' }
])
export class MainApp {
	
}

bootstrap(MainApp, [routerInjectables])