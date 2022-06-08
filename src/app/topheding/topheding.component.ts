import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheding',
  templateUrl: './topheding.component.html',
  styleUrls: ['./topheding.component.css']
})
export class TophedingComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  // display data
  topheadingDisplay:any = [];

  ngOnInit(): void {

    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;
    })

  }

}
