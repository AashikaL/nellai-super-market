import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';
declare var $: any;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billingfailed: boolean = false;                                                  // loacl variable declaration
  orders: any = [];
  currentOrder: any;
  billingForm: FormGroup;
  paymentForm: FormGroup;
  myProducts: any[] = [];
  totalPrice = 0;
  billingAddress: any = [];
  selectedBillingAddress: any;
  selectedOption: string = '';

  ngOnInit() {
    this.findTotalprice();
  }
  constructor(public cart: CartItemsService, private router: Router, public cs: CartItemsService) {
    this.billingForm = new FormGroup({                                              // billingForm validation
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.pattern('^\\d{6,7}$')]),
      state: new FormControl('', Validators.required),
      id: new FormControl('')
      // password :new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    })
    this.paymentForm = new FormGroup({                                                // payment Form validation
      cardname: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
      month: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.pattern('^\\d{3,4}$')]),
    })
    const orderItems: any = localStorage.getItem('Order');                           //order get in localstorage
    let orderItem = JSON.parse(orderItems);
    if (orderItems) {
      orderItem.forEach((val: any) => {
        this.orders.push(val);
      });
    }
    this.findTotalprice();                                                          // cart Total price call

    let cartDatas = cs.getCart();
    if (cartDatas) {
      this.cs.cartData = [];
      cartDatas.forEach((cartData: any) => {
        if (cartData) {
          this.cs.cartData.push(cartData)
        }
        console.log('cartData', this.cs.cartData);
      });
    }

    const bilingLocalStorage: any = localStorage.getItem('BillingAddress');
    // console.log('this.billingAddress', this.billingAddress);
    console.log('bilingLocalStorage', bilingLocalStorage);
    if (bilingLocalStorage) {
      this.billingAddress = JSON.parse(bilingLocalStorage);
    }
  }

  onRadioSelected(option: any) {
    this.selectedOption = option;
  }

  findTotalprice() {                                                              // cart Total price function
    // console.log(this.cs);
    this.totalPrice = 0;
    this.cs.cartData.forEach((val: any) => {
      console.log('val', val)
      this.totalPrice += val.cost * val.qty;
    })
  }
  billingDetails() {
    this.billingForm.value.id = Math.round(Math.random() * 1000000);
    this.billingAddress.push(this.billingForm.value);
    localStorage.setItem("BillingAddress", JSON.stringify(this.billingAddress));
    if (this.billingForm.valid) {
      $('#billingFormModal').modal('hide');
    } else {
      this.billingfailed = true;
    }
  }
  useThisAddress() {
    $('#paymentFormModel').modal('show');
    if (this.selectedBillingAddress) {
      this.selectedBillingAddress.name
      this.selectedBillingAddress.email
      this.selectedBillingAddress.address
      this.selectedBillingAddress.city
      this.selectedBillingAddress.state
      this.selectedBillingAddress.phNumber
      this.selectedBillingAddress.zip
      // console.log(' this.selectedBillingAddress.name', this.selectedBillingAddress.name);
    }
  }

  confirmOrder() {
    $('#paymentFormModel').modal('hide');
    // let cartDatas = this.cs.getOrder();
    const cartItems: any = localStorage.getItem('Cart');
    let cartproduct = JSON.parse(cartItems);
    // const orderItems = localStorage.getItem('Order');

    // console.log(this.orders);
    this.router.navigate(['/myorder']);
    $('#billingFormModal').modal('hide');
    this.cs.cartData = [];
    localStorage.removeItem('Cart');
    let data: any = {
      name: this.selectedBillingAddress.name,
      email: this.selectedBillingAddress.email,
      address: this.selectedBillingAddress.address,
      city: this.selectedBillingAddress.city,
      state: this.selectedBillingAddress.state,
      phNumber: this.selectedBillingAddress.phNumber,
      zip: this.selectedBillingAddress.zip,
      orderDate: new Date().toDateString(),
      id: Math.round(Math.random() * 1000000),
      product: cartproduct,
    }
    // console.log('datas', data);
    if (this.orders) {
      this.orders = this.orders.concat(data);
      // console.log('concat', this.orders);
    }
    else {
      this.orders.push(data);
      // console.log('push', this.orders);

    }
    localStorage.setItem('Order', JSON.stringify(this.orders));
    return this.cs.cartData;


  }
}