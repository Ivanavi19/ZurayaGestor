import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ListaClanesProvider } from '../providers/lista-clanes/lista-clanes';

export const firebaseConfig ={
  apiKey: "AIzaSyD6I7FsUoRnRvmawG8QXHlhnt1lbgLegME",
  authDomain: "zurayagestor.firebaseapp.com",
  databaseURL: "https://zurayagestor.firebaseio.com",
  projectId: "zurayagestor",
  storageBucket: "zurayagestor.appspot.com",
  messagingSenderId: "37303589814"
};

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaClanesProvider
  ]
})
export class AppModule {}
