import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboarcontainer',
  templateUrl: './dashboarcontainer.component.html',
  styleUrls: ['./dashboarcontainer.component.css']
})
export class DashboarcontainerComponent implements OnInit {
  userDetail:any;
  userRole:any;

  constructor() {
    let userDetail:any=localStorage.getItem("userDetail")
    console.log("user" , userDetail)
    this.userDetail=JSON.parse(userDetail)
    this.userRole=this.userDetail.role
    console.log("josn user " , this.userDetail,"ss", this.userRole)
   }

  ngOnInit(): void {
  }

}
