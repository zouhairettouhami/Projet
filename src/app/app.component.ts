import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from "angularfire2/auth"
import {HomePage} from "../pages/home/home"
import {WelcomeUserPage} from "../pages/welcome-user/welcome-user"
import {WelcomeUser_2Page} from "../pages/welcome-user-2/welcome-user-2"
import {Form1Page} from "../pages/form1/form1"
import {TestPage} from "../pages/test/test"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomeUser_2Page;

  constructor(platform: Platform,private afAuth: AngularFireAuth ,statusBar: StatusBar, splashScreen: SplashScreen) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
