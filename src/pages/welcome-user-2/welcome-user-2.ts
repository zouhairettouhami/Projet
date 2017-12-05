import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome-user-2',
  templateUrl: 'welcome-user-2.html',
})
export class WelcomeUser_2Page {
  userInfo ={
    lname:'',
    fname:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userInfo.lname = this.navParams.get("lname");
    this.userInfo.fname = this.navParams.get("fname")
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeUser_2Page');
  }

}
