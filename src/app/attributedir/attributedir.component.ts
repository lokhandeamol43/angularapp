import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedir',
  templateUrl: './attributedir.component.html',
  styleUrls: ['./attributedir.component.css']
})
export class AttributedirComponent implements OnInit {

  colorVal = 'blue';

  peoples: any[] = [
    {'name': 'Jack', 'country': 'UK'},
    {'name': 'Sumit', 'country': 'USA'},
    {'name': 'Anup', 'country': 'HK'},
    {'name': 'Tom', 'country': 'UK'},
    {'name': 'Surya', 'country': 'USA'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
