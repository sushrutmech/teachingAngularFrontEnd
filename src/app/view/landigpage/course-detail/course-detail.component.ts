import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseDescription:any;
  constructor(
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.courseDescription= this.activeRoute.snapshot.queryParamMap.get("courseData")
    this.courseDescription=JSON.parse(this.courseDescription)
    console.log("from course des page " , this.courseDescription)
  }

}
