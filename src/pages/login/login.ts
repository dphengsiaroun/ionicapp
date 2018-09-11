import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../services/services'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

  }

  gotoServices() {
    console.log('gotoServices');
		this.navCtrl.push(ServicesPage);
  }

}
