import { NgModule ,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NetworkdetectionService } from './networkdetection.service';

//import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
// import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';
// const skltnConfig: SkltnConfig = {
//   rectRadius: 10,
//   flareWidth: '150px',
//   bgFill: '#d8d5d1',
//   flareFill: 'rgba(255,255,255, 0.5)',
// };
@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [  
   
  ],
  imports: [BrowserModule,IonicModule.forRoot(),
     AppRoutingModule,
     HttpModule,
     FormsModule,
     HttpClientModule,
//NetworkdetectionService,
		NgxLoadingModule.forRoot({
		animationType: ngxLoadingAnimationTypes.wanderingCubes,
		primaryColour: "#eb445ad1",
    secondaryColour:"#eb445ad1",
    // tertiaryColour: '#ffffff'
		}),
    ],
  providers: [
    StatusBar,
    Geolocation,
    //NativeGeocoder,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
