import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiclogin',
  templateUrl: './dynamiclogin.component.html',
  styleUrls: ['./dynamiclogin.component.css']
})
export class DynamicloginComponent implements OnInit {

  currentForm: string = 'login';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    
  }

  loginClick() {
    const loginForm = this.elementRef.nativeElement.querySelector('.login');
    const loginText = this.elementRef.nativeElement.querySelector('.title-text .login');
    loginForm.style.marginLeft = '0%';
    loginText.style.marginLeft = '0%';
  }

  signupClick() {
    const loginForm = this.elementRef.nativeElement.querySelector('.login');
    const loginText = this.elementRef.nativeElement.querySelector('.title-text .login');
    loginForm.style.marginLeft = '-50%';
    loginText.style.marginLeft = '-50%';
  }

  signupLinkClick(event: Event) {
    const signupBtn = this.elementRef.nativeElement.querySelector('label.signup');
    signupBtn.click();
    event.preventDefault();
  }

  setCurrentForm(form: string) {
    this.currentForm = form;
  }
}


