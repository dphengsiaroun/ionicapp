import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RestaurantMenuPage } from '../restaurantMenu/restaurantMenu';
import { DrinkMenuPage } from '../drinkMenu/drinkMenu';
import { WineMenuPage } from '../wineMenu/wineMenu';

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
        subtitle: 'des boissons',
        image: '../../assets/imgs/soda.jpg',
        fn: 'drinkMenu'
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
        image: '../../assets/imgs/waiter.jpg',
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
      this.navCtrl.push(RestaurantMenuPage);
      break;
      case 'drinkMenu':
      console.log('drinkMenu');
      this.navCtrl.push(DrinkMenuPage);      
      break;      
      case 'wineMenu':
      console.log('wineMenu');
      this.navCtrl.push(WineMenuPage);      
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
