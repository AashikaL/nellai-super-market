import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  myForm: FormGroup;

  constructor(private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      //password :new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      birth: new FormControl('', Validators.required)
    })

  }
  onSubmit() {
    const usersInLocalStorage = localStorage.getItem('registeredUsers');
    const users: any[] = usersInLocalStorage ? JSON.parse(usersInLocalStorage) : [];
    users.push(this.myForm.value);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    if (this.myForm.valid) {
      this.router.navigate(['/login'])
    } else {
      window.alert("invalid")
    }
  }
  ngOnInit() {

  }
}
