import { Component } from '@angular/core';
import {ApiRedditService} from './apiReddit.service';
import {SubReddit} from './subReddit';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiRedditService]
})
export class AppComponent {
  reddit: SubReddit ={} as SubReddit
  title = 'RedditAPIApp';


  constructor(private api: ApiRedditService){}

getPost(sub:string, slice:number){
let response = this.api.getPosts(sub);
console.log(response);

let output = response.subscribe(
  (postlist: SubReddit) => this.reddit = 
  {kind: postlist.kind, data: postlist.data});

  output.splice(0, slice);

}
}
