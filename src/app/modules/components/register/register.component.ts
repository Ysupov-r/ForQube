import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    Username: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required),
  });

  constructor(
    private service: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.register(this.form.value);
    }
  }

}
