import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';


import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { FCM } from '@ionic-native/fcm/ngx';
//import { firebaseConfig } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyCsVeLkCDWpe73qKw0gy3HG6mmDWxNVK_w",
      authDomain: "iglecentro1.firebaseapp.com",
      databaseURL: "https://iglecentro1.firebaseio.com",
      projectId: "iglecentro1",
      storageBucket: "iglecentro1.appspot.com",
      messagingSenderId: "970457282602",
      appId: "1:970457282602:web:5d3533ed6fc52f4daeeb53",
      measurementId: "G-E0X2B1PS14"
    
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [FCM, InAppBrowser, SplashScreen, StatusBar,{provide:FirestoreSettingsToken,useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule {}
