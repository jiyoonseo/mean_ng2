import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
	selector: 'my-message-input',
	template: `
	<div class="row">
		<form (ngSubmit)="onSubmit(f)" #f="ngForm" class="message-form">
			<div class="form-group">
				<div >
					<label for="content" >Content</label>
					<input ngModel name="myContent" type="text" class="form-control" id="content" />
				</div>
				<div class="btn-right">
					<button type="submit" class="btn btn-outline-primary " >Send Message</button>
				</div>
				
			</div>
		</form>
	</div>
	`,
	styles:[`
	.message-form{
		margin: .25rem 1rem;
	}
	`]

})

export class MessageInputComponent{


	constructor(private _messageService:MessageService){}

	onSubmit(form: any){

		// console.log("inputted: " + JSON.stringify(form.value.myContent) );
		const message:Message = new Message(form.value.myContent, null, 'Dummy'); // form.content is from ngControl="content"
		this._messageService.addMessage(message);
		
	}

}