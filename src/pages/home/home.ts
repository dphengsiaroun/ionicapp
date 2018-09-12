import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../services/services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides: Array<{title: string, description: string, image: string}>;
	constructor(public navCtrl: NavController) {
		this.slides = [
			{
			title: "Bienvenue dans notre resto 2.0",
			description: "Accèder à tous les services du restaurant depuis <b>l'application</b> (carte du restaurant, serveur, avis client...).",
			image: "../../assets/imgs/ica-slidebox-img-1.png",
			},
			{
			title: "Carte du restaurant interactive",
			description: "Une <b>carte du restaurant interactive et innovante</b> qui vous permettra ainsi de voir en détail la composition et les avis de chaque produit.",
			image: "../../assets/imgs/smartphone-2.png",
			},
			{
			title: "Facilité la prise de commande",
			description: "<b>Choisir de commander</b> depuis l'application, c'est garantir une meilleur qualité de service.",
			image: "../../assets/imgs/serving-dish.png",
			}
	  ];
	}

	gotoServices() {
		console.log('gotoServices');
		this.navCtrl.push(ServicesPage);
	}

	

}
