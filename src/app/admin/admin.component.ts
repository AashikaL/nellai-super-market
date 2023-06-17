import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItemsService } from '../cart-items.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  productAddForm: FormGroup;
  productEditFrom: FormGroup;
  data: any;
  productItems: any[] = [];
  selectedProduct: any;
  //clothitems: any[] = [];
  constructor(private http: HttpClient, private cs: CartItemsService) {
    this.productAddForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
    this.productEditFrom = new FormGroup({
      id: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })

    this.cs.getProductsDB().subscribe(
      (response: any) => {
        console.log(response);
        this.productItems = this.productItems.concat(response.data);
      })
    // let product: any = localStorage.getItem('products');
    // this.productItems= JSON.parse(product);
  }

  addNewProduct() {
    //  this.productItems = []; 
    console.log('add', this.productAddForm.valid, this.productAddForm);
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
      this.cs.postProductDB(data).subscribe(resp => console.log(resp));
      //   let product: any = localStorage.getItem('products');
      //   if (product) {
      //     this.productItems = this.productItems.concat(data);
      //     console.log('product',this.productItems);
      //   }
      //   else {
      //     this.productItems.push(data)
      //   }
      //   localStorage.setItem('products', JSON.stringify(this.productItems));
      this.resetAddItems();
      $('#addProduct').modal('hide');
      
    }
  }

  updateEditForm(product: any){
    this.productEditFrom.setValue({
      id:product.id,
      type: product.type,
      name: product.name,
      cost: product.cost,
      color: product.color,
      url: product.url,
      
    })
  }
  editProduct(){
    if (this.productEditFrom.valid) {
      let data: any = {
        id: this.productEditFrom.value.id,
        type: this.productEditFrom.value.type,
        name: this.productEditFrom.value.name,
        cost: this.productEditFrom.value.cost,
        color: this.productEditFrom.value.color,
        url: this.productEditFrom.value.url,
      }
      this.cs.updateProductDB(data).subscribe(resp => console.log(resp));
      $('#editproductmodal').modal('hide');
    }
  }

  clearCart() {
    this.productItems = [];
    localStorage.removeItem('products');
    return this.productItems;
  }
  removeItem(id: number) {
    this.cs.deleteProductDB(id).subscribe(resp => console.log(resp))
    // this.productItems = this.productItems.filter((val: any, i: any) => i != index);
    // localStorage.setItem('products', JSON.stringify(this.productItems));
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

