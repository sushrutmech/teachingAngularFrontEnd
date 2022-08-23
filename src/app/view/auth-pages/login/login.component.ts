import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/appServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  returnUrl: string = "layout";
  submitted: boolean = false;
  defauluRedirectURL: string = '/layout/home'
  userSession: any = "userToken";

  resData: any

  constructor(
    private _authService: AuthService,
    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // username: ['chris@subio.co.uk', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): any { return this.loginForm.controls; }

  onSubmit(event: any) {
    console.log("login inn ", this.loginForm.value)

    this._authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        alert("lonin sucessfully....")

        this.resData = res
        console.log("response", res.access_token)
        localStorage.setItem(this.userSession, res.access_token)
        this.userDetail();
        this.router.navigate([this.returnUrl]);
        // location.reload()

      },
      error: err => {
        //console.log(err)
        //alert("invallid credential ......" + err)
        this.resData = err.error.working
        console.log(err.error.working)
        alert(this.resData)

        //console.log("//**", this.resData)

      }
    })



  }

  userDetail() {
    this._authService.userDetail().subscribe({
      next: (res: any) => {
        console.log("userDetail=>", res)
        localStorage.setItem("userDetail", JSON.stringify(res))
      },
      error: err => {
        console.log(err)
      }

    })
  }





}
