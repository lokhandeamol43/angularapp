import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('utf8', '1')
      .set('srsearch', searchTerm)
      .set('origin', '*');

    return this.http.get(this.apiUrl, { params });
  }
}
