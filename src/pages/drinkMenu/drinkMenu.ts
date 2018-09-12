import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'softs.html'
})
export class SoftsContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	softs: Array<{ title: string, size: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeSofts();
	}

	initializeSofts() {
		this.softs = [
			{
				title: 'Coca-Cola',
				size: '33cl',
			},
			{
				title: 'Jus d\'orange',
				size: '33cl',
			},
			{
				title: 'Ice Tea',
				size: '33cl',
			},
			{
				title: 'Limonade',
				size: '33cl',
			},
		];
	}

	getSofts(event: any) {
		// Reset items back to all of the items
		this.initializeSofts();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.softs = this.softs.filter((soft) => {
				return (soft.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'hots.html'
})
export class HotsContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	hots: Array<{ title: string, resume: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeHots();
	}

	initializeHots() {
		this.hots = [
			{
				title: 'Café gourmand',
				resume: 'Drinking',
			},
			{
				title: 'Expresso',
				resume: 'Drinking',
			},
			{
				title: 'Thé',
				resume: 'Drinking',
			},
			{
				title: 'Chocolat viennois',
				resume: 'Drinking',
			},
		];
	}

	getHots(event: any) {
		// Reset items back to all of the items
		this.initializeHots();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.hots = this.hots.filter((hot) => {
				return (hot.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'alcools.html'
})
export class AlcoolsContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	alcools: Array<{ category: string, items: [{ title: string, resume: string }] }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeAlcools();
	}

	initializeAlcools() {
		this.alcools = [{
			category: 'Bière',
			items: [{
				title: 'Heineken',
				resume: 'Drinking',
			}, {
				title: 'Desperados',
				resume: 'Drinking',
			}],
		}, {
			category: 'Whisky',
			items: [{
				title: 'Jack',
				resume: 'Drinking',
			},
			{
				title: 'JB',
				resume: 'Drinking',
			}],
		}, {
			category: 'Champagne',
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

	getAlcools(event: any) {
		// Reset items back to all of the items
		this.initializeAlcools();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.alcools = this.alcools.filter((alcool) => {
				console.log('xxx', alcool.items[0].title);
				return (alcool.items[0].title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'cocktails.html'
})
export class CocktailsContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	cocktails: Array<{ title: string, resume: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeCocktails();
	}

	initializeCocktails() {
		this.cocktails = [
			{
				title: 'Mojito',
				resume: 'Drinking',
			},
			{
				title: 'Sun Paradise',
				resume: 'Drinking',
			},
			{
				title: 'Tropical',
				resume: 'Drinking',
			},
			{
				title: 'Strawberry',
				resume: 'Drinking',
			},
		];
	}

	getCocktails(event: any) {
		// Reset items back to all of the items
		this.initializeCocktails();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.cocktails = this.cocktails.filter((cocktail) => {
				return (cocktail.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	template: `
	<ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'royal'">
	  <ion-tab tabIcon="md-pint" tabTitle="Softs" [root]="soft"></ion-tab>
	  <ion-tab tabIcon="md-wine" tabTitle="Cocktails" [root]="cocktails"></ion-tab>
	  <ion-tab tabIcon="md-beer" tabTitle="Alcools" [root]="alcools"></ion-tab>
	  <ion-tab tabIcon="md-cafe" tabTitle="Chaudes" [root]="hots"></ion-tab>
	</ion-tabs>
`})
export class DrinkMenuPage {
	soft = SoftsContentPage;
	cocktails = CocktailsContentPage;
	alcools = AlcoolsContentPage;
	hots = HotsContentPage;

	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}