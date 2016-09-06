import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //added for Hero app (8/15/2016)
import { HttpModule } from '@angular/http';


/*  DEV-MODE in-memory web API
*/
// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule, 
  	], 
  declarations: [ 
  	AppComponent
  	],
  providers: [    
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
