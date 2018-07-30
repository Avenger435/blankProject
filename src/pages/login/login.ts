import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;

  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController) {
  }

  alert(message: string){
    const alert = this.alertCtrl.create({
      title: 'Login Successful',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  signIn() {
    console.log('would sign in with ', this.user.value, this.password.value);
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got some data', this.fire.auth.currentUser);
        //user is logged in
        //this.alert('Success you\'r logged in');
        this.navCtrl.setRoot(WelcomePage);
      })
      .catch(error => {
        console.log('got an error', error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
