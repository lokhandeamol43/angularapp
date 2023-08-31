import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private httpClient: HttpClient) { }

 getPosts() : Observable<any>
 {
   return this.httpClient.get(this.url);
 }
 getpostById(id: number) : Observable<any>
 {
  return this.httpClient.get(this.url+ id);
 }
}