import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nested-form-assignment',
  templateUrl: './nested-form-assignment.component.html',
  styleUrls: ['./nested-form-assignment.component.css']
})
export class NestedFormAssignmentComponent implements OnInit {

  // username = '';
  // defaultCourseValue = 'JavaScript';

  constructor() { }

  ngOnInit() {
  }

  // OnSubmit(form: NgForm) {
  //   console.log('form submitted', form);

  //   let username1 = form.value.username1;
  //   console.log('Username :', username1);

  //   let email = form.value.email;
  //   console.log('Email :', email);

  //   let password = form.value.password;
  //   console.log('Password :', password);

  //   let course = form.value.course;
  //   console.log('Selected Course :', course);
    
  //   let country = form.value.addressCountry.country;
  //   console.log('Country Name :', country)

  //   let state = form.value.addressCountry.state;
  //   console.log('State Name :', state)
  // }


}
