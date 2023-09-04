import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogooutServService } from '../Services/logoout-serv.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  userName: string;
  loggedInUsername: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('name'); // You should set the name in local storage during login.
    this.loggedInUsername = localStorage.getItem('username');
  }

  logout() {
    // Clear local storage and navigate to the login page.
    localStorage.removeItem('username');
    localStorage.removeItem('name'); // Optionally remove the name if it's stored.
    this.router.navigate(['/login']);
  }
}
