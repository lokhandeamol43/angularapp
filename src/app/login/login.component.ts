import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }


  login(email, pass) {
    console.log(email.value, pass.value);
    this._route.navigate(['home']);
  }



}
