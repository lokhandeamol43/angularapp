import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users'; // API End Point
  // Inject this httpclient
  constructor(private httpClient: HttpClient) { }

  getUsers() {
   return this.httpClient.get(this.url);
  }
}
