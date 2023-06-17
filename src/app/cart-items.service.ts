import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  cartData: any[] = [];
  totalPrice: number = 0;
  // buyData:any[]=[];
  constructor(private http: HttpClient) {
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
  setProductView(product: any) {
    let products: any[] = [];
    products.push(product)

    let getProduct: any = localStorage.getItem("overview")
    if (getProduct) {
      let productData: any = JSON.parse(getProduct);
    }
    localStorage.setItem("overview", JSON.stringify(products))
  }
  getProdictView() {
    let product = localStorage.getItem('overview');
    return product;
  }
  getProductsDB(): Observable<any> {
    return this.http.get('http://localhost:3000/product');
    
  }
  postProductDB(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/product', data);
  }
  deleteProductDB(id: number): Observable<any> {
    return this.http.delete (`http://localhost:3000/product/${id}`);
  }
  updateProductDB(data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/product/${data.id}`, data);
  }
  
}



