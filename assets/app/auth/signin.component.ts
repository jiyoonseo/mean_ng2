import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { emailValidator } from './email-validator.directive';

@Component({
	selector: 'my-signin',
	template:`
		<section>
			<!-- below form is data-driven  -->
			<form [formGroup]="signinForm" >

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
				<div class="btn-right">
					<button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid" (click)="onSubmit()" >Submit</button>			
				</div>


			</form>

			
		</section>		
	`
	
})

export class SignInComponent implements OnInit{
	signinForm: FormGroup;

	constructor(private _fb: FormBuilder){} 

	ngOnInit(){
		this.buildForm();
	}

	buildForm() :void {
		this.signinForm = this._fb.group({
			email: ["", 
				[
					Validators.required, 
					emailValidator()
				]     
			],
			password: ["", Validators.required]
		})

		this.signinForm.valueChanges
      		.subscribe(data => this.onValueChanged(data));

    	this.onValueChanged();
	}

	formErrors = {
		"email": '',
		"password": '',
	}

	validationMessages = {
		"email": {
			'required':      'Email is required.',
			'invalidEmail':  'Email is invalid'
		},
		"password": {
			'required':      'Password is required.'
		}
	}

	onValueChanged(data?: any) {
		if (!this.signinForm) { console.log("no signinForm"); return; }

	    const form = this.signinForm;

	    for (const field in this.formErrors) {
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
		console.log(this.signinForm.value);
	}	
}