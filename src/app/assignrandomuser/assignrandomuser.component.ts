import { Component, OnInit } from '@angular/core';
import { AssignrandomuserService } from '../Services/assignrandomuser.service';

@Component({
  selector: 'app-assignrandomuser',
  templateUrl: './assignrandomuser.component.html',
  styleUrls: ['./assignrandomuser.component.css']
})
export class AssignrandomuserComponent implements OnInit {
  users: any[] = [];
  // frozenColumns = ['Name', 'Email']; 
  numberOfUsers: number = 10; 

  constructor(private userService: AssignrandomuserService) {}

  ngOnInit(): void {
    this.fetchRandomUsers();
  }

  // Fetch data based on the number of users entered
  fetchRandomUsers() {
    this.userService.getRandomUsers(this.numberOfUsers).subscribe((data: any) => {
      if (data.results) {
        this.users = data.results;
      }
      console.log(data);
    });
  }
}
