import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  toaster = inject(ToastrService)

  loginForm!:FormGroup

  ngOnInit():void {
    this.setForm()
  }

  constructor(
    private _router:Router
  ){

  }

  setForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid)
    {
      this.toaster.success("User logged in succefully", "Success")
      this._router.navigate(['/dashboard'])
    }
    else
    {
     this.toaster.error('E-mail and password don\'t match','Be carful !')
    } 
    
  
  }
}
