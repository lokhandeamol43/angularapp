import { Component, OnInit } from '@angular/core';
import { UserFilterServiceAssignService } from '../Services/user-filter-service-assign.service';

@Component({
  selector: 'app-user-filter-comp-assign',
  templateUrl: './user-filter-comp-assign.component.html',
  styleUrls: ['./user-filter-comp-assign.component.css']
})
export class UserFilterCompAssignComponent implements OnInit {

  searchName: any = '';

  users: any[] = [];
  // searchTerm: string = '';

  constructor(private objUser: UserFilterServiceAssignService) { }

  ngOnInit() {

    var obj = this.objUser.getUsers();
   
    obj.subscribe((res: any[]) =>  {
    this.users = res;
    console.log(res)
    // console.log(this.usersName);

   })


  }

}



//assignment 22/08/2023 custom filter pipe search by name