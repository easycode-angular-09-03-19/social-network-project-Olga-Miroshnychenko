import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ResetPasswordServerAnswer} from '../../interfaces/ResetPasswordServerAnswer';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {
  @Output ('modalClose') modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;


  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  closeModal(event) {
    this.modalCloseEvent.emit();
  }

  onSubmit() {
    this.authService.resetPassword({ ...this.resetPasswordForm.value }).subscribe((res: ResetPasswordServerAnswer) => {
      if (!res.error) {
        this.modalCloseEvent.emit();
      }
    });
  }
}
