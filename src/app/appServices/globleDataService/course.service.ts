import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseUrl: any = "http://localhost:3000/course/"
  coursesInCart = new Subject<any>()
  
  constructor(
    private http: HttpClient
  ) { }

  

  getCourse() {
    //console.log("fromservice", this.http.get<any>(this.courseUrl + `courses`))
    return this.http.get<any>("http://localhost:3000/course/courses")
  }

  postCourse(params:any){
    return this.http.post<any>(this.courseUrl+`addCourse`, params)
  }

  updateCourse(params:any){
    return this.http.post<any>(this.courseUrl+`updateCourse`, params)
  }

  deleteCourse(params:any){
    return this.http.post<any>(this.courseUrl+`deleteCourse`, params)
  }

  addCourseToCart(params:any){
    return this.http.post<any>(this.courseUrl+`addCourseToCart`, params)
  }

  deleteCourseFromCart(courseId:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        courseId:courseId
      }
    }
    return this.http.delete<any>(this.courseUrl+`deleteCourseFromCart`, options)
  }

  getCourseFromCart() {
    return this.http.get<any>(this.courseUrl+`getCourseFromCart`)
  }

}
