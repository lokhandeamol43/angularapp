import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataInput : string;

  @Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('Input data from parent', this.dataInput)
  }

  addToFood() {
    this.foodEvent.emit('Banana');
  }

}
