import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';
// import { ServerService } from '../service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productItems: any;
  cartData: any[] = [];
  // buyData: any[] = [];
  constructor(private cs: CartItemsService, private router: Router, private http : HttpClient) {
    let productType:any = localStorage.getItem('productType');
    let type = JSON.parse(productType);
     this.cs.getProductsDB().subscribe(
      (response: any) => {
        console.log(response);
        this.productItems = response.data.filter((element: any) => element.type === type);
        console.log('type', this.productItems);
      })
    // let product = localStorage.getItem('productType');
    // if (product) {
    //   const productData = JSON.parse(product);
    //   this.productItems = productData;
   
    const cartItem: any = this.cs.getCart();
    if (cartItem) {
      this.cartData = this.cartData.concat(cartItem);
    }
    // this.getProduct();
  }
  
  currentRating = 0;

  rate(product: any, rating: number) {
    product.rating = rating;
    console.log(`Rated ${rating} stars for ${product.name}`);
  }
  

  // async getProduct() {
  //   const newEvent: any = {
  //     owner: 'aasika',
  //     name: 'test',
  //     description: 'description',
  //     date: '2023/05/23'
  //   }
  //   await this.ss.createEvent(newEvent).then(() => {
  //    // this.getEvents();
  //   });
  // }

  addToCart(data: any) {
    data.qty = 1;
    data.status = 'In Cart';
    const cartItems: any = this.cs.getCart();
    // console.log('cartItem', cartItems);
    if (cartItems) {
      // this.cartData = [];
      const item = cartItems.find((cartItem: any) => cartItem.id == data.id);
      if (item) {
        // console.log('cart', item);
        item.qty += 1;
        this.cartData = cartItems;


        
      } else {
        this.cartData.push(data);
        // this.cartData = [];
      }
      // console.log('cart',cart);
      // this.cartData = this.cartData.concat(data);
      // console.log('cartData', this.cartData);
    } else {
      this.cartData.push(data);
    }
    this.cs.addCart(this.cartData);
  }
  buyNow(buy: any) {
    this.router.navigate(["/billing"]);
    buy.qty = 1;
    const cartItems: any = this.cs.getCart();
    if (cartItems) {
      this.cartData = cartItems;
      this.cartData = [];
      this.cartData.push(buy);
    } else {
      this.cartData = this.cartData.concat(buy);
    }
    this.cs.addCart(this.cartData);
  }
  getValue(value: any) {
    // console.log('value2', value);
    let product = localStorage.getItem('products');
    if (product) {
      let productData = JSON.parse(product);
      this.productItems = productData.filter((p: any) => p.name.toLowerCase() === value.toLowerCase());
    }
  }
  newPage(product: any) {
    this.cs.setProductView(product);
    this.router.navigate(['/overview']);

  }
  getUserData() {
    this.http.get('http://localhost:3000/user').subscribe(
    (response)=> {
    console.log(response); // Handle the response here
},
    (error)=> {
    console.error(error); // Handle any errors here
    }
    );
  }
}
