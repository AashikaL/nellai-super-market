import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCKot60wqLkWsOrd-7cKYgxTB55SnTlgIA",
  authDomain: "nellai-market.firebaseapp.com",
  projectId: "nellai-market",
  storageBucket: "nellai-market.appspot.com",
  messagingSenderId: "312975377861",
  appId: "1:312975377861:web:0cbebf29efa77794ad37ac",
  measurementId: "G-4W4T00PKHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://support.google.com/firebase/answer/7015592


    console.log(db)

  }

  col(path: string) {
    return collection(db, path);
  }

  add(colpath: string, data: any) {
    return addDoc(this.col(colpath), data);

  }


 async getCol(ref:string){
  const snap = await getDocs(collection(db, ref));
  console.log('snap',snap)
    if (!snap.empty) {
        return snap.docs.map((d: any) => ({ ref: d.ref, ...d.data() } as any));
    } else {
        return [];
    }
 }

}
