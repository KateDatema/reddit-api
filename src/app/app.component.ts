import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiRedditService } from './apiReddit.service';
import { Subreddit, SubReddit } from './subReddit';
import { Logger } from './logger.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger, ApiRedditService]
})

export class AppComponent {
  title = 'RedditAPI';
  reddit: SubReddit ={} as SubReddit

  constructor(private logger: Logger, private api: ApiRedditService) {}

  getPost(sub:string, slice:number){
    let response = this.api.getPosts(sub);
    console.log(response);
    
    let output = response.subscribe(
      (postlist: SubReddit) => this.reddit = 
      {kind: postlist.kind, data: postlist.data});
    
      output.splice(0, slice);
    
    }
    }
