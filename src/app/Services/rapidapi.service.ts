import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';

  url2 = 'https://country-state-city-search-rest-api.p.rapidapi.com/allcountries';

  apiUrlMarket= environment.webAPIUrl;
  apiUrlMovers= environment.webAPIUrl;



  constructor(private _httpClient: HttpClient) { }

  GetYahooFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '9b806c102emshddc858756e4325bp182ac5jsn590f1e4b256a',
       'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    })
   return this._httpClient.get(this.url, {headers: headers});
  }

  GetCountryData(){
    let headers1 = new HttpHeaders({
      'X-RapidAPI-Key': '7f4013b5c5mshca386355f315c38p1b1333jsnb074d3ba0829',
       'X-RapidAPI-Host': 'country-state-city-search-rest-api.p.rapidapi.com'
    })
    return this._httpClient.get(this.url2, {headers:headers1})
  }

  getDataFormMarket(region: string, symbols: string): Observable<any>
  {
    return this._httpClient.get(`${this.apiUrlMarket}get-quotes`, { 
      params: {
        region: region,
        symbols: symbols
      }
    });
  }


  getMovers(location: string, symb: string): Observable<any> 
  {
    return this._httpClient.get(`${this.apiUrlMovers}get-movers`, {
      params: {
        region : location,
        lang : symb
      }
    });
  }

}