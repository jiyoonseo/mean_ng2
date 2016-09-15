import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';

@Component({
	selector: 'my-header',
	template:`
	<header class="row">
		<nav class="navbar navbar-light bg-faded">
			<ul class="nav navbar-nav">
				<li  class="nav-item nav-link">
					<a routerLink="/Messages" class="nav-link" routerLinkActive="active" >Messages</a>
				</li>
				<li  class="nav-item nav-link">
					<a routerLink="/Auth" class="nav-link" routerLinkActive="active" >Sign In</a> <!-- [class.active]="routerLinkActive" -->
				</li>
				
			</ul>
		</nav>
	</header>
	`
})

export class HeaderComponent implements OnInit{

	constructor(){}

	ngOnInit(){
		// console.log(this.router); // test router link for active check
	}
	
	
}