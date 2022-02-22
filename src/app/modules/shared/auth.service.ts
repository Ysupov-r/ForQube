import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    { username: 'user1', password: 'user1' }
  ];

  constructor() { }

  login(form: ILoginForm) {
    for (let user of this.users) {
      if (user.username === form.Username && user.password === form.Password) return of(true);
    }
    return of(false);
  }
}

export interface ILoginForm {
  Username: string;
  Password: string;
}