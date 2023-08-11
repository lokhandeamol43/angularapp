import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment-one',
  templateUrl: './reactive-assignment-one.component.html',
  styleUrls: ['./reactive-assignment-one.component.css']
})
export class ReactiveAssignmentOneComponent implements OnInit {

  assignForm: FormGroup;

  isFormSubmitted = false;

  userInputValues: any = {};

  constructor() {
    this.userForm();
 
   }

  ngOnInit() {
  }

  userForm(){
    this.assignForm = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'phonenumber': new FormControl(null, Validators.required),
      'bio': new FormControl(null, Validators.required),


      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'confirmpassword': new FormControl(null, Validators.required),
      'agree_terms': new FormControl(null, Validators.required)
    })
  }

  OnSubmit() {
    if(this.assignForm.valid){
      console.log('Submit method called', this.assignForm);

  //   // Log the text values of the form fields
  // console.log('Fullname:', this.assignForm.get('fullname').value);
  // console.log('Birthday:', this.assignForm.get('birthday').value);
  // console.log('Gender:', this.assignForm.get('gender').value);
  // console.log('Phone Number:', this.assignForm.get('phonenumber').value);
  // console.log('Bio:', this.assignForm.get('bio').value);
  // console.log('Username:', this.assignForm.get('username').value);
  // console.log('Email:', this.assignForm.get('email').value);
  // console.log('Password:', this.assignForm.get('password').value);
  // console.log('Confirm Password:', this.assignForm.get('confirmpassword').value);
  // console.log('Agree to Terms:', this.assignForm.get('agree_terms').value);

    // Store the user input values

    this.userInputValues = {
      fullname: this.assignForm.get('fullname').value,
      birthday: this.assignForm.get('birthday').value,
      gender: this.assignForm.get('gender').value,
      phonenumber: this.assignForm.get('phonenumber').value,
      bio: this.assignForm.get('bio').value,
      username: this.assignForm.get('username').value,
      email: this.assignForm.get('email').value,
      password: this.assignForm.get('password').value,
      confirmpassword: this.assignForm.get('confirmpassword').value,
      agree_terms: this.assignForm.get('agree_terms').value,
    };

    this.isFormSubmitted = true

    }

  }

}
