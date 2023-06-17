import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginfailed: boolean =false;
  myForm: FormGroup;
  constructor(private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      // password :new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    })
  }
  onSubmit() {
    // const usersInLocalStorage = localStorage.getItem("registeredUsers");
    // let users: any[] = usersInLocalStorage ? JSON.parse(usersInLocalStorage) : [];
    // const userExists = users.find(u => u.email === this.myForm.value.email && u.password === this.myForm.value.password);
    // if(userExists) {
    //   localStorage.setItem("loggedIn", 'true');
    if (this.myForm.valid) {
      this.router.navigate([''])
    } else {
      //window.alert("invalid")
      this.loginfailed=true;
    }
  }
  onsub() {
    if (this.myForm.invalid) {
      this.router.navigate(['/singup'])
    }
  }
}
