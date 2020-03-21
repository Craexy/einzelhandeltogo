import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

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

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTestData()
      .subscribe(testData => this.testData = testData);
    console.log(this.testData);
  }

  login() {
    console.log("login button clicked");
  }


}
