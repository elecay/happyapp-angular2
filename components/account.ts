/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';

@Component({
	selector: 'account'
})
@View({
	template: '<h1>{{ message }}</h1>'
})
export class Account {
	message: string;
	constructor() {
		this.message = 'Este es la cuenta';
	}
}