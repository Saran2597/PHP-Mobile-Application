import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AppComponent } from '../app.component';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { NavController, LoadingController } from '@ionic/angular';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpserviceService } from '../http-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  public signingrp: FormGroup
  validation_messages: any;
  ngOnInit() {
  
}
  shwhd: string = "password";
  constructor(private router: Router,
    public alertCtrl: AlertController,
    public service: HttpserviceService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController ,
    public appComp: AppComponent,
   ) { 
    
      this.signingrp = this.formBuilder.group({
       
        Email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9\\.]+(\\.[A-Za-z0-9]+)*@[A-Za-z0-9]+(\\.[A-Za-z]{2,})$')])],
        Password: ['', Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^[a-zA-Z0-9!@#$%^&*()_]*$")])],
      });
      this.validation_messages = {
       
        Email: [
          { type: "required", message: "Please enter your Email Id" },
          { type: "pattern", message: "Enter a valid email." }
        ],
       
        Password: [
          { type: 'required', message: "Please enter your Password" },
          { type: 'minlength', message: 'Password Should be at least 6 characters minimum.' },
          { type: 'maxlength', message: 'Password Should be not at exceed 12 characters' },
          { type: 'pattern', message: 'Only alphaneumeric and special characters allowed' },
        ],
  
      }
    }
  
    login(){
      this.appComp.toggleNgxLoading('enable');
  let formValue = this.signingrp.value;
   let jsonObj: any ={
    "email": formValue['Email'],
    "password": formValue['Password'],
     aksi: 'login'
   }
   console.log(jsonObj)
   this.service.postData(jsonObj ,'login.php',).subscribe(postData => {
      console.log(postData); 
     
      if (postData =="Successfully Login"|| postData['user_login'] =="admin") {
      // this.service.showtoast('Login Successfully','success'); 
      this.router.navigateByUrl('/tabs/tab1')
      localStorage.setItem("login", JSON.stringify(jsonObj));
      }
      else{
      this.service.showtoast(postData, 'danger'); 
      }
      this.appComp.toggleNgxLoading('disable');
      },
       err=>{
      console.log(err); 
      })
     
     
    
   }
 }
  
  
  
