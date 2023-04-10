import { Component } from '@angular/core';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  cartDatas : any[]=[];
  totalPrice: number = 0;
companyDetails:any;
invoiceDate: any = new Date();
constructor(private cs: CartItemsService){
  console.log(cs.cartData)
  cs.cartData
  this.companyDetails =[{
    name : 'Nellai Market',
    address : 'No: 12,PerumalPuram',
    city: 'Tirunelveli',
    pincode: '627007',
    email: 'admin@nellaimarket.com',
    phone : '044-43232123'
  }]
}
print(){
  // let products = {};
  // localStorage.setItem(this.localstorage,JSON.stringify(products));
window.focus();
window.print();
}

}
