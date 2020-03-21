import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-view',
  templateUrl: './seller-view.component.html',
  styleUrls: ['./seller-view.component.scss']
})
export class SellerViewComponent {
    editField: string;
    productList: Array<any> = [
      { id: 0, name: 'Dummyprodukt', description: "Dummyeigenschaften", price: 50 },
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.productList[id][property] = editField;
    }

    remove(id: any) {
      this.productList.splice(id, 1);
      if(id==0){
        this.add()
      }
      
    }

    add() {
        window.alert("ID: "+this.productList.length)
        this.productList.push({id: this.productList.length, name: "", description: "", price: ""});
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
}