import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  cartData: any[] = [];
  totalPrice: number=0;
  // buyData:any[]=[];
  constructor() {
  }
  addCart(cart: any) {
    let cartDatas = JSON.stringify(cart);
    localStorage.setItem('Cart', cartDatas);
    //this.cartData.push(cartDatas);
  }
  getCart() {
    let cartData: any = localStorage.getItem('Cart');
    return JSON.parse(cartData);
  }
  getOrder() {
    let cartData: any = localStorage.getItem('Order');
    return JSON.parse(cartData);
  }
  setProductView(product :any){
    let products: any[] =[];  
    products.push(product)
    
    let getProduct: any = localStorage.getItem("overview")  
    if (getProduct) {
      let productData: any = JSON.parse(getProduct);
    }
    localStorage.setItem("overview", JSON.stringify(products))
  }
  getProdictView(){
   let product = localStorage.getItem('overview');
   return product;
  }
}
// Add a second document with a generated ID.


