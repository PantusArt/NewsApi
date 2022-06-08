import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=f097ef0a502f4ae1a28af58e54fbbc2e";

  // technewsurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=f097ef0a502f4ae1a28af58e54fbbc2e";

  // businessnewsurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=f097ef0a502f4ae1a28af58e54fbbc2e";

  //topheading()

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  // tecnews()

  
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  businesshNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
