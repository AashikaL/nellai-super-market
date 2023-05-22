import { Component, Input, OnInit } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { AllProductItemsService } from '../product_service/all-product-items.service';

@Component({
  selector: 'app-phone-product',
  templateUrl: './phone-product.component.html',
  styleUrls: ['./phone-product.component.scss'],
})
export class PhoneProductComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//   // @Input() product: any;
//   items: any[] = [];
//   cartData: any[] = [];
//   searchKey: string = "";
//   constructor(private allproductitems: AllProductItemsService, private cs: CartItemsService) {
//     let product: any = localStorage.getItem('products');
//     let phone: any = JSON.parse(product)
//     phone = phone.filter((p: any) => p.type === 'phone');
//     if (product) {
//       phone.forEach((phones: any) => {
//         this.items.push(phones)
//       });
      
//     }
//     const cartItem: any = this.cs.getCart();
  
//     if (cartItem) {
//       this.cartData = this.cartData.concat(cartItem);

//     }

//   }
 
//   addToCart(data: any) {
//     data.qty = 1
//     data.status = 'In Cart';
//     const cartItem: any = this.cs.getCart();
//     console.log('cartItem', cartItem)
//     if (cartItem) {
//       this.cartData = this.cartData.concat(data);
//       console.log('cartData', this.cartData)
//     } else {
//       this.cartData.push(data);
//     }
//     this.cs.addCart(this.cartData)
//   }
//   getValue(value: any) {
//     console.log('value',value)
//   }

}
