import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'; //added for Hero app (8/15/2016)
import { HttpModule } from '@angular/http';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { routing } from './app.routes';


// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { AppComponent }  from './app.component';

import { HeaderComponent } from './header.component';

import { MessageComponent }  from './messages/message.component';
import { MessageListComponent }  from './messages/message-list.component';
import { MessageInputComponent }  from './messages/message-input.component';
import { MessageService } from './messages/message.service';
import { MessagesComponent } from './messages/messages.component';

import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup.component';
import { SignInComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';

// import { emailValidator } from './auth/email-validator.directive';//test

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    routing
  	], 
  declarations: [ 
  	AppComponent,
    HeaderComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthComponent,
    SignInComponent,
    SignupComponent,
    LogoutComponent,    
  	],
  providers: [   
    MessageService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
