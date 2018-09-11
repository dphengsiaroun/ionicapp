import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})

export class ServicesPage {
  myServices: Array<{title: string, subtitle: string, image: string, fn: string}>;
  constructor(public navCtrl: NavController) {
    this.myServices = [
      {
        title: 'La carte',
        subtitle: 'du restaurant',
        image: '../../assets/imgs/menu.jpg',
        fn: 'restaurantMenu'
      },
      {
        title: 'La carte',
        subtitle: 'des vins',
        image: '../../assets/imgs/vins.jpg',
        fn: 'wineMenu'
      },
      {
        title: 'Appeler',
        subtitle: 'un serveur',
        image: '../../assets/imgs/bell.png',
        fn: 'callWaiter'
      },
      {
        title: 'Tous les avis',
        subtitle: 'clients',
        image: '../../assets/imgs/clients.jpg',
        fn: 'customerReview'
      },
    ];
  }

  callFn(name) {
    console.log('name', name);
    switch (name) {
      case 'restaurantMenu':
      console.log('restaurantMenu');
      this.navCtrl.push(ListPage);
      break;
      case 'wineMenu':
      console.log('wineMenu');
      this.navCtrl.push(ListPage);      
      break;      
      case 'callWaiter':
      console.log('callWaiter');
      this.navCtrl.push(ListPage);      
      break;      
      case 'customerReview':
      console.log('customerReview');
      this.navCtrl.push(ListPage);      
      break;      
      default:
      console.log('default');      
      break;      
    }
    
  }

}
