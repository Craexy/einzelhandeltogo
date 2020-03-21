import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seller-view',
  templateUrl: './seller-view.component.html',
  styleUrls: ['./seller-view.component.scss']
})
export class SellerViewComponent implements OnInit {

  constructor() { }

  isSeller=true;


  ngOnInit() {
  }

}
