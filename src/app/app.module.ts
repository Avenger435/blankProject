import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CartPage } from '../pages/cart/cart';
//Angular
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFireDatabaseModule } from 'angularfire2/database';



const firebaseAuth = {
  apiKey: "AIzaSyCPHsQWACVlKh-yjb43tysbDoustd2RT38",
  authDomain: "restrodemoproject.firebaseapp.com",
  databaseURL: "https://restrodemoproject.firebaseio.com",
  projectId: "restrodemoproject",
  storageBucket: "restrodemoproject.appspot.com",
  messagingSenderId: "794718789039"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    CartPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
