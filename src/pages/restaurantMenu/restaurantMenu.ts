import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'starter.html'
})
export class StarterContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	starters: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeStarters();
	}

	initializeStarters() {
		this.starters = [
			{
				title: 'Salade Cesar',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/salade-cesar.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Tomate mozarella',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/tomate-moza.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Oeuf mayonnaise',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/oeuf-mayo.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Carpaccio de boeuf',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/carpaccio.jpg',
				fn: 'customerReview'
			},
		];
	}

	getStarters(event: any) {
		// Reset items back to all of the items
		this.initializeStarters();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.starters = this.starters.filter((starter) => {
				return (starter.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'dishes.html'
})
export class DishesContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	dishes: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeDishes();
	}

	initializeDishes() {
		this.dishes = [
			{
				title: 'Tagliatelle au saumon',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/tagliatelle-saumon.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Escalope à la milanese',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/escalope-milanese.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Boeuf bourguignon',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/boeuf-bourguignon.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Poulet braisé',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/poulet-braise.jpg',
				fn: 'customerReview'
			},
		];
	}

	getDishes(event: any) {
		// Reset items back to all of the items
		this.initializeDishes();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.dishes = this.dishes.filter((dishe) => {
				return (dishe.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	templateUrl: 'desserts.html'
})
export class DessertsContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	desserts: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeDesserts();
	}

	initializeDesserts() {
		this.desserts = [
			{
				title: 'Crème brulé',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/creme-brule.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Flan',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/flan.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Assortiment de macaron',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/macarons.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Tarte Tatin',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/tarte-tatin.jpg',
				fn: 'customerReview'
			},
		];
	}

	getDesserts(event: any) {
		// Reset items back to all of the items
		this.initializeDesserts();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.desserts = this.desserts.filter((dessert) => {
				return (dessert.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	template: `
	<ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'royal'">
	  <ion-tab tabIcon="leaf" tabTitle="Entrées" [root]="starter"></ion-tab>
	  <ion-tab tabIcon="md-restaurant" tabTitle="Plats" [root]="dishes"></ion-tab>
	  <ion-tab tabIcon="md-ice-cream" tabTitle="Desserts" [root]="desserts"></ion-tab>
	</ion-tabs>
`})
export class RestaurantMenuPage {
	starter = StarterContentPage;
	dishes = DishesContentPage;
	desserts = DessertsContentPage;

	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}