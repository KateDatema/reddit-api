import { Component } from '@angular/core';
import {ApiRedditService} from './apiReddit.service';
import {SubReddit} from './subReddit';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //tells it where to go get the information
  providers:[ApiRedditService]
})


export class AppComponent {
  // declaring reddit as a subreddit 
  reddit: SubReddit ={} as SubReddit
  title = 'RedditAPIApp';

  //you want this to be private for sercuity? 
  constructor(private api: ApiRedditService){}

  //declaring a method
getPost(sub:string, slice:number){
  //getting the response from the main api
  let response = this.api.getPosts(sub);
  console.log(response);

  //
  let output = response.subscribe(
   (postlist: SubReddit) => this.reddit = 
    {kind: postlist.kind, data: postlist.data});

  output.splice(0, slice);
}
}
