import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent{

  tiles: Tile[] = [
    {text: 'Shop 1', cols: 1, rows: 1, color: '#FF9F54'},
    {text: 'Shop 2', cols: 1, rows: 1, color: '#FF9F54'},
    {text: 'Shop 3', cols: 1, rows: 1, color: '#FF9F54'},
    {text: 'Shop 4', cols: 1, rows: 1, color: '##FF9F54'},
  ];
}
