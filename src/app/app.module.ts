import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import {Camera} from "@ionic-native/camera"
import {HttpModule} from "@angular/http"
import {HttpClientModule} from "@angular/common/http"
import {HomePage} from "../pages/home/home"
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import {WelcomeUser_2Page} from "../pages/welcome-user-2/welcome-user-2"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import * as firebase from "firebase";
import {WelcomeUserPage} from "../pages/welcome-user/welcome-user";
import {WelcomeDeliveryPage} from "../pages/welcome-delivery/welcome-delivery"
import { MapingProvider } from '../providers/maping/maping';
import {Form1Page} from "../pages/form1/form1"
import {Form2Page} from "../pages/form2/form2"
import {TestPage} from "../pages/test/test";


var config = {
  apiKey: "AIzaSyB_LY5muPliTgT9j1czRylH6M8-qr8RK5A",
  authDomain: "projet-c27af.firebaseapp.com",
  databaseURL: "https://projet-c27af.firebaseio.com",
  projectId: "projet-c27af",
  storageBucket: "projet-c27af.appspot.com",
  messagingSenderId: "886541375204"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    WelcomeUserPage,
    WelcomeDeliveryPage,
    WelcomeUser_2Page,
    HomePage,
    Form1Page,
    Form2Page,
    TestPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
      WelcomeUserPage,
      WelcomeDeliveryPage,
    WelcomeUser_2Page,
    HomePage,
    Form1Page,
    Form2Page,
    TestPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Camera,
    MapingProvider
  ]
})
export class AppModule {}
