import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: ` 
    <div class="container-fluid">
        <my-header></my-header>

        <div class="margin-root">
        	<router-outlet></router-outlet>         
        </div>
        
    </div>
    `,
    styles: [`
		.margin-root{
			margin: 0.5rem 1rem;
		}
    `]
})
export class AppComponent {
    // message: Message = new Message('a new message', null, 'Jseo');

    
}