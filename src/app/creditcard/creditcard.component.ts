import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flip() {
    const card = document.getElementById('card');
    const frontReflection = document.querySelector('#front .reflection');
    const backReflection = document.querySelector('#back .reflection');

    if (card && frontReflection && backReflection) {
      card.classList.toggle('flipped');
      frontReflection.classList.toggle('move');
      backReflection.classList.toggle('move');
    }
  }
}
