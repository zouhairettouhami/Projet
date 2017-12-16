import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the MapingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapingProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MapingProvider Provider');
  }

    getUser(url:string,result:any){
        console.log(url);
        this.http.get(url).subscribe(data => {
            result = data;
            console.log(result);
        });
    }
    postUser(url:string,formInfo){
        this.http.post(url,formInfo).subscribe()
    }
    postOrder(url:string,formInfo){
        this.http.post(url,formInfo).subscribe()
    }
    getProducts(url:string,result:any){
        this.http.get(url).subscribe(data=>{
            result.push(data);
            })
    }


}
