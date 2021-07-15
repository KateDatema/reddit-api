import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { SubReddit } from "./subReddit";

//The job of the service is to handle the request/response
//and passing over the raw data. 

@Injectable()
export class ApiRedditService {
    apiBaseUrl = 'https://www.reddit.com/r/';
    constructor(private http: HttpClient) { }

    getPosts(sub:string): any {
        let url = this.apiBaseUrl+sub+"/.json";
        return this.http.get(url);
    }
}