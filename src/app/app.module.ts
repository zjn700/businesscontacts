import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyC_f3KEBzFDY8Vnj6PzlyvPxR1bzeYs4Q0",
  authDomain: "businesscontacts-fff11.firebaseapp.com",
  databaseURL: "https://businesscontacts-fff11.firebaseio.com",
  storageBucket: "businesscontacts-fff11.appspot.com",
  messagingSenderId: "226531922490"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
