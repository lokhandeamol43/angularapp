import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];

  constructor(private objUser: UserService) { }

  ngOnInit() {
    
    var obj = this.objUser.getUsers();
   
    obj.subscribe((res: any[]) =>  {
    this.users = res;
    console.log(res)
    // console.log(this.users);

   })


  }

}
