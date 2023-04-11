import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';
import { AllProductItemsService } from '../product_service/all-product-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  qty: any = 1;
  //  cartItems: any[]=[];
  //  cartData: any[]=[];
  totalPrice: number = 0;
  constructor(public cs: CartItemsService, private router: Router) {
    let datas = cs.getData();
    if (datas) {
      datas.forEach((val: any) => {
        this.cs.cartData.push(val)

      });
    }
    let clothData = cs.getclothing();
    if (clothData) {
      clothData.forEach((val: any) => {
        this.cs.cartData.push(val)
      });
    }
    console.log('data', this.cs.cartData)
  }
  ngOnInit() {
    // this.addToCart();
  }
  // addToCart(){
  //   this.cartItems = this.cs.getData();
  //   this.cartItems = this.cs.getclothing();
  // }
  changeQty(item: any, changeType: any,) {
    this.cs.cartData.find(ci => {
      if (ci.id === item.id) {
        if (changeType === '+') {
          ci.qty = ci.qty + 1
          // this.qty ++;
        } else if (changeType === '-') {
          ci.qty = ci.qty - 1
          // this.qty --;
        }
      }
    })
    console.log(this.cs)
    this.cs.cartData.forEach((val: any) => {
      this.totalPrice += val.cost * val.qty
      // console.log('val', this.totalPrice);
      // console.log('val', val.cost * this.qty)
    })
  }
  clearCart() {
    this.cs.cartData = [];
    localStorage.removeItem('data');
    localStorage.removeItem('clothing');
    return this.cs.cartData
  }
  removeItem(i: number): void {
    this.cs.cartData.splice(i, 1);
  }
  test(qty: any) {
    console.log(qty)
  }
}

