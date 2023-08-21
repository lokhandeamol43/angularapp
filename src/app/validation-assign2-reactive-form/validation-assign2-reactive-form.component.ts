import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-validation-assign2-reactive-form',
  templateUrl: './validation-assign2-reactive-form.component.html',
  styleUrls: ['./validation-assign2-reactive-form.component.css']
})
export class ValidationAssign2ReactiveFormComponent implements OnInit {

  vlidationForm: FormGroup; 
  isFormSubmitted = false;

  notAllowedNames = ['Test', 'test'];


  constructor() { 
    this.reactForm();
  }

  ngOnInit() {
  }

  reactForm() {
    this.vlidationForm = new FormGroup({
      'projectDetails': new FormGroup({
        'projectname': new FormControl('', [Validators.required, Validators.minLength(3)], this.asyncNameNotAllowedValidator()),
        'mail': new FormControl(null,[Validators.required, Validators.email],[ this.EmailNotAllowed, this.EmailDomainNotAllowed] )
      }),
      'projectStatus': new FormControl('Stable'),
      'submit': new FormControl()
    });
  }

  OnSubmit() {
    if (this.vlidationForm.valid) {
      // console.log('Submit method called', this.vlidationForm);
      // console.log('Form Value', this.vlidationForm.value);
      this.isFormSubmitted = true; // You might want to uncomment this if you're using this variable somewhere else
    }
    console.log('Submit method called', this.vlidationForm);
  }






  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }


  // NameNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
  //   const myPromise4 = new Promise<any>((resolve, reject) => {
  //     setTimeout( () => {

  //       if (control.value === 'Test') {
  //         resolve({'namesIsNotAllowed': true})
  //       } 
  //     }, 3000)
  //   })
  //   return myPromise4;
  // }



  asyncNameNotAllowedValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      const value = control.value;
      if (this.notAllowedNames.includes(value)) {
        return of({ 'namesIsNotAllowed': true });
      } else {
        return of(null);
      }
    };
  }



  EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {

        if (control.value === 'abc@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myPromise;
  }


  EmailDomainNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise1 = new Promise<any>((resolve, reject) => {
      setTimeout( () => {

        if (!control.value.match('.*@gmail\\.com$')) {
          resolve({'emailDomainNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myPromise1;
  }


}
