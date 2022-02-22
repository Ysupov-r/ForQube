import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private service: AuthService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe(res => {
        console.log('response login', res);
      });
    }
  }

}
