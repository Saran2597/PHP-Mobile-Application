import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { async } from 'q';
import { Router } from '@angular/router';
import { HttpserviceService } from '../http-service.service';
import { FormBuilder, FormGroup ,FormControl, Validators} from '@angular/forms';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  first_name: string = '';
  mobile_number: string = '';
  email: string = '';
  password: string = '';
  last_name: string = '';
  public registergrp: FormGroup;
 
  validation_messages: any

 

ngOnInit() {
}

  constructor(public navCtrl: NavController, 	public service: HttpserviceService,
    public toastController: ToastController,
    public appComp: AppComponent,
    public alertCtrl: AlertController,  
     public loadingController: LoadingController,
    private router: Router, public formBuilder: FormBuilder
    ) {
      this.registergrp = this.formBuilder.group({
        firstname: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.pattern('[a-z A-Z]*')])],
        lastname: ['', Validators.compose([Validators.required, Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]+$/)])],
        // email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])],
        mobilenumber: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
        Email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9\\.]+(\\.[A-Za-z0-9]+)*@[A-Za-z0-9]+(\\.[A-Za-z]{2,})$')])],
        Password: ['', Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^[a-zA-Z0-9!@#$%^&*()_]*$")])],
        // confirmPassword: ['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10),Validators.pattern("^[a-zA-Z0-9!@#$%^&*()_]*$")])]
      });
      this.validation_messages = {
        firstname: [
          { type: 'required', message: 'Please enter your Name' },
         { type: 'maxlength', message: 'FirstName cannot be more than 15 characters long.' },
          { type: 'pattern', message: 'Your Name must contain only letters.' },
        ],
        lastname: [
          { type: 'required', message: 'Please enter your LastName' },
          { type: 'maxlength', message: 'FirstName cannot be more than 15 characters long.' },
          { type: 'pattern', message: 'Your LastName must contain only letters.' }
        ],
        Email: [
          { type: "required", message: "Please enter your Email Id" },
          { type: "pattern", message: "Enter a valid email." }
        ],
        mobilenumber: [
          { type: "required", message: "Please enter your Phone No" },
          { type: "minLength", message: "Enter a valid phone number." },
          { type: "maxLength", message: "Enter a valid phone number." },
          { type: "pattern", message: "Enter a valid Mobilenumber"}
        ],
        Password: [
          { type: 'required', message: "Please enter your Password" },
          { type: 'minlength', message: 'Password Should be at least 6 characters minimum.' },
          { type: 'maxlength', message: 'Password Should be not at exceed 12 characters' },
          { type: 'pattern', message: 'Only alphaneumeric and special characters allowed' },
        ],
        // confirmPassword: [
        //   { type: 'required', message: "Please enter your Confirm Password" },
        //   { type: 'minlength', message: 'Password Should be at least 6 characters minimum.' },
        //   { type: 'maxlength', message: 'Password Should be not at exceed 12 characters' },
        //   { type: 'pattern', message: 'Only alphaneumeric and special characters allowed' },
        // ]
      }
  }
  ionViewDidLoad() {
    console.log('Hello Addproduct Page'); 
    }
    signup(){
      this.appComp.toggleNgxLoading('enable');
      let formValue = this.registergrp.value;
      
      let jsonObj : any = {
        "f_name": formValue['firstname'],
        "mobile_number": formValue['mobilenumber'],
        "email": formValue['Email'],
        "password": formValue['Password'],
        "last_name": formValue['lastname'],
         aksi: 'add_register'
      }
      
      this.service.signupservice(jsonObj ,'register.php',).subscribe(signupservice => {
      console.log(signupservice); 
    
      if(signupservice['status'] > 0){
        this.service.showtoast('Registerd Successfully','success'); 
        this.router.navigateByUrl('/sign-in')
        localStorage.setItem("signup", JSON.stringify(jsonObj));
        }
        else{
        this.service.showtoast(signupservice, 'danger'); 
        }
        this.appComp.toggleNgxLoading('disable');
        },
         err=>{
        console.log(err); 
        })
     
  
    }
    
      // async showToast(msg, color){
      //   const toast = await this.toastController.create({ 
      //     message:msg, 
      //     color:color,
      //     duration: 2000
      // }); 
      // toast.present(); 
      // }
    
    }

