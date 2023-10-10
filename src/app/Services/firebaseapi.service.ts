import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseapiService {

  url = 'https://angulard-8c22e-default-rtdb.firebaseio.com/';
  // httpclient performs the HTTP request. 
  constructor(private _httpClient: HttpClient) { }

  CreatePost()  {

    let postData = {
      title : 'This is batch 7',
      content: 'This is firebase create method'
    }
   return this._httpClient.post(this.url + 'post.json', postData);
  }

  getPostDataFirebase() 
  {
    return this._httpClient.get(this.url+ 'post.json');
  }

}