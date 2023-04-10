import { Injectable } from '@angular/core';
import { addDoc, collection  } from "firebase/firestore"; 
import { FirebaseService} from './firebaseservice/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  cartData:any[]=[];
  constructor(public fs : FirebaseService) { 

   
  }
  
  addData(phone:any){
    let datas = JSON.stringify(phone)
    localStorage.setItem('phone',datas)
  }
 getData(){
  let data:any = localStorage.getItem('phone');
 return JSON.parse(data);
}
clothingdata(clothing:any){
  let Cdatas = JSON.stringify(clothing)
  localStorage.setItem('clothing',Cdatas)
}
getclothing(){
let clothing:any = localStorage.getItem('clothing');
return JSON.parse(clothing);
}


}
// Add a second document with a generated ID.


