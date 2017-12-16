import { Component, ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google:any;
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-test',
    templateUrl: 'test.html',
})
export class TestPage {

    @ViewChild('map') mapRef:ElementRef;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.DisplayMap();
    }

    DisplayMap(){
        const location = new google.maps.LatLng('33.983784','-6.867710');

        const options = {
            center:location,
            zoom:10,
            streetViewControl:false,
            mapTypeId:'roadmap'

        };
        const map = new google.maps.Map(this.mapRef.nativeElement,options);

        this.addMarker(location,map)


    }

    addMarker(position,map) {
        return new google.maps.Marker({
            position,
            map
        })
    }

}