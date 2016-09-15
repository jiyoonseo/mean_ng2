import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function emailValidator(emailRegex?: RegExp): ValidatorFn{
	return (control: AbstractControl): {[key: string]: any} => {
		const email = control.value;

		if(!emailRegex){
			emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]/i ; 
		}
		const okay = !emailRegex.test(email);
		return okay ? {'invalidEmail': {email}} : null;
	};	
}

@Directive({
  selector: '[invalidEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: emailValidatorDirective, multi: true}]
})
export class emailValidatorDirective implements Validator, OnChanges {
  @Input() invalidEmail: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['invalidEmail'];
    if (change) {
      const val: string | RegExp = change.currentValue;
      const re = val instanceof RegExp ? val : new RegExp(val, 'i');
      this.valFn = emailValidator(re);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}

