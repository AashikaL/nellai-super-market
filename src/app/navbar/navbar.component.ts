import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from "bootstrap";
import { elementAt } from 'rxjs';
import { CartItemsService } from '../cart-items.service';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchTerm: string = '';
  @Output() searchValue = new EventEmitter<string>();
  loginFailed = false;
  email: string = '';
  password: string = '';
 
  constructor(private router: Router, public cs: CartItemsService) {

  }

  adminLogin() {
    if (this.email === 'admin@gmail.com' && this.password === 'aashika') {
      $('#staticBackdrop').modal('hide');
      this.router.navigate(['/admin']);
      console.log('Login successful');
    }
    else if (this.email !== 'admin@gmail.com' || this.password !== 'aashika') {
      this.loginFailed = true;
    } else {
      console.log('Login failed');
      this.router.navigate(['/singup']);
    }
  }
  sentValue() {
    // console.log('1',this.searchTerm);
    this.searchValue.emit(this.searchTerm);
  }
}
