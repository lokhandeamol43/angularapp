import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AssignMultiService {

  firstName = new Subject<any>();
  lastName = new Subject<any>();
//  firstName = new BehaviorSubject('UI developer');

  constructor() { }
}
