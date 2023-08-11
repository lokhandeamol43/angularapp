import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }


  products = [
    { name: 'laptop', id: '101'},
    { name: 'Mobile', id: '102'},
    { name: 'TV', id: '103'},
    { name: 'TAB', id: '104'},
  ]

}
