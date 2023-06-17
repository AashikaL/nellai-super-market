import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';
declare var $: any;

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders: any[] = [];
  products: any = [];
  orderDate: any = new Date();
  currentOrder: any;
  currentOrdering: any[] = [];
  constructor(private cs: CartItemsService, public router: Router) {
    let order: any = localStorage.getItem('Order');
    this.orders = JSON.parse(order);
    // if (order) {
    //   ordersData.forEach((val: any) => {
    //     this.orders.push(val);
    //   }); 

    // }
    // console.log('test', this.orders);
  }
  ngOnInit() {
    // $('[data-toggle="tooltip"]').tooltip()
  }

  invoice(order: any) {
    this.router.navigate(['/invoice']);
    localStorage.setItem('currentOrder', JSON.stringify(order));
  }
}
