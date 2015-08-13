/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';

@Component({
	selector: 'trending'
})
@View({
	template: '<h1>{{ message }}</h1>'
})
export class Trending {
	message: string;
	constructor() {
		this.message = 'Este es el trending';
	}
}