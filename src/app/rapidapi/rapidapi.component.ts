import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../Services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {
    this.rapidapiService.GetYahooFinance().subscribe(res => {
      console.log('from rapid api', res);
    })
  }

}
