import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'softs.html'
})
export class SoftsContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	softs: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeSofts();
	}

	initializeSofts() {
		this.softs = [
			{
				title: 'Salade Cesar',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/menu.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Tomate mozarella',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/vins.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Oeuf mayonnaise',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/waiter.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Carpaccio de boeuf',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/clients.jpg',
				fn: 'customerReview'
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
	hots: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeHots();
	}

	initializeHots() {
		this.hots = [
			{
				title: 'Tagliatelle au saumon',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/menu.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Escalope à la milanese',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/vins.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Boeuf bourguignon',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/waiter.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Poulet braisé',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/clients.jpg',
				fn: 'customerReview'
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
	templateUrl: 'wines.html'
})
export class WinesContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	wines: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeWines();
	}

	initializeWines() {
		this.wines = [
			{
				title: 'Caramel brulé',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/menu.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Flan',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/vins.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Framboisier',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/waiter.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Tarte Tatin',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/clients.jpg',
				fn: 'customerReview'
			},
		];
	}

	getWines(event: any) {
		// Reset items back to all of the items
		this.initializeWines();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.wines = this.wines.filter((wine) => {
				return (wine.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	template: `
	<ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'royal'">
	  <ion-tab tabIcon="leaf" tabTitle="Softs" [root]="soft"></ion-tab>
	  <ion-tab tabIcon="md-restaurant" tabTitle="Alcools" [root]="hots"></ion-tab>
	  <ion-tab tabIcon="md-ice-cream" tabTitle="Chaudes" [root]="wines"></ion-tab>
	</ion-tabs>
`})
export class DrinkMenuPage {
	soft = SoftsContentPage;
	hots = HotsContentPage;
	wines = WinesContentPage;

	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}