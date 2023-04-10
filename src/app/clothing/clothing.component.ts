import { Component } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { CartComponent } from '../cart/cart.component';
import { AllProductItemsService } from '../product_service/all-product-items.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent {
  admins: any[] = [];
  clothings: any;
  cart: any[] = [];
  constructor(private allproductitems: AllProductItemsService, private cs: CartItemsService) {
    let clothing: any = localStorage.getItem('products');
    let parse: any = JSON.parse(clothing)
    parse = parse.filter((p: any) => p.type === 'clothing');
    if (clothing) {
      parse.forEach((val: any) => {
        this.admins.push(val)
      });
    }
  }
  ngOnInit(): void {
    //this.clothings = this.allproductitems.clothings;
  }
  clothingdata(Cdatas: any) {
    const cartDatas: any = this.cs.getclothing();
    if (cartDatas) {
      this.cart = this.cart.concat(Cdatas);

    } else {
      this.cart.push(Cdatas);
    }
    this.cs.clothingdata(this.cart)
  }
}
