import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Message } from './message';

@Injectable()
export class MessageService{

	messages: Message[] = [];

	addMessage(message: Message){
		this.messages.push(message);
		console.log(this.messages);
	}

	deleteMessage(message: Message){
		this.messages.splice(this.messages.indexOf(message), 1);
	}

	editMessage(message: Message){
		this.messages[this.messages.indexOf(message)] = new Message('Editted', null, 'js');
	}
	
	getMessages(){
		return this.messages;
	}


}