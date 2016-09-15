import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { emailValidator } from './email-validator.directive';


@Component({
	selector: 'my-signup',
	template:`
		<section>
			<!-- below form is data-driven  -->
			<form [formGroup]="signupForm" >
				<div class="form-group row">
					<label for="firstName" class="col-sm-2 col-form-label">First Name</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="firstName" formControlName="firstName"/>
					</div>
					
					<!-- Error Handling -->
					<div *ngIf="formErrors && formErrors.firstName" class="alert alert-danger">
						{{ formErrors.firstName }}
					</div>
				</div>
				<div class="form-group row">
					<label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="lastName" formControlName="lastName"/>					
					</div>
					<!-- Error Handling -->
					<div *ngIf="formErrors && formErrors.lastName" class="alert alert-danger">
						{{ formErrors.lastName }}
					</div>
				</div>
				<div class="form-group row">
					<label for="email" class="col-sm-2 col-form-label">Email</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="email" formControlName="email" />				
					</div>
					<!-- Error Handling -->
					<div *ngIf="formErrors && formErrors.email" class="alert alert-danger">
						{{ formErrors.email }}
					</div>
					
				</div>
				<div class="form-group row">
					<label for="password" class="col-sm-2 col-form-label">Password</label>
					<div class="col-sm-10">
						<input type="password" class="form-control" id="password" formControlName="password"/>					
					</div>
					<!-- Error Handling -->
					<div *ngIf="formErrors && formErrors.password" class="alert alert-danger">
						{{ formErrors.password }}
					</div>
				</div>
				<div class="form-group row">
					<label for="passwordConfirmed" class="col-sm-2 col-form-label">Password Confirm</label>
					<div class="col-sm-10">
						<input type="password" class="form-control" id="passwordConfirmed" formControlName="passwordConfirmed"/>					
					</div>
					<!-- Error Handling -->
					<div *ngIf="formErrors && formErrors.passwordConfirmed" class="alert alert-danger">
						{{ formErrors.passwordConfirmed }}
					</div>
				</div>
				
				<div class="btn-right">
					<button type="submit" class="btn btn-primary" [disabled]="!signupForm.valid" (click)="onSubmit()" >Submit</button>			
				</div>

			</form>

			
		</section>
	`
})

export class SignupComponent implements OnInit{

	signupForm: FormGroup;

	constructor(private _fb: FormBuilder){} 

	ngOnInit(){
		this.buildForm();
	}

	buildForm() :void {
		this.signupForm = this._fb.group({
			firstName: ["", Validators.required],
			lastName: ["", Validators.required],
			email: ["", 
				[
					Validators.required, 
					emailValidator()
				]     
			],
			password: ["", Validators.required],
			passwordConfirmed: ["", Validators.required]
		})

		this.signupForm.valueChanges
      		.subscribe(data => this.onValueChanged(data));

    	this.onValueChanged();
	}

	formErrors = {
		"firstName": '',
		"lastName": '',
		"email": '',
		"password": '',
		"passwordConfirmed": ''
	}

	validationMessages = {
		"firstName": {
			'required':      'First name is required.'
		},
		"lastName": {
			'required':      'Last name is required.'
		},
		"email": {
			'required':      'Email is required.',
			'invalidEmail':  'Email is invalid'
		},
		"password": {
			'required':      'Password is required.'
		},
		"passwordConfirmed": {
			'required':      'Password Confirm is required.'
		}
	}

	onValueChanged(data?: any) {
		if (!this.signupForm) { console.log("no signupForm"); return; }

		// let emailError = this.signupForm.get('email') ;
		// if( emailError.errors && emailError.errors.invalidEmail ){
		// 	// console.log( emailError.errors.invalidEmail );	// return object
			
		// }else{
		// 	// console.log("email is good."); 
		// }

	    const form = this.signupForm;
	    // console.log("formErrros?" + this.formErros);

	    for (const field in this.formErrors) {
	      // clear previous error message (if any)
	      // console.log("field?" + field);
	      this.formErrors[field] = '';
	      const control = form.get(field);
	      if (control && control.dirty && !control.valid) {
	        const messages = this.validationMessages[field];
	        for (const key in control.errors) {
	          this.formErrors[field] += messages[key] + ' ';
	        }
	      }
	    }		
		
	}

	onSubmit(){
		console.log(this.signupForm.value);
	}
	
	
	get value(): any{// this is for test		
		return this.signupForm.value;
		/*
		Include the following line to implement in html

			<div>
				{{ value | json }}
			</div>
		*/
	}

	

	
	
}