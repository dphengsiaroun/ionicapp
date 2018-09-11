import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navCtrl: NavController) {

    }


    gotoAction() {
        console.log('Signup success !');
    }


}