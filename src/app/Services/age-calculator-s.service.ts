import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorSService {

  constructor() { }

  calculateAge(dateOfBirth: Date): { years: number; months: number; days: number } {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageMonths--;
      ageDays += daysInLastMonth;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
  }

  

  
  




}
