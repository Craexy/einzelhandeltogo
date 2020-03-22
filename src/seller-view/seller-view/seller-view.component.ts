//app.component.ts
import { Component, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {MatTable} from "@angular/material/table"

import { DataService } from 'src/data.service';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';

export interface UsersData {
  id: number;
  product: string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, product: 'Steckdosenleiste'},
  {id: 2, product: 'Tabak'},
  {id: 3, product: 'Gesellschaftsspiele'},
  {id: 4, product: 'Dosenravioli'}
];
@Component({
  selector: 'app-seller-view',
  templateUrl: './seller-view.component.html',
  styleUrls: ['./seller-view.component.scss']
})
export class SellerViewComponent {
  displayedColumns: string[] = ['id', 'product', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      product:row_obj.product
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.product = row_obj.product;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }


}
