import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    Username: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private service: AuthService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe(res => {
        if (res) {
          console.log(this.form.value);
          localStorage.setItem('QubeUserName', this.form.value.Username);
          this.router.navigate(['/test'])
        } else this.toast.error('Не верный логин или пароль');
      });
    }
  }

}
