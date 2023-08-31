import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  arrPosts: Post[] = [];
  constructor(private _postSsrvice: PostService) { }

  ngOnInit() {
    this._postSsrvice.getPosts().subscribe(res => {
      this.arrPosts = res;
    })
  }

}
