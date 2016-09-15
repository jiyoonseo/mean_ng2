export class Message{
	content: string;
	username: string;
	messageId: string;
	userId: string;

	constructor(content: string, messageId?: string, username?: string, userId?: string){
		this.content = content;
		messageId? this.messageId = messageId : messageId = '';
		username? this.username = username : username = '';
		userId? this.userId = userId : userId = '';
	}
}

