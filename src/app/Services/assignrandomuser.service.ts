import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignrandomuserService {
  constructor(private http: HttpClient) {}

  getRandomUsers(count: number) {
    return this.http.get(`https://randomuser.me/api/?results=${count}`);
  }
}