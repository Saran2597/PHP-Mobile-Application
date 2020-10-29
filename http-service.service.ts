import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders,  HttpErrorResponse } from "@angular/common/http";
import { ToastController ,LoadingController} from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: "root"
})
export class HttpserviceService {
  post = "POST";
  private theme: BehaviorSubject<String>;
  get = "GET";
  // headers: any = new HttpHeaders({ "Content-Type": "application/json" });

  
    
    server: string = 'http://localhost/appdata/';
    isLoading: boolean = false;
    constructor(public http: Http,public toastController: ToastController,
      public loadingController: LoadingController) {
        this.theme = new BehaviorSubject('light-theme');
    }
    getAuthHeaders() {
      // return this.headers.append({ "Content-Type": "application/json" });
    }
    setActiveTheme(val) {
      this.theme.next(val);
    }
  
    getActiveTheme() {
      return this.theme.asObservable();
    }

//POST METHOD//
    postData(jsonObj, file){
      let type = 'application/json; charset=utf-8';
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
      
      return this.http.post(this.server + file, JSON.stringify(jsonObj), options)
       .map(res => res.json())
     }
     Data(jsonObj, file){
      let type = 'application/json; charset=utf-8';
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
      
      return this.http.post(this.server + file, JSON.stringify(jsonObj), options)
     
     }
     addressdata(jsonObj, file){
      let type = 'application/json; charset=utf-8';
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
      
      return this.http.post(this.server + file, JSON.stringify(jsonObj), options)
     
     }
      signupservice(jsonObj, file){
      let type = 'application/json; charset=utf-8';
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
      
      return this.http.post(this.server + file, JSON.stringify(jsonObj), options)
      //  .map(res => res.json())
     }
     
     changepassword(jsonObj, file){
      let type = 'application/json; charset=utf-8';
      let headers = new Headers({ 'Content-Type': type });
      let options = new RequestOptions({ headers: headers });
      
      return this.http.post(this.server + file, JSON.stringify(jsonObj),)
       .map(res => res.json())
     }
     
 //GET METHOD
 getorder(jsonObj, file){
  let type = 'application/json; charset=utf-8';
  let headers = new Headers({ 'Content-Type': type });
  let options = new RequestOptions({ headers: headers });
  
  return this.http.get(this.server + file, JSON.stringify(jsonObj),)
    .map(res => res.json())
 }
//  getfood(jsonObj, file){
//   let type = 'application/json; charset=utf-8';
//   let headers = new Headers({ 'Content-Type': type });
//   let options = new RequestOptions({ headers: headers });
  
//   return this.http.get(this.server + file, JSON.stringify(jsonObj),)
//     .map(res => res.json())
//  }
    async showtoast(msg, color) {
		const toast = await this.toastController.create({
			message: msg,
			// showMethod:'fadeIn',
			cssClass: "my-custom-class",
			duration:2700,
			color: color
		});
		toast.present();
	}

}


	
	
