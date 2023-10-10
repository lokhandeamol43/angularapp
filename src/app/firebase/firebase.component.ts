import { Component, OnInit } from '@angular/core';
import { FirebaseapiService } from '../Services/firebaseapi.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private _firebaseService: FirebaseapiService) { }

  ngOnInit() {
    this._firebaseService.CreatePost().subscribe(res => {
      console.log('firebase', res)
    })

    this._firebaseService.getPostDataFirebase().subscribe(res => {
      console.log('get data from firebase', res);
    })

  }

}
