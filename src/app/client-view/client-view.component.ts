import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})

export class ClientViewComponent implements OnInit {

  kategorien = [
    { id: 0, name: 'Sonstiges' },
    { id: 1, name: 'Lebensmittel' },
    { id: 2, name: 'Getränke' },
    { id: 3, name: 'Kleidung' },
    { id: 4, name: 'Schuhe' },
    { id: 5, name: 'Drogerie' },
    { id: 6, name: 'Optiker' },
    { id: 7, name: 'Haushaltswaren' },
    { id: 8, name: 'Elektronikwaren' },
    { id: 9, name: 'Outdoor & Sport' },
    { id: 10, name: 'Kunst & Musik' },
    { id: 11, name: 'Schreibwaren' },
    { id: 12, name: 'Geschenke' },
    { id: 13, name: 'Wäscherei' },
    { id: 14, name: 'Tabakwaren' },
    { id: 15, name: 'Spielzeugwaren' }
  ];


  images = [
    { id: 0, url: "../../assets/SupportLocals_logo.png" },
    { id: 0, url: "../../assets/buchhandlung.jpeg" },
    { id: 0, url: 'Sonstiges' },
    { id: 0, url: 'Sonstiges' },
    { id: 0, url: 'Sonstiges' },
    { id: 0, url: 'Sonstiges' },
    { id: 0, url: 'Sonstiges' },
  ]

  tiles: Tile[] = [
    {text: 'Mustershop 1', cols: 1, rows: 2, color: '#3F51B5'},
    {text: 'Mustershop 2', cols: 1, rows: 2, color: '#3F51B5'},
    {text: 'Mustershop 3', cols: 1, rows: 2, color: '#3F51B5'},
    {text: 'Mustershop 4', cols: 1, rows: 2, color: '#3F51B5'},
    {text: 'Mustershop 5', cols: 1, rows: 2, color: '#3F51B5'},
    {text: 'Mustershop 6', cols: 1, rows: 2, color: '#3F51B5'},
    {text: 'Mustershop 7', cols: 1, rows: 2, color: '#3F51B5'},
  ];

  public open(event, id) {
    window.location.href='/shop/'+(id+1);
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
