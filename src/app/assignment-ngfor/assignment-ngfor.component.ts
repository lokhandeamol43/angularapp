import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-ngfor',
  templateUrl: './assignment-ngfor.component.html',
  styleUrls: ['./assignment-ngfor.component.css']
})
export class AssignmentNGFORComponent implements OnInit {

  countries = [
    { name: 'India', states: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'] },
    { name: 'USA', states: ['California', 'Texas', 'New York', 'Florida'] }
  ];

  selectedCountry: string;
  selectedState: string;
  statesOfSelectedCountry: string[] = [];


  constructor() { }

  ngOnInit() {
  }

  onCountryChange() {
    const selectedCountryData = this.countries.find(c => c.name === this.selectedCountry);
    this.statesOfSelectedCountry = selectedCountryData ? selectedCountryData.states : [];
    this.selectedState = null; // Reset the selected state when the country changes
  }
}
