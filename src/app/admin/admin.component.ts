import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItemsService } from '../cart-items.service';
import { FirebaseService } from '../firebaseservice/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  myForm: FormGroup;
  data: any;
  items: any;
  clothitmes: any[] = [];
  constructor(private fs: FirebaseService) {
    this.myForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
    let admin: any = localStorage.getItem('products');
    const parse: any = JSON.parse(admin)
    if (admin) {
      // parse.forEach((val: any) => {
      //   this.items.push(val)
      // });
      this.getProducts();
    }
  }
  async _test() {
    this.items = await this.fs.getCol('products',);
    console.log('items', this.items)
  }
  async getProducts() {
    this.items = await this.fs.getCol('products');
    console.log('items', this.items)
  }
  async addNew() {
    console.log('add', this.myForm.valid, this.myForm)
    if (this.myForm.valid) {
      let data: any = {
        type: this.myForm.value.type,
        name: this.myForm.value.name,
        cost: this.myForm.value.cost,
        color: this.myForm.value.color,
        url: this.myForm.value.url,
        id: Math.round(Math.random() * 100000)
      }
      console.log(data)
      // if(data.type =='phone'){
      // let product: any = localStorage.getItem('products');
      // if (product) {
      //   this.items = this.items.concat(data)
      // }
      // else {
      //   this.items.push(data)
      // }
      // localStorage.setItem('products', JSON.stringify(this.items))
      const ref = await this.fs.add('products', data);
      console.log(ref);
      // }else{
      //   let clothing:any = localStorage.getItem('products');
      //   if (clothing) {
      //     this.clothitmes = this.clothitmes.concat(data)
      //   }
      //   else {
      //     this.clothitmes.push(data)
      //   }
      //   localStorage.setItem('products', JSON.stringify(this.clothitmes))
      // }
    }
  }
  clearCart() {
    this.items = [];
    localStorage.removeItem('products');
    return this.items;
  }
  removeItem(index: number) {
    this.items = this.items.filter((val: any, i: any) => i != index);
    localStorage.setItem('products', JSON.stringify(this.items));
  }
}
