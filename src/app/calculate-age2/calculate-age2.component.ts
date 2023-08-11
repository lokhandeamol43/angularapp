import { Component, OnInit } from '@angular/core';
import { AgeCalculatorSService } from '../Services/age-calculator-s.service';

@Component({
  selector: 'app-calculate-age2',
  templateUrl: './calculate-age2.component.html',
  styleUrls: ['./calculate-age2.component.css']
})
export class CalculateAge2Component implements OnInit {

  dateOfBirth: Date;
  age: { years: number; months: number; days: number };

  constructor(private ageCalculatorService: AgeCalculatorSService) {}

  ngOnInit(): void {
    // Perform any initialization tasks here
  }

  calculateAge(): void {
    this.age = this.ageCalculatorService.calculateAge(this.dateOfBirth);
  }

  resetForm(): void {
    this.dateOfBirth = null;
    this.age = null;
  }

}
