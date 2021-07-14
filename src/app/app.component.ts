import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiRedditService } from './apiReddit.service';
import { Reddit } from './reddit';
import { Logger } from './logger.service';
import { TopReddit } from './topReddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger, ApiRedditService]
})
export class AppComponent {
  title = 'RedditAPI';
  topReddit: TopReddit | null = null;

  constructor(private logger: Logger, private api: ApiRedditService) {}

  redditCall() {
    //in order to pull anything out of our call we need to subscribe
    //which is how we pull out the resulting data
    let response = this.api.getReddit();
    console.log(response);


  response.subscribe(
    //data here represents data coming out of our observable 
    //this variable should give us access to the JSON of our API result
    (data: TopReddit) => this.topReddit=
      { data : data.data,   
      }

  );
  }

}
