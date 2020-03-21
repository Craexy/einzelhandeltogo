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

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Four', cols: 1, rows: 2, color: 'lightblue'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
