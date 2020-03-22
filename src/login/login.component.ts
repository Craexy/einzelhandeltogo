import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Buyer} from "../shared/data";

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

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTestData()
      .subscribe(testData => this.testData = testData);
    console.log(this.testData);
  }

  login() {
    this.dataService.login(this.mail, this.pass)
      .subscribe(data => console.log(data));

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
