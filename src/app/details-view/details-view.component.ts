import { Component, OnInit } from '@angular/core';

export interface ProductData {
  id: number;
  product: string;
  price: number;
}

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  products: ProductData[] = [
    {id: new Date().getTime(), product: 'Steckdosenleiste', price: 60},
    {id: new Date().getTime(), product: 'Coronaimpfstoff', price: 60},
    {id: new Date().getTime(), product: 'Gesellschaftsspiele', price: 60},
    {id: new Date().getTime(), product: 'Dosenravioli', price: 60}
  ];

  constructor() { }

  addToShoppingCart(event, id){
    window.alert("Ware #"+id+ " wurde dem Einkauswagen hinzugefügt :)")
  }

  ngOnInit() {
  }

}
