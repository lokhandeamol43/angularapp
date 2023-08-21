import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  todaysDate = new Date();

  price : number = 5000;


  emp = [] = [
    { id: '1', name:'jack'},
    { id: '2', name:'Ron'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
