import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomeUser_2Page} from "../welcome-user-2/welcome-user-2";
import {Camera,CameraOptions} from "@ionic-native/camera"
import {MapingProvider} from "../../providers/maping/maping"



@IonicPage()
@Component({
  selector: 'page-welcome-user',
  templateUrl: 'welcome-user.html',
})
export class WelcomeUserPage {
  userInfo ={
      lname:'',
      fname:'',
      email:'',
      phone:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera:Camera,public MapingProvider:MapingProvider) {
     this.userInfo.lname = this.navParams.get('lname');
      this.userInfo.fname = this.navParams.get('fname');
      this.userInfo.email = this.navParams.get('email');
      this.userInfo.phone = this.navParams.get('phone');

  }
    options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    };


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeUserPage');
  }
  CompleteSignup(){
      this.postUser();
      this.navCtrl.push(WelcomeUser_2Page,{lname :this.userInfo.lname,fname:this.userInfo.fname})
  }
  postUser(){
      this.MapingProvider.postUser('http://localhost:3000',this.userInfo)

  }

}
