import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../../appServices/auth.service"


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  defaultImage!: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService:AuthService
    
    
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.min(6)]],
      confirmPassword: ['', Validators.required]
    })

  }

  get formControls():any {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.table("submitesss", this.registerForm.value)
    this._authService.registerUser(this.registerForm.value).subscribe(
      result=>{
        console.log(result)
        alert("regiater sucessfully")
        
        this.router.navigate(['/login'])
      },err=>{
        console.log(err)
        alert(err.errorMessage)
        
      }
    )
  }

  public validate(): void {}

}
