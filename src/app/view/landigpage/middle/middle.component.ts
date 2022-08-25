import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CourseService } from 'src/app/appServices/globleDataService/course.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  courseList: any = [];
  selectedCourse: any = {};
  userDetail: any;
  userId: any;
  cartCourseList:any=[];

  constructor(
    private _courseService: CourseService,
    private router: Router
  ) {
    this.userDetail = localStorage.getItem("userDetail")
    this.userDetail = JSON.parse(this.userDetail)
    this.userId = this.userDetail._id;
    console.log("midlde components...", this.userDetail._id);
  }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this._courseService.getCourse().subscribe(res => {
      this.courseList = res.courseList
      console.log("middle component ", this.courseList)
      console.log("ss", res.courseList)
    })
  }

  getCartCourses() {
    this._courseService.getCourseFromCart().subscribe(res => {
      this.cartCourseList = res.cartCourseList.filter((x:any)=>{
        return x.userId==this.userId
      })
      console.log("not of item l.." , this.cartCourseList.length)
      this._courseService.coursesInCart.next(this.cartCourseList)
      console.log("middle component**--++ ", this.cartCourseList)
    })
  }

  addCourseToCart(selectedCourse: any) {
    this.selectedCourse = {
      courseId: selectedCourse._id,
      userId: this.userId,
      courseName: selectedCourse.courseName,
      courseDescription: selectedCourse.courseDescription,
      courseImage: selectedCourse.courseImage
    }
    console.log("add course cart ..", this.selectedCourse)

    this._courseService.addCourseToCart(this.selectedCourse).subscribe({
      next: (res: any) => {
        alert("add to cart sucessfully....")
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

  courseDetail(selectedCourse:any){
     console.log(selectedCourse)
     const queryParams: any = {}
     queryParams.courseData = JSON.stringify(selectedCourse);
     let navigationExtras: NavigationExtras = { queryParams }
     console.log("navigation data", navigationExtras)
     this.router.navigate(["layout/courseDetail/" + JSON.stringify(selectedCourse._id)], navigationExtras);
  }

  likeCourse( selectedCourse:any){
    let params ={
      courseId:selectedCourse._id,
      courseLike:this.userId
    }
    console.log("params" , params)
    this._courseService.likeCourse(params).subscribe({
      next: (res: any) => {
        alert("like course sucessfully....")
        console.log("response", res)
        this.getCartCourses()
        this.getAllCourses();
        //location.reload()
      },
      error: err => {
        console.log(err.error.working)
        alert(err)
      }
    })

  }

  disLikeCourse(selectedCourse:any){
    let params ={
      courseId:selectedCourse._id,
      courseDislike:this.userId
    }
    console.log("params" , params)
    this._courseService.disLikeCourse(params).subscribe({
      next: (res: any) => {
        alert("dislike course sucessfully....")
        console.log("response", res)
        this.getCartCourses()
        this.getAllCourses();
        //location.reload()
      },
      error: err => {
        console.log(err.error.working)
        alert(err)
      }
    })
  }

}
