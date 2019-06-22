import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import {Subscription } from 'rxjs';
import { PostService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postsListArray: Post[];
  private postSubject: Subscription;


  // subscription vs subscriber

  constructor(public servicePost: PostService ) { }

  ngOnInit() {
    this.postsListArray = this.servicePost.getPosts();
    this.postSubject = this.servicePost.getIfPostArrayUpdatedListener().subscribe(

      (posts: Post[]) => {this.postsListArray = posts;
      });
  }

  ngDestroy(){
    this.postSubject.unsubscribe();
  }

}
