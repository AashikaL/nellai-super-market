import { Component } from '@angular/core';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-product-over-view',
  templateUrl: './product-over-view.component.html',
  styleUrls: ['./product-over-view.component.scss']
})
export class ProductOverViewComponent {
  products: any[] = [];
  constructor(private cs: CartItemsService) {
    let getData: any = cs.getProdictView();
    if (getData != null) {
      let parseData: any = JSON.parse(getData);
      parseData.forEach((val: any) => {
        this.products.push(val);
      })
    }
  }
}
