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
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Expresso',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Thé',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Chocolat viennois',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
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
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			}, {
				title: 'Desperados',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			}],
		}, {
			category: 'Whisky',
			items: [{
				title: 'Jack',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'JB',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			}],
		}, {
			category: 'Champagne',
			items: [{
				title: 'Moet & Chandon',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Nicolas',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
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
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Sun Paradise',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Tropical',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
			},
			{
				title: 'Strawberry',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
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