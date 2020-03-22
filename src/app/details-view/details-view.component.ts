import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface ProductsData {
  id: number;
  product: string;
  price: number;
}

const ELEMENT_DATA: ProductsData[] = [
  {id: new Date().getTime(), product: 'Steckdosenleiste', price: 60},
  {id: new Date().getTime(), product: 'Coronaimpfstoff', price: 60},
  {id: new Date().getTime(), product: 'Gesellschaftsspiele', price: 60},
  {id: new Date().getTime(), product: 'Dosenravioli', price: 60}
];

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  shop;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shop = ELEMENT_DATA[+params.get('id')];
    });
  }

}
