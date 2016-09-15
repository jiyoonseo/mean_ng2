// this file is to set routes.. 

import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup.component';
import { SignInComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';

const appRoutes: Routes = [{ // Routes are an array of route definitions ( appRoutes : our array of routes )
	path: 'Messages',
	component: MessagesComponent
},{
	path: '',
  	component: MessagesComponent
},{
	path: 'Auth',
	pathMatch: 'full', //default
  	redirectTo: '/User/SignIn'
},{
	path: 'User',
	component: AuthComponent,
	children:[{
		path: 'SignUp',
		component: SignupComponent
	},{
		path: 'SignIn',
		component: SignInComponent
	},{
		path: 'LogOut',
		component: LogoutComponent
	},{
		path: '',
		component: SignInComponent,

	}]
}]

// export routing 
export const routing = RouterModule.forRoot(appRoutes); // used .forRoot() func because we're providing a configured router at the root of the application