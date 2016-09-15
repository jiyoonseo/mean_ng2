import { Component } from '@angular/core';

@Component({
	selector: 'my-logout',
	template:`
		<section class="center-block">
			<button class="btn btn-danger btn-right" (click)="onLogout()"> Log Out </button>
		</section>
	`
})

export class LogoutComponent{
	onLogout(){
		console.log("Good bye!");
	}
}