import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {AngularFireAuth} from "angularfire2/auth"
import {WelcomeUserPage} from "../welcome-user/welcome-user";
import {WelcomeUser_2Page} from "../welcome-user-2/welcome-user-2";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = {
    email :'',
    password :''
  };
  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth,public navParams: NavParams,private toastCtrl:ToastController) {
    console.log(this.navParams.get('nom'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email,this.loginData.password).then(auth=>{
      this.navCtrl.push(WelcomeUser_2Page)

    }).catch(err=>{
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present()
    })
  }
  signup(){
    this.navCtrl.push(SignupPage,{email : this.loginData.email})
  }
}
