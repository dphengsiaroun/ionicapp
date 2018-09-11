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
				title: 'Coca-Cola',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/menu.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Jus d\'orange',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/vins.jpg',
				fn: 'alcoolMenu'
			},
			{
				title: 'Ice Tea',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/waiter.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Limonade',
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
				title: 'Café gourmand',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/menu.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Expresso',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/vins.jpg',
				fn: 'alcoolMenu'
			},
			{
				title: 'Thé',
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/waiter.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Chocolat viennois',
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
	templateUrl: 'alcools.html'
})
export class AlcoolsContentPage {

	isAndroid: boolean = false;
	searchQuery: string = '';
	alcools: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeAlcools();
	}

	initializeAlcools() {
		this.alcools = [
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
				fn: 'alcoolMenu'
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

	getAlcools(event: any) {
		// Reset items back to all of the items
		this.initializeAlcools();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.alcools = this.alcools.filter((alcool) => {
				return (alcool.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	template: `
	<ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'royal'">
	  <ion-tab tabIcon="md-pint" tabTitle="Softs" [root]="soft"></ion-tab>
	  <ion-tab tabIcon="md-beer" tabTitle="Alcools" [root]="alcools"></ion-tab>
	  <ion-tab tabIcon="md-cafe" tabTitle="Chaudes" [root]="hots"></ion-tab>
	</ion-tabs>
`})
export class DrinkMenuPage {
	soft = SoftsContentPage;
	alcools = AlcoolsContentPage;
	hots = HotsContentPage;

	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}