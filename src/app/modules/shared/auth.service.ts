import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    { username: 'user1', password: 'user1' }
  ];

  constructor(
    private toast: ToastrService
  ) { }

  login(form: ILoginForm) {
    for (let user of this.users) {
      if (user.username === form.Username && user.password === form.Password) return of(true);
    }
    return of(false);
  }

  register(form: ILoginForm) {
    const test = new Promise((resolve, reject) => {
      const findUser = this.users.filter(user => user.username === form.Username);
      if (findUser.length > 0) reject('Пользователь уже существует');
        else {
          this.users.push({ username: form.Username, password: form.Password });
          resolve('Пользователь был создан');
        }
    });
    test.then(res => {
      this.toast.success(`${res}`);
    }, err => {
      this.toast.error(`${err}`);
      return of(err);
    });
  }
}

export interface ILoginForm {
  Username: string;
  Password: string;
}