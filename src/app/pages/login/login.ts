import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Authservice } from '../../services/auth';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginForm : any
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  });
  }

  

  login() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);

    // constructor(private authService : Authservice){}
    
    //this.authService.login(this.loginForm.value).subscribe({
     // next : (data) => =data,
      //error: (err)=> console.error('error al iniciar sesion', err)
      

    //})
    //console.log(this.login)
    /*
      {
        email: 'usuario@correo.com',
        password: '123456',
        remember: true
      }
    */
  }

}