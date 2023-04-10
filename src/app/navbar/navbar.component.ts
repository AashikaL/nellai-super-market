import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from "bootstrap";
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loginFailed = false;
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }
  sreach() {

  }
  onSubmit() {
    if (this.email === 'admin@gmail.com' && this.password === 'aashika') {
      $('#staticBackdrop').modal('hide')
      this.router.navigate(['/admin'])
      // Login successful, redirect to admin dashboard
      console.log('Login successful');
    }
    else if (this.email !== 'admin@gmail.com' || this.password !== 'aashika') {
      this.loginFailed = true;
    } else {
      // Login failed, display error message
      console.log('Login failed');
      this.router.navigate(['/home'])
    }
  }
}
