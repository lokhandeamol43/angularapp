import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  username: string = 'Amol';

  resetUsername(){
    this.username = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
