import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  qty: number = 1;
  totalPrice: number = 0;
  constructor(public cs: CartItemsService, private router: Router) {
    let cartDatas = cs.getCart();
    if (cartDatas) {
      this.cs.cartData = [];
      cartDatas.forEach((cartData: any) => {
        if (cartData.status === 'In Cart') {
          this.cs.cartData.push(cartData);
        }
        console.log('cartData', this.cs.cartData);
      });
    }
  }
  ngOnInit() {
    this.findTotalprice();
  }
  changeQty(item: any, changeType: any) {
    const MIN_QTY = 0;
    const MAX_QTY = 10;
    this.cs.cartData.map(ci => {
      if (ci.id === item.id) {
        if (changeType === '+' && ci.qty < MAX_QTY) {
          ci.qty = ci.qty + 1
        } else if (changeType === '-' && ci.qty > MIN_QTY) {
          ci.qty = ci.qty - 1
        }
        if (ci.qty === 0) {
          const index = this.cs.cartData.indexOf(ci);
          this.cs.cartData.splice(index, 1);
        }
      }
      // console.log('ci', ci);
      return ci;
    })
       this.findTotalprice();
  }
  emptycart() {
    this.cs.cartData = [];
    localStorage.removeItem('Cart');
    return this.cs.cartData;
  }
  findTotalprice(){
    console.log(this.cs)
    this.totalPrice = 0
    this.cs.cartData.forEach((val: any) => {
      // console.log('val',val);
      this.totalPrice += val.cost * val.qty;
    })
  }
}

