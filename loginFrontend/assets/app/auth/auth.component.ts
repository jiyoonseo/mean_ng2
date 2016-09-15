import { Component } from '@angular/core';

@Component({
	selector:'my-auth',
	template: `
	<div class="row">
		<nav class="center-block">		
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a class="nav-link" routerLink="/User/SignIn" routerLinkActive="active" >Sign In</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" routerLink="/User/SignUp" routerLinkActive="active" >Sign Up</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" routerLink="/User/LogOut" routerLinkActive="active" >Log Out</a>
				</li>
			</ul>
		</nav>	
	</div>



	<router-outlet></router-outlet>

	
	`,
	

})

export class AuthComponent {
	
}

