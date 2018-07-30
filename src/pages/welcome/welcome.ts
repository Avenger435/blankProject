import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  continueToPay(){
    console.log('clicked on contine');
    this.navCtrl.push(CartPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
