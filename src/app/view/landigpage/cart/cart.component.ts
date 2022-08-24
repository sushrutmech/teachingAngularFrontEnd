import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/appServices/globleDataService/course.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCourseList:any=[];
  userDetail: any;
  userId: any;
  selectedCourse:any;

  constructor(
    private _courseService: CourseService,
  ) { 
    this.userDetail = localStorage.getItem("userDetail")
    this.userDetail = JSON.parse(this.userDetail)
    this.userId = this.userDetail._id;
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

  deleteCourseToCart(selectedCourse:any){
    console.log("delete course " , selectedCourse)
    this.selectedCourse = selectedCourse._id,
    
    console.log("params " , this.selectedCourse)
    this._courseService.deleteCourseFromCart(this.selectedCourse).subscribe({
      next: (res: any) => {
        alert("delete from cart sucessfully....")
        console.log("response", res)
        this.getCartCourses()
        //location.reload()
      },
      error: err => {
        console.log(err.error.working)
        alert(err)
      }
    })

  
  }

}
