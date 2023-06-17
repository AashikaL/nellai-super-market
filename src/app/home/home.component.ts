import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, of, pipe } from 'rxjs';
import { CartItemsService } from '../cart-items.service';
import { HttpClient } from '@angular/common/http';
// import * as mMySql from '../service/mysql'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  product: any[] = [];
  productItems: any;
  productTypes = [{
    type: 'Clothing',
    url: '../assets/clem-onojeghuo-c4pbb7yNM2c-unsplash.jpg'
  },
  {
    type: 'Phone',
    url: '../assets/firmbee-com-SpVHcbuKi6E-unsplash.jpg',
  },
  {
    type: 'Laptop',
    url: '../assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg',
  }, {
    type: 'Shoe',
    url: '../assets/peri-stojnic-r3rbIwZ9DJc-unsplash.jpg',
  }, {
    type: 'Home Decor',
    url: '../assets/manja-vitolic-7tOV35hnkao-unsplash.jpg',
  },
  {
    type: 'Watch',
    url: '../assets/jonas-b-AVSxYIcBxoM-unsplash.jpg',

  }]
  constructor(private router: Router, public cs: CartItemsService, private http: HttpClient) {

  }
  products(type: any) {
    // let productData = localStorage.getItem('products');
    // if (productData) {
    //   let productItem = JSON.parse(productData);
    //   productItem.forEach((element: any) => {
    //     if (element.type == type) {
    //       this.product.push(element);
    //     }
    //   });
    // }
    // localStorage.setItem('productType', JSON.stringify(this.product))
    // this.router.navigate(['/products']);

    //  this.cs.getProductsDB().subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.product = response.data.filter((element: any) => element.type === type);
    //     console.log('type', this.product);

    //   })
    localStorage.setItem('productType', JSON.stringify(type))
    console.log('productType',type);
    this.router.navigate(['/products']);
  }

  getValue(value: any) {
    console.log('value3', value)
    let product = localStorage.getItem('products');
    if (product) {
      let productData = JSON.parse(product);
      this.productItems = productData.filter((p: any) => p.name === value);
      this.router.navigate(['/products']);
    }

  }
}