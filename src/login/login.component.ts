import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Buyer, } from "../shared/data";
import {CookieService} from "ngx-cookie-service";


export interface TestData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  testData: TestData[];
  buyers: Buyer[];
  mail: string = "";
  pass: string = "";
  token: string;

  constructor(private dataService:DataService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.dataService.getTestData()
      .subscribe(testData => this.testData = testData);
    console.log(this.testData);
  }

  login() {
    this.dataService.login(this.mail, this.pass)
      .subscribe(data => {
        this.parseToken(data);
      });
  }

  parseToken(obj)
  {
    for(var key in obj)
    {
      this.cookieService.set('token', obj[key]);
      if(obj[key] instanceof Object)
      {
        this.parseToken(obj[key]);
      }
    }
  }

  test() {
    this.dataService.getBuyers()
      .subscribe(data => {
        this.buyers = data;
        console.log(data);
      });
    console.log(this.buyers);
  }


}
