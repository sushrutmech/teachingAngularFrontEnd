import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/appServices/auth.service';
import { CourseService } from 'src/app/appServices/globleDataService/course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCourseList:any=[];
  coursesInCart:any;
  userDetail: any=null;
  userId: any=null;

  constructor(
    private _authService: AuthService,
    private _courseService: CourseService
  ) { 
     this.userDetail = localStorage.getItem("userDetail")
     this.userDetail = JSON.parse(this.userDetail)
    if (this.userDetail!=null) {
      this.userId = this.userDetail._id;  
    }
    
    console.log("headerrr" , this.userDetail,"+++" , this.userId)

    this._courseService.coursesInCart.subscribe(noOfCourseInCart=>{
      this.cartCourseList=noOfCourseInCart;
   })
  }

  ngOnInit(): void {
    this.getCartCourses()   
  }

  getCartCourses() {
    this._courseService.getCourseFromCart().subscribe(res => {
      //this.cartCourseList = res.cartCourseList
      console.log("userid local host" , this.userId)
      this.cartCourseList=res.cartCourseList.filter((x:any)=>{
        return x.userId==this.userId
      })
      console.log("not of item cart comp.." , this.cartCourseList.length)
      this._courseService.coursesInCart.next(this.cartCourseList)
      console.log("cart component**--++ ", this.cartCourseList)
    })
  }

  logout(){
    this._authService.logout()
  }

}
