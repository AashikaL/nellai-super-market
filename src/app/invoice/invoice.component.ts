import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit{
  cartData : any[]=[];
  products:any=[];
  totalPrice: number = 0;
  companyDetails:any;
  invoiceDate: any = new Date();
  orders:any[]=[];
  currentOrder:any;
  ngOnInit(){
   this.findTotalprice() 
  }
constructor(public cs: CartItemsService){
  let order: any = localStorage.getItem('currentOrder');
    this.currentOrder = JSON.parse(order);
    // if (order) {
    //   ordersData.forEach((val: any) => {
    //     this.orders.push(val);
    //   }); 
    // }
  this.companyDetails =[{
    name : 'Nellai Market',
    address : 'No: 12,PerumalPuram',
    city: 'Tirunelveli',
    pincode: '627007',
    email: 'admin@nellaimarket.com',
    phone : '044-43232123'
  }];
  this.findTotalprice();
}
findTotalprice(){
  // console.log(this.cs);
  this.totalPrice = 0;
  this.currentOrder.product.forEach((product: any) => {
    this.totalPrice += product.cost * product.qty;
  })
}
print(){
  // let products = {};
  // localStorage.setItem(this.localstorage,JSON.stringify(products));
window.focus();
window.print();
}

}
