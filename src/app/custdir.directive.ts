import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  // DI

  constructor(private el: ElementRef) { 

    console.log(el)

   // el.nativeElement.style.backgroundColor = 'gray';

    el.nativeElement.style.display = 'none'

  }

}
