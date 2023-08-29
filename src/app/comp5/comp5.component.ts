import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  userName = 'Codemind';
  test;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {

    this.utilityService.userName.subscribe(res => {
      this.userName = res;
      console.log('res from subject', res);
    })

  }

  updateUserName(uname){
    this.userName = uname.value;
    //console.log('Method called', uname.value);

    // we are inserting value inside observable
    this.utilityService.userName.next(uname.value);
  }

}
