import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
    <div class="container-fluid">
    	<div class="row">
    		<input [(ngModel)]="message.content" />
			
    	</div>
        <div class="row">
        	<div class="list-group">
				<a href="#" class="list-group-item list-group-item-action">
					{{ message.content }}
				</a>
				<footer class="list-group-item list-group-item-action">
					<div class="author">
						{{ message.author }}
					</div>
					<div class="config"> 
						<a href='#'>Edit</a>
						<a href='#'>Delete</a>
					</div>
				</footer>
			</div>

			
        </div>
        
    </div>
    `,
    styles: [`
	.author {
		display: inline-block;
		font-style: italic;
		font-size: 12px;
		width: 80%;
	}
	.config {
		display: inline-block;
		text-aligh: right;
		font-size: 12px;
		width: 19%;
	}

    `]
})
export class AppComponent {
	message = {
		content: "a Message :D",
		author: 'Jseo'
	};
    
}