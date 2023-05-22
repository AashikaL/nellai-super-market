import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent {
  orders: any[] = [];
  products: any = [];
  orderDate: any = new Date();
  currentOrder: any;
  currentOrdering: any[] = [];
  constructor(private cs: CartItemsService, public router: Router) {
    let order: any = localStorage.getItem('Order');
    this.orders = JSON.parse(order);
    // console.log('test', this.orders);
  }
}
