import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MapingProvider} from "../../providers/maping/maping"



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    result ={
        id:'',
        nom:'',
        prenom :'',
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public MapingProvider: MapingProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  Login(){
    this.navCtrl.push(LoginPage);
  }
  getData(){
      this.MapingProvider.getUser('http://localhost:3000',this.result)
  }

}
