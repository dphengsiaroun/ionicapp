import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'rouges.html'
})
export class RougesContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	rouges: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeRouges();
	}

	initializeRouges() {
		this.rouges = [
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
				fn: 'blancMenu'
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

	getRouges(event: any) {
		// Reset items back to all of the items
		this.initializeRouges();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.rouges = this.rouges.filter((rouge) => {
				return (rouge.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
	roses: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeRoses();
	}

	initializeRoses() {
		this.roses = [
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
				fn: 'blancMenu'
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

	getRoses(event: any) {
		// Reset items back to all of the items
		this.initializeRoses();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.roses = this.roses.filter((rose) => {
				return (rose.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
	blancs: Array<{ title: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeBlancs();
	}

	initializeBlancs() {
		this.blancs = [
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
				fn: 'blancMenu'
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

	getBlancs(event: any) {
		// Reset items back to all of the items
		this.initializeBlancs();

		// set val to the value of the searchbar
		const val = event.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.blancs = this.blancs.filter((blanc) => {
				return (blanc.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

@Component({
	template: `
	<ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'royal'">
	  <ion-tab tabIcon="ios-wine" tabTitle="Rouges" [root]="rouge"></ion-tab>
	  <ion-tab tabIcon="ios-wine-outline" tabTitle="Blancs" [root]="blancs"></ion-tab>
	  <ion-tab tabIcon="ios-wine-outline" tabTitle="Rosés" [root]="roses"></ion-tab>
	</ion-tabs>
`})
export class WineMenuPage {
	rouge = RougesContentPage;
	blancs = BlancsContentPage;
	roses = RosesContentPage;

	isAndroid: boolean = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}