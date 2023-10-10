import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  // data : string = 'Angular Batch 7 used for send data parent to child.';

  data : string = 'red';
  isDestroy: boolean = true;

  getDataFromChild(value){
    console.log(value);
    
  }

  OnTextValuCHanges(val){
    this.data = val.value;
    alert(val.value);
  }

  OnDestroy(){
    this.isDestroy = false;
  }
}
