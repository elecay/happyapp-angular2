/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';

@Component({
	selector: 'happy-app'
})
@View({
	template: '<h1>{{ hello }}</h1>'
})
class HappyApp {
	hello: string;
	constructor() {
		this.hello = 'Hello World!';
	}
}

bootstrap(HappyApp)