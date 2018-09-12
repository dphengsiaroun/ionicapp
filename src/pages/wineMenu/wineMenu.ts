import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'rouges.html'
})
export class RougesContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	rouges: Array<{ category: string, items: [{ title: string, resume: string }] }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeRouges();
	}

	initializeRouges() {
		this.rouges = [{
			category: 'Provence',
			items: [{
				title: 'Heineken',
				resume: 'Drinking',
			}, {
				title: 'Desperados',
				resume: 'Drinking',
			}],
		}, {
			category: 'Bordeaux',
			items: [{
				title: 'Jack',
				resume: 'Drinking',
			},
			{
				title: 'JB',
				resume: 'Drinking',
			}],
		}, {
			category: 'Saint-Emilion',
			items: [{
				title: 'Moet & Chandon',
				resume: 'Drinking',
			},
			{
				title: 'Nicolas',
				resume: 'Drinking',
			}],
		}];
	}

	getRouges(event: any) {
		// Reset items back to all of the items
		this.initializeRouges();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.rouges = this.rouges.filter((rouge) => {
				return (rouge.items[0].title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'roses.html'
})
export class RosesContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	roses: Array<{ category: string, items: [{ title: string, resume: string }] }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeRoses();
	}

	initializeRoses() {
		this.roses = [{
			category: 'Provence',
			items: [{
				title: 'Heineken',
				resume: 'Drinking',
			}, {
				title: 'Desperados',
				resume: 'Drinking',
			}],
		}, {
			category: 'Bordeaux',
			items: [{
				title: 'Jack',
				resume: 'Drinking',
			},
			{
				title: 'JB',
				resume: 'Drinking',
			}],
		}, {
			category: 'Saint-Emilion',
			items: [{
				title: 'Moet & Chandon',
				resume: 'Drinking',
			},
			{
				title: 'Nicolas',
				resume: 'Drinking',
			}],
		}];
	}

	getRoses(event: any) {
		// Reset items back to all of the items
		this.initializeRoses();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.roses = this.roses.filter((rose) => {
				return (rose.items[0].title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'blancs.html'
})
export class BlancsContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	blancs: Array<{ category: string, items: [{ title: string, resume: string }] }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeBlancs();
	}

	initializeBlancs() {
		this.blancs = [{
			category: 'Provence',
			items: [{
				title: 'Heineken',
				resume: 'Drinking',
			}, {
				title: 'Desperados',
				resume: 'Drinking',
			}],
		}, {
			category: 'Bordeaux',
			items: [{
				title: 'Jack',
				resume: 'Drinking',
			},
			{
				title: 'JB',
				resume: 'Drinking',
			}],
		}, {
			category: 'Saint-Emilion',
			items: [{
				title: 'Moet & Chandon',
				resume: 'Drinking',
			},
			{
				title: 'Nicolas',
				resume: 'Drinking',
			}],
		}];
	}

	getBlancs(event: any) {
		// Reset items back to all of the items
		this.initializeBlancs();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.blancs = this.blancs.filter((blanc) => {
				return (blanc.items[0].title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'au-verres.html'
})
export class AuVerresContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	auVerres: Array<{ title: string, resume: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeAuVerres();
	}

	initializeAuVerres() {
		this.auVerres = [
			{
				title: 'Vin rouge',
				resume: 'St-Emilion',
			},
			{
				title: 'Vin blanc',
				resume: 'Chardonnay',
			},
			{
				title: 'Vin rosé',
				resume: 'Côtes de provence',
			},
			{
				title: 'Pichet de rouge',
				resume: '50ml',
			},
			{
				title: 'Pichet de blanc',
				resume: '50ml',
			},
			{
				title: 'Pichet de rosé',
				resume: '50ml',
			},
		];
	}

	getAuVerres(event: any) {
		// Reset items back to all of the items
		this.initializeAuVerres();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.auVerres = this.auVerres.filter((auVerre) => {
				return (auVerre.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	template: `
	<ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'royal'">
	  <ion-tab tabIcon="ios-wine" tabTitle="Rouges" [root]="rouges"></ion-tab>
	  <ion-tab tabIcon="ios-wine" tabTitle="Blancs" [root]="blancs"></ion-tab>
	  <ion-tab tabIcon="ios-wine" tabTitle="Rosés" [root]="roses"></ion-tab>
	  <ion-tab tabIcon="ios-wine" tabTitle="Au verre" [root]="auVerres"></ion-tab>
	</ion-tabs>
`})
export class WineMenuPage {
	rouges = RougesContentPage;
	blancs = BlancsContentPage;
	roses = RosesContentPage;
	auVerres = AuVerresContentPage;

	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}