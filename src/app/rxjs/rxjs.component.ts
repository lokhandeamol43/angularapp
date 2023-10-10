import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from } from 'rxjs';
import {filter, take, takeLast, map, mergeMap} from "rxjs/operators";
import { UserService } from '../Services/user.service';
import { Usered } from '../models/usered';
import { Post } from '../models/post';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  users =  [
    {name: 'Dnyanesh', id: '101', gender: 'Male'},
    {name: 'Test', id: '102', gender: 'Female'},
    {name: 'Jack', id: '103', gender: 'Male'}

  ]

  randomNames = ['Dnyanesh', 'codemind', 'Angular', 'HTML', 'JavaScript'];

  userName;
  posts;
  albums;


  USERS = 'https://jsonplaceholder.typicode.com/users';
  POSTS = 'https://jsonplaceholder.typicode.com/posts';

  data : [Usered[], Post[]];

  constructor( private http: HttpClient) {

    this.posts = [];
    this.albums = [];
    this.userName = 'Codemind';

   }

  ngOnInit() {

    // this.getDataByUsingSubscribe();

    // this.getDataByUsingMergeMap();

    this.getDataByUsingForkJoin();

    //custom observable
    const source = from([
      {name: 'Joe', age: 37},
      {name: 'Jack', age: 25},

    ]);

    // filter out the people with age unser 30 

    const result = source.pipe(filter(p=> p.age >= 30));

    result.subscribe(res=> {
      console.log('after filter value', res);
    })

    const obs = from(this.randomNames);

    obs.pipe(
      take(2)
    ).subscribe(res => {
      console.log('take top 2', res)
    })

    const obs2 = from(this.randomNames);

    obs2.pipe(
      takeLast(2)
    ).subscribe(res => {
      console.log('take last 2', res)
    })

  }


  //nested subscription
  getDataByUsingSubscribe() {
    this.http.get('https://jsonplaceholder.typicode.com/users?username=Bret')
    .pipe(map(users => users[0]))
    .subscribe(user=> {
      this.userName = user.username;
      
      console.log('rxjs username', this.userName);
      console.log('first api call', user);
      this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${user.id}`)
      .subscribe( posts => {
        this.posts = posts;

        console.log('rxjs nested post data', this.posts);
      });

      this.http.get(`https://jsonplaceholder.typicode.com/albums?id=${user.id}`)
      .subscribe( albums => {
        this.albums = albums;
        console.log('rxjs nested albums ', this.albums);
      })
    })
   }

   //mergemap opertaor ==>> useful in handling multiple request
   getDataByUsingMergeMap() {
    this.http.get('https://jsonplaceholder.typicode.com/users?username=Bret').pipe(
      map (users => {
        const user = users[0];
        this.userName = user.username;
        return user;
      }),
      mergeMap( user => this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${user.id}`))
    ).subscribe( posts => {
      this.posts = posts;
      console.log('after merge map', this.posts);
    });
   }

   getDataByUsingForkJoin() {

    const users = this.http.get<Usered[]>(this.USERS);
    const posts = this.http.get<Post[]>(this.POSTS);
 
     // users.subscribe(res => {
     //   console.log('users data in rxjs comp', res);
     // });
 
     // posts.subscribe(res=> {
     //   console.log('posts data in rxjs comp', res);
     // });
 
     forkJoin([users, posts]).subscribe(res => {
       this.data = res;
       console.log('after fork join applied', res);
     })
 
    }


}
