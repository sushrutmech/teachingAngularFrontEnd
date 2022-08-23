import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/appServices/globleDataService/course.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  courseForm: FormGroup = new FormGroup({});
  courseList:any=[];
  courseFormTitle:any="Add";
  btnText:any="Submit"
  activeCourseData:any;
  courseId:any;

  constructor(
    private _courseService:CourseService,
    private fb: FormBuilder
  ) {
    this._courseService.getCourse().subscribe(res=>{
      this.courseList=res.courseList
      console.log("kk" , this.courseList)
      console.log("ss" , res.courseList)
    })
   }

  ngOnInit(): void {
  
    console.log("****admindashboard" , this.courseList )

    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required],
      courseImage: ['', Validators.required]
    });


  }

  get f(): any { return this.courseForm.controls; }

  onSubmit(){
      console.log("hitted " , this.courseForm.value)
      if (this.courseFormTitle==="Add") {
        this._courseService.postCourse(this.courseForm.value).subscribe(
          result=>{
            console.log(result)
            alert("course save sucessfully")
            this.courseForm.reset()
          },err=>{
            console.log(err)
            alert(err.errorMessage)
            
          }
        )
        
      }
   

      if (this.courseFormTitle==="Edit") {
        console.log("patchrequest is called")
        const {_id ,courseDescription , courseName , courseImage} =this.activeCourseData
        let params={
          courseId:_id,
          courseName:courseName,
          courseDescription:courseDescription,
          courseImage:courseImage
        }
        this.courseForm = this.fb.group({
          courseId:params.courseId,
          courseName: [this.courseForm.value.courseName, Validators.required],
          courseDescription: [this.courseForm.value.courseDescription, Validators.required],
          courseImage: [this.courseForm.value.courseImage, Validators.required]
        });

        console.log(this.courseForm.value)
        this._courseService.updateCourse(this.courseForm.value).subscribe(
          result=>{
            console.log(result)
            alert("course updated sucessfully")
            this.courseForm.reset()
          },err=>{
            console.log(err)
            alert(err.errorMessage)
            
          }
        )
      }
  }

  getCourseData(data:any){
    this.activeCourseData=data
    console.log( "course data", this.activeCourseData)
    this.courseFormTitle="Edit"
    this.btnText="Update"
    this.courseForm = this.fb.group({
      courseName: [data.courseName, Validators.required],
      courseDescription: [data.courseDescription , Validators.required],
      courseImage: ['', Validators.required]
    });
  }

  deleteCourse(data:any){
    this.courseId= { courseId:data._id}
    console.log("+++++" , this.courseId)

    this._courseService.deleteCourse(this.courseId).subscribe(
      result=>{
        console.log(result)
        alert("course deleted sucessfully")
    
      },err=>{
        console.log(err)
        alert(err.errorMessage)
        
      }
    )

  }


}
