import { provideImageKitLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { AllProductItemsService } from '../product_service/all-product-items.service';

@Component({
  selector: 'app-phone-product',
  templateUrl: './phone-product.component.html',
  styleUrls: ['./phone-product.component.scss'],
})
export class PhoneProductComponent implements OnInit {
  items: any[] = [];
  cartData: any[] = [];
  searchKey: string = "";
  constructor(private allproductitems: AllProductItemsService, private cs: CartItemsService) {
    let product: any = localStorage.getItem('products');
    let parse: any = JSON.parse(product)
    parse = parse.filter((p: any) => p.type === 'phone');
    if (product) {
      parse.forEach((val: any) => {
        this.items.push(val)
      });
      console.log('tis', product);
    }


  }
  ngOnInit() {
    // if(this.admins){
    //   this.admins == this.admins.p
    //     }
    //this.products = this.allproductitems.products;
  }
  addToCart(data: any) {
    const cartItem: any = this.cs.getData();
    if (cartItem) {
      this.cartData = this.cartData.concat(data);
    } else {
      this.cartData.push(data);
    }
    this.cs.addData(this.cartData)
  }

}
