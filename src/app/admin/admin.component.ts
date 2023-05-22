import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItemsService } from '../cart-items.service';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  productAddForm: FormGroup;
  data: any;
  productItems: any[]=[];
  //clothitems: any[] = [];
  constructor() {
    this.productAddForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
    let product: any = localStorage.getItem('products');
    this.productItems= JSON.parse(product)
  }
  addNewProduct() {
    console.log('add', this.productAddForm.valid, this.productAddForm)
    if (this.productAddForm.valid) {
      let data: any = {
        type: this.productAddForm.value.type,
        name: this.productAddForm.value.name,
        cost: this.productAddForm.value.cost,
        color: this.productAddForm.value.color,
        url: this.productAddForm.value.url,
        id: Math.round(Math.random() * 100000),
        status: 'In Progress'
      }
      // console.log(data);
      // if(data.type =='phone'){
      let product: any = localStorage.getItem('products');
      if (product) {
        this.productItems = this.productItems.concat(data);
        // console.log('product',this.productItems);
      }
      else {
        this.productItems.push(data)
      }
      localStorage.setItem('products', JSON.stringify(this.productItems));
      this.resetAddItems();
      $('#staticBackdrop').modal('hide');
    }
  }
  clearCart() {
    this.productItems = [];
    localStorage.removeItem('products');
    return this.productItems;
  }
  removeItem(index: number) {
    this.productItems = this.productItems.filter((val: any, i: any) => i != index);
    localStorage.setItem('products', JSON.stringify(this.productItems));
  }
  resetAddItems() {
    this.productAddForm.reset({
      type: '',
      name: '',
      cost: '',
      color: '',
      url: '',
    })
  }
}

