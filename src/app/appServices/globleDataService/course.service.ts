import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseUrl: any = "http://localhost:3000/course/"
  
  constructor(
    private http: HttpClient
  ) { }

  getCourse() {
    console.log("fromservice", this.http.get<any>(this.courseUrl + `courses`))
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

}
