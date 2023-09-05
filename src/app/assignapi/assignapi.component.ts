import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../Services/rapidapi.service';

@Component({
  selector: 'app-assignapi',
  templateUrl: './assignapi.component.html',
  styleUrls: ['./assignapi.component.css']
})
export class AssignapiComponent implements OnInit {

  searchName: any = '';

  worlds: any[] = [];

  constructor(private rapidapiService: RapidapiService) { }



  ngOnInit() {
    // Assuming this.objUser.getUsers() returns an Observable
    this.rapidapiService.GetCountryData().subscribe((res: any[]) => {
      this.worlds = res;
      console.log('from getUsers', res);
    });
  }

}
