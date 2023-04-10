import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItemsService } from '../cart-items.service';
declare var $: any;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  myForm: FormGroup;
  constructor(public cart: CartItemsService, private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      // password :new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    })
  }
  
  onSubmit() {
    if (this.myForm.valid) {
    $('#staticBackdrop').modal('show')
    } else {
      window.alert("invalid");
    }
  }
}