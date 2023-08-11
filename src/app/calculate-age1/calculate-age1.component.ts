import { Component, OnInit } from '@angular/core';
import { AgeCalculatorSService } from '../Services/age-calculator-s.service';

@Component({
  selector: 'app-calculate-age1',
  templateUrl: './calculate-age1.component.html',
  styleUrls: ['./calculate-age1.component.css']
})
export class CalculateAge1Component implements OnInit {

  dateOfBirth: Date;
  age: { years: number; months: number; days: number };

  constructor(private ageCalculatorService: AgeCalculatorSService) {}

  ngOnInit(){
   
  }

  calculateAge(): void {
    this.age = this.ageCalculatorService.calculateAge(this.dateOfBirth);
  }

  resetForm(): void {
    this.dateOfBirth = undefined;
    this.age = null;
  }


}
