import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TestData} from "./login/login.component";
import {Observable, of} from "rxjs";
import {Buyer, Driver} from "./shared/data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "";

  TEST: TestData[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor(private http: HttpClient) {}

  baseUrl: string = '';

  getTestData(): Observable<TestData[]>{
    //return this.http.get(this.baseURL+'HelloWorold');
    return of(this.TEST);
  }

  getBuyer(id: number): Observable<Buyer>{
    return this.http.get<Buyer>(this.baseURL + '/buyer/' + id);
  }

  getBuyers(): Observable<Buyer[]>{
    return this.http.get<Buyer[]>(this.baseURL + '/buyer/');
  }

  getDriver(id: number): Observable<Driver>{
    return this.http.get<Driver>(this.baseURL + '/driver/' + id);
  }

  getDrivers(): Observable<Driver[]>{
    return this.http.get<Driver[]>(this.baseURL + '/driver/');
  }



}
