import {Post} from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostService {

  private postarray: Post[] = [];
  // like an emmiter
 private postUpdateSubject = new Subject<Post[]>();



getPosts() {
  return [...this.postarray];
}

getIfPostArrayUpdatedListener(){

  return this.postUpdateSubject.asObservable();
}
addPost(title: string , content: string){
const tempPost: Post = {title:title,content: content};

this.postarray.push(tempPost);
this.postUpdateSubject.next([...this.postarray]);
}

}
