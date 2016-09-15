export class User{

	// put the keyword 'public' will make the 'email' field created in the user class.
	constructor(public email: string, public password: string, public firstName?: string, public lastName?: string){

	}
}