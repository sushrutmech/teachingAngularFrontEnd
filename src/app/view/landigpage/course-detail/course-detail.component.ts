import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/appServices/globleDataService/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseDescription: any;
  courseList: any = [];
  userDetail: any;
  userId: any;
  cartCourseList: any = [];
  courseUpdate: any=[];

  constructor(
    private activeRoute: ActivatedRoute,
    private _courseService: CourseService,
  ) {
    this.userDetail = localStorage.getItem("userDetail")
    this.userDetail = JSON.parse(this.userDetail)
    this.userId = this.userDetail._id;
    console.log("course detail page  components...", this.userDetail._id);
  }

  ngOnInit(): void {
    this.courseDescription = this.activeRoute.snapshot.queryParamMap.get("courseData")
    this.courseDescription = JSON.parse(this.courseDescription)
    console.log("from course des page ", this.courseDescription)
    this.getAllCourses();
    this.getSelectedCourseByRoute();
  }

  getAllCourses() {
    this._courseService.getCourse().subscribe(res => {
      this.courseList = res.courseList
      console.log("course detail page component ", this.courseList)
      console.log("ss", res.courseList)
    })
  }
  getSelectedCourseByRoute(){
    this._courseService.getCourse().subscribe(res => {
      this.courseList = res.courseList
      console.log("course detail page component ", this.courseList)
      console.log("ss", res.courseList)
      this.courseUpdate = this.courseList.filter((x: any) => {
        return x._id == this.courseDescription._id
      })
      console.log("updatedd course object.. " , this.courseUpdate)
    })

  }

  getCartCourses() {
    this._courseService.getCourseFromCart().subscribe(res => {
      this.cartCourseList = res.cartCourseList.filter((x: any) => {
        return x.userId == this.userId
      })
      console.log("not course in cart from course detatil page comp", this.cartCourseList.length)
      this._courseService.coursesInCart.next(this.cartCourseList)
      console.log("course detatil page  component**--++ ", this.cartCourseList)
    })
  }

  addCourseToCart() {
    let params = {
      courseId: this.courseDescription._id,
      userId: this.userId,
      courseName: this.courseDescription.courseName,
      courseDescription: this.courseDescription.courseDescription,
      courseImage: this.courseDescription.courseImage
    }
    console.log("add course cart ..", params)

    this._courseService.addCourseToCart(params).subscribe({
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

  likeCourse() {
    let params = {
      courseId: this.courseDescription._id,
      courseLike: this.userId
    }
    console.log("params", params)
    console.log("like in course",)
    this._courseService.likeCourse(params).subscribe({
      next: (res: any) => {
        alert("like course sucessfully....")
        console.log("response", res)
        this.getCartCourses();
        this.getAllCourses();
        this.getSelectedCourseByRoute();
        //location.reload()
      },
      error: err => {
        console.log(err.error.working)
        alert(err)
      }
    })

  }

  disLikeCourse() {
    let params = {
      courseId: this.courseDescription._id,
      courseDislike: this.userId
    }
    console.log("params", params)

    this._courseService.disLikeCourse(params).subscribe({
      next: (res: any) => {
        alert("dislike course sucessfully....")
        console.log("response", res)
        this.getCartCourses();
        this.getAllCourses();
        this.getSelectedCourseByRoute();
        //location.reload()
      },
      error: err => {
        console.log(err.error.working)
        alert(err)
      }
    })
  }

}
