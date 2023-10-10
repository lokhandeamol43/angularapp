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

  GetMarketData() {
    this.rapidapiService.getDataFormMarket('US','AMD').subscribe(res => {
      console.log('rapid market data', res);
    })
  }

  getMovers() {
    this.rapidapiService.getMovers('us','en-US').subscribe(res => {
      console.log('get movers', res);
    })
  }


}
