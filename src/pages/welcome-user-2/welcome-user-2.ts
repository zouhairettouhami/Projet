import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Form1Page} from "../form1/form1"
import {MapingProvider} from "../../providers/maping/maping"
import {MenuController} from "ionic-angular"
declare var google:any;


@IonicPage()
@Component({
  selector: 'page-welcome-user-2',
  templateUrl: 'welcome-user-2.html',
})
export class WelcomeUser_2Page {
    @ViewChild('map') mapRef:ElementRef;

    orderInfo ={
    market:'',
    location:'',
    phoneNumber:'',
    latitude:'',
    longitude:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public MapingProvider:MapingProvider, public menu:MenuController) {
    this.orderInfo.location = this.navParams.get("userInfo.location");
    this.orderInfo.phoneNumber = this.navParams.get("userInfo.phoneNumber")
    this.menu.enable(true, 'menu1')
  }


  ionViewDidLoad() {
      this.DisplayMap(this.orderInfo);
  }
    DisplayMap(info:any){
        const location = new google.maps.LatLng('33.983784', '-6.867710');
        var map = new google.maps.Map(this.mapRef.nativeElement, {
            center: location,
            zoom: 15
        });

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true,
            clickable: true
        });
        google.maps.event.addListener(marker,'dragend',function(){
             info.latitude=marker.getPosition().lat();
             info.longitude=marker.getPosition().lng();
        });



    }

    addMarker(position,map) {
        return new google.maps.Marker({
            position,
            map
        })
    }
  CompleteInfo(){
      this.postOrder();
      this.navCtrl.push(Form1Page,this.orderInfo)
  }
  postOrder(){
      this.MapingProvider.postOrder('http://localhost:3000/Order',this.orderInfo)
  }
    onChange(SelectedValue){
        this.orderInfo.market = SelectedValue;
    }


}
