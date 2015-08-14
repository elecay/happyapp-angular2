/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';

@Component({
	selector: 'about'
})
@View({
	directives: [NgFor],
	templateUrl: 'templates/about.html'
})
export class About {
	contributors;
	constructor() {
		this.contributors = [
			{ name: 'David Pich', img: 'http://app.hackhappiness.org/img/davidpich.jpg' },
			{ name: 'Jorge del', img: 'http://app.hackhappiness.org/img/jorgecasar.png' },
			{ name: 'Brad Smith', img: 'http://app.hackhappiness.org/img/brad_smith.jpg' },
			{ name: 'Ginés Ortiz', img: 'http://app.hackhappiness.org/img/gines_ortiz.jpg' },
			{ name: 'Sebastian Rajo', img: 'http://app.hackhappiness.org/img/sebastian_rajo.jpg' },
			{ name: 'Etah Chen', img: 'http://app.hackhappiness.org/img/etah_chen.jpg' },
			{ name: 'Clint Pitts', img: 'http://app.hackhappiness.org/img/clint_pitts.jpg' }
		]
	}
}