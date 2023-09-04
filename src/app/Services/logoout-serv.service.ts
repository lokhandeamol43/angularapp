import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogooutServService {

  constructor() { }

  getUserInfo() {
    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  clearLocalStorage() {
    // Clear local storage
    localStorage.clear();
  }
}
