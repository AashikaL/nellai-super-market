import { Component, Input } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { CartComponent } from '../cart/cart.component';
import { AllProductItemsService } from '../product_service/all-product-items.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent {
//  @Input() product: any;
//   products: any[] = [];
//   clothings: any;
//   cart: any[] = [];
//   cartData: any[]=[];
//   constructor(private allproductitems: AllProductItemsService, private cs: CartItemsService) {
//     let clothing: any = localStorage.getItem('products');
//     let cloth: any = JSON.parse(clothing);
//     console.log('clothing',cloth);
//     cloth = cloth.filter((p: any) => p.type === 'clothing');
//     if (cloth) {
//       cloth.forEach((cloths: any) => {
//         this.products.push(cloths)
//       });
//     }
//     const cartItem: any = this.cs.getCart();
//     if (cartItem) {
//       this.cartData = this.cartData.concat(cartItem);
//     } 
//   }
//   ngOnInit(): void {
//     //this.clothings = this.allproductitems.clothings;
//   }
//   AddToCart(Cdatas: any) {
//     Cdatas.qty = 1;
//     Cdatas.status = 'In Cart';
//     Cdatas.id;
//     const cartItem: any = this.cs.getCart();
//     console.log('cartItem', cartItem)
//     if (cartItem) {
//       //const cart = cartItem.find(cartdata:any => cartdata.id === 'id');
//       cartItem.qty = +1;
//       this.cartData = this.cartData.concat(Cdatas);
//       console.log('cartData', this.cartData)
//     } else {
//       this.cartData.push(Cdatas);
//     }
//     this.cs.addCart(this.cartData)
//   }
}
