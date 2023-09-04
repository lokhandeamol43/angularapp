import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  checkUserNameAndPass(username: string, pass: string) {
    if (username == 'admin' && pass == 'admin77') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }


  
}