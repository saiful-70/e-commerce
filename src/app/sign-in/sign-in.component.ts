import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  email: string = '';
  password: string = '';

  onSignIn(e: Event) {
    e.preventDefault();
    if (this.email === 'admin@gmail.com' && this.password === '@dmin1234') {
      this.router.navigate(['admin-dashboard'], { relativeTo: this.route });
    } else {
      console.log('username or password is wrong');
    }
  }

  onSkip() {
    this.router.navigate(['products'], { relativeTo: this.route });
  }
}
