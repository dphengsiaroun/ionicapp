import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'starter.html'
})
export class StarterContentPage {
	isAndroid: boolean = false;
	searchQuery: string = '';
	starters: Array<{ title: string, price: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeStarters();
	}

	initializeStarters() {
		this.starters = [
			{
				title: 'Salade Cesar',
				price: '12,90€',
				resume: 'La salade César est une salade principalement composée de laitue romaine, de parmesan, d\'œufs durs et de croûtons, arrosée de sa « sauce César » faite de parmesan râpé, d\'huile d\'olive, de pâte d\'anchois, d\'ail, de vinaigre de vin, de moutarde et d\'un jaune d\'œuf.',
				image: '../../assets/imgs/salade-cesar.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Tomate mozarella',
				price: '12,90€',
				resume: 'La salade caprese est composée de tomates et de mozzarella en tranches, généralement alternées, et parsemées de feuilles de basilic frais ciselées ; elle peut être servie en hors-d\'œuvre ou en plat principal, et est assaisonnée d\'un filet d\'huile d\'olive vierge extra ainsi que de sel et de poivre.',
				image: '../../assets/imgs/tomate-moza.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Oeuf mimosa',
				price: '12,90€',
				resume: 'L\'œuf mimosa est une entrée qui consiste en un œuf dur, coupé en deux, dont le jaune a été enlevé, mélangé avec de la mayonnaise et des herbes, puis replacé dans le blanc. Un peu du jaune cuit est émietté dessus à la fin, ressemblant à du mimosa.',
				image: '../../assets/imgs/oeuf-mayo.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Carpaccio de boeuf',
				price: '12,90€',
				resume: 'Le carpaccio est une préparation culinaire typique de la cuisine italienne, à base de viande de bœuf crue, coupée en tranches très fines, assaisonnée traditionnellement d\'un filet d\'huile d\'olive, jus de citron, sel, poivre et parsemé (ou non) de copeaux de parmigiano reggiano (parmesan) ou de pecorino.',
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
	dishes: Array<{ title: string, price: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeDishes();
	}

	initializeDishes() {
		this.dishes = [
			{
				title: 'Tagliatelle au saumon',
				price: '12,90€',				
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/tagliatelle-saumon.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Escalope à la milanese',
				price: '12,90€',				
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/escalope-milanese.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Boeuf bourguignon',
				price: '12,90€',				
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/boeuf-bourguignon.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Poulet braisé',
				price: '12,90€',				
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
	desserts: Array<{ title: string, price: string, resume: string, image: string, fn: string }>;
	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
		this.initializeDesserts();
	}

	initializeDesserts() {
		this.desserts = [
			{
				title: 'Crème brulé',
				price: '12,90€',				
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/creme-brule.jpg',
				fn: 'restaurantMenu'
			},
			{
				title: 'Flan',
				price: '12,90€',				
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/flan.jpg',
				fn: 'wineMenu'
			},
			{
				title: 'Assortiment de macaron',
				price: '12,90€',				
				resume: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.du restaurant.',
				image: '../../assets/imgs/macarons.jpg',
				fn: 'callWaiter'
			},
			{
				title: 'Tarte Tatin',
				price: '12,90€',				
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