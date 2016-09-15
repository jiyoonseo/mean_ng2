import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
	selector: 'my-message-list',
	template: `
		<my-message *ngFor="let message of messages;" [message]="message" ></my-message>						
	`


})

export class MessageListComponent{

	messages: Message[] ;

	constructor(private _messageService: MessageService){}

	ngOnInit(){
		this.messages = this._messageService.getMessages();
	}

	

}