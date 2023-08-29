import { Component, OnInit } from '@angular/core';
import { AssignMultiService } from '../Services/assign-multi.service';

@Component({
  selector: 'app-assignment-multi-comp1',
  templateUrl: './assignment-multi-comp1.component.html',
  styleUrls: ['./assignment-multi-comp1.component.css']
})
export class AssignmentMultiComp1Component implements OnInit {

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



// change or update data in assignmentMultComp1 and reflect other three component (assignmentMultComp2,assignmentMultComp3,assignmentMultComp4) assignment