import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  
  show1 : boolean = false;

  showActions : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
