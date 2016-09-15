import { Component, Input } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
	selector: 'my-message',
	template: `
		<div class="list-group">
			<a href="#" class="list-group-item list-group-item-action">
				{{ message.content }}
			</a>
			<footer class="list-group-item list-group-item-action">
				<div class="author">
					{{ message.username }}
				</div>
				<div class="config"> 
					<a href='#' (click)="onEdit()">Edit</a>
					<a href='#' (click)="onDelete()">Delete</a>
				</div>
			</footer>
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
		text-align: right;
		font-size: 12px;
		width: 19%;
	}

    `]
})

export class MessageComponent {

	@Input() message :Message ;
	// changed = "changed ";
	constructor(private _messageService: MessageService){}

	onEdit(){
		this._messageService.editMessage(this.message);		
	}

	onDelete(){
		this._messageService.deleteMessage(this.message);
	}

}