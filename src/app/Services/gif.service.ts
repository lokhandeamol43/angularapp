import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey = '3oPlhqeTpQyKaG7E7Y3oij8lZWWnWGzJ';
  private apiUrl = 'https://api.giphy.com/v1/gifs/trending';

  constructor(private http: HttpClient) {}

  getTrendingGifs(offset: number = 0, limit: number = 10, searchTerm?: string) {
    const params = {
      api_key: this.apiKey,
      offset: offset.toString(),
      limit: limit.toString(),
      q: searchTerm || '', // Ensure searchTerm is passed correctly
    };
    return this.http.get(this.apiUrl, { params });
  }

  searchGifs(searchTerm: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', searchTerm);

    return this.http.get(this.apiUrl, { params });
  }
  
}