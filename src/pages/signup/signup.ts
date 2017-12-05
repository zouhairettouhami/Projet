import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth"
import {WelcomeDeliveryPage} from "../welcome-delivery/welcome-delivery"
import {WelcomeUserPage} from "../welcome-user/welcome-user"

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupData = {
    email :'',
    password :'',
    passwordRetyped :'',
    type:''
  };

  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth, public navParams: NavParams,private alertCtrl:AlertController) {
    this.signupData.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){
    if(this.signupData.password !== this.signupData.passwordRetyped){
      let alert = this.alertCtrl.create({
        title :'Error',
        message:'The passwords do not Match',
        buttons:['OK']
      });
      alert.present();
      return;
    }
    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email,this.signupData.password).then(auth=>{
      let alert = this.alertCtrl.create({
        title: 'Success',
        message: 'Done',
        buttons: ['OK']
      });
      alert.present();
      if(this.signupData.type === 'Normal')this.navCtrl.push(WelcomeUserPage);
      else this.navCtrl.push(WelcomeDeliveryPage);
    }).catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present()
    });
  }
  onChange(SelectedValue){
    this.signupData.type = SelectedValue;
  }
}
