import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { passwordEqual } from '@helpers/validators';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SignUpServerAnswer} from '../../interfaces/SignUpServerAnswer';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    date_of_birth_day: new FormControl( '' , Validators.required),
    date_of_birth_month: new FormControl('', Validators.required),
    date_of_birth_year: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    gender_orientation: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signup({ ...this.signUpForm.value }).subscribe((res: SignUpServerAnswer) => {
      if (!res.error) {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
