import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'light'">
        <ion-title>La carte du restaurant</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
export class RestaurantMenuContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'dark'">
      <ion-tab tabIcon="leaf" tabTitle="Entrée" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="md-pizza" tabTitle="Plat" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="md-ice-cream" tabTitle="Dessert" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class RestaurantMenuPage {
  rootPage = RestaurantMenuContentPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}