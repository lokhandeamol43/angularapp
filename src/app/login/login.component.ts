import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  login(email, pass) {
    const enteredEmail = email.value;
    const enteredPassword = pass.value;
  
    console.log('Entered Email:', enteredEmail); // Add this line to check the entered value
  
    // Check if the login is successful
    const success = this._authService.checkUserNameAndPass(enteredEmail, enteredPassword);
  
    if (success) {
     
      this._route.navigate(['/home']);
    } else {
      // Handle login failure
      this._route.navigate(['/login']);
    }
  }


}
