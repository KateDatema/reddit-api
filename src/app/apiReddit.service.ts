import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";

//The job of the service is to handle the request/response
//and passing over the raw data. 

@Injectable()
export class ApiRedditService {
    apiBaseUrl: string = "https://www.reddit.com/r/aww";
    constructor(private http: HttpClient) { }

    //this is equivalent of the CallAPI(), its only job is to get an http response 
    getReddit(): any {
        //the get method returns an observable object 
        //observable is an async object that waits 
        //for the HTTP call to be done processing and spits the response for us
        let url = this.apiBaseUrl + "/.json";
        return this.http.get(url);
    }
}