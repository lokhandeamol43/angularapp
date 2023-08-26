import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  todaysDate = new Date();

  price : number = 5000;

  myObservable;


  emp = [] = [
    { id: '1', name:'jack'},
    { id: '2', name:'Ron'},

  ]

  constructor() { }

  ngOnInit() {

    this.myObservable = new Observable((observer) => {
      console.log('myObservable start')
      setTimeout(() => {
        observer.next('Ang B7')
      }, 1000)
    })
  

  }

}
