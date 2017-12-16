import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MapingProvider} from "../../providers/maping/maping"



@IonicPage()
@Component({
  selector: 'page-form1',
  templateUrl: 'form1.html',
})
export class Form1Page {
  totalPrices = 0.00;
  items =[];
  chosenitems=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public MapingProvider:MapingProvider) {
  }

  ionViewDidLoad() {
      this.getProducts();
      console.log(this.items)
  }
  getProducts(){
      this.MapingProvider.getProducts('http://localhost:3000/Product',this.items)
  }
  addToCart(data){
      if (this.chosenitems.length == 0){
          this.chosenitems.push({
              title: data.title,
              price: data.price,
              quantity: 1,
          });
          this.totalPrices += data.price;
      }

     else {
          var i =0;
          while(i<this.chosenitems.length && this.chosenitems[i].title!= data.title ) i++;
          if(i==this.chosenitems.length){
          this.chosenitems.push({
              title: data.title,
              price: data.price,
              quantity: 1
          });
          this.totalPrices+= data.price;
      }
      else{
              this.chosenitems[i].quantity+=1;
              this.totalPrices+=data.price;
          }
  }
  }
  removeItem(data){
      var i = this.chosenitems.length -1 ;
       while(this.chosenitems[i].title != data.title){
           i--;
       }
       this.chosenitems.splice(i,1);
      this.totalPrices -= data.price * data.quantity;
  }

}
