import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { passwordEqual, passwordEqualForInput } from '@helpers/validators';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [ Validators.required, passwordEqualForInput ]),
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return console.log('Validate error');
    }
    // запрос на регистрацию
  }
}
