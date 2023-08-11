import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive-form-assign',
  templateUrl: './dynamic-reactive-form-assign.component.html',
  styleUrls: ['./dynamic-reactive-form-assign.component.css']
})
export class DynamicReactiveFormAssignComponent implements OnInit {

  myForm: FormGroup;
  isFormSubmitted = false;


  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]


  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email, Validators.pattern('.*@gmail\.com$')] )
      }),     
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([ new FormControl('', Validators.required)])
    })
  }

  OnSubmit() {
    if(this.myForm.valid){
      console.log('Submit method called', this.myForm);
      console.log('Form Value', this.myForm.value);
    this.isFormSubmitted = true;
      
    }
  }

  OnAddSkills() {
    (<FormArray>this.myForm.get('skills')).push(new FormControl('', Validators.required))
  }

  OnRemoveSkills(index) {
    (<FormArray>this.myForm.get('skills')).removeAt(index);
  }

  // OnRemoveLastSkill() {
  //   const skillsFormArray = this.myForm.get('skills') as FormArray;
  //   if (skillsFormArray.length > 0) {
  //     skillsFormArray.removeAt(skillsFormArray.length - 1);
  
  //   }
 
  // }
}
