import { Component, OnInit } from '@angular/core';
import { AssignMultiService } from '../Services/assign-multi.service';

@Component({
  selector: 'app-assignment-multi-comp2',
  templateUrl: './assignment-multi-comp2.component.html',
  styleUrls: ['./assignment-multi-comp2.component.css']
})
export class AssignmentMultiComp2Component implements OnInit {

  firstName: string;
  lastName: string;

  constructor(private assignMultiService : AssignMultiService) { }

  ngOnInit() {

    this.assignMultiService.firstName.subscribe(res => {
      this.firstName = res;
      console.log('First name from subject', res);
    });

    this.assignMultiService.lastName.subscribe(res => {
      this.lastName = res;
      console.log('Last name from subject', res);
    });

  }

  updateName(firstn:string,lastN:string){
    this.firstName = firstn;
    //console.log('Method called', uname.value);

    // we are inserting value inside observable
    this.assignMultiService.firstName.next(firstn);


    this.lastName = lastN;

    this.assignMultiService.lastName.next(lastN);
  }
 
}
