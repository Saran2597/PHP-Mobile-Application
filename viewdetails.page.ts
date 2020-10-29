import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../http-service.service';
import { FormsModule } from '@angular/forms';
import { ToastController,LoadingController, AlertController, ActionSheetController } from "@ionic/angular";
import { Http } from '@angular//http'; 
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.page.html',
  styleUrls: ['./viewdetails.page.scss'],
})
export class ViewdetailsPage implements OnInit {
  oreder: any=[];
  addressdata: any;
  color: string;

  constructor(
    private router: Router,
    public service: HttpserviceService,
    public alertController: AlertController,
     public appComp: AppComponent,
    public actionSheetController: ActionSheetController
  ) { 
    // this.color="green"
  }

  ngOnInit() {
    if (
			localStorage.getItem("viewbill") != undefined ||
			localStorage.getItem("viewbill") != null
		) {
			this.addressdata= JSON.parse(localStorage.getItem("viewbill"));
		}
  }
  ionViewDidEnter() {
   
		// this.getStrategyFields();
		// this.getStrategyStartingStatus(); //Running status

		// this.editable = false;
	}
  getorderdetails(){
    this.appComp.toggleNgxLoading('enable');
    this.service.getorder('','getorders.php',).subscribe(orderdata => {
    console.log(orderdata); 
  
    this.oreder = orderdata;
        localStorage.setItem(
          "orders",
          JSON.stringify(this.oreder)
        );
      this.appComp.toggleNgxLoading('disable');
      },
       err=>{
      console.log(err); 
      })
  }
}
