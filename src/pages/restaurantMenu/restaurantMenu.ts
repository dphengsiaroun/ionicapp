import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'starter.html'
})
export class StarterContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'dishes.html'
})
export class DishesContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'desserts.html'
})
export class DessertsContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'dark'">
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