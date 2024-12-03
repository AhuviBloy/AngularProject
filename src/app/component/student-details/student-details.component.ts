import { Component, Input, Output } from '@angular/core';
import { Student } from '../../../models/student';
import { EventEmitter } from '@angular/core';
import { CoursesListComponent } from '../courses-list/courses-list.component';



@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CoursesListComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {


 @Input() curentStudent!:Student | null;
 @Output() setStudent :EventEmitter<any>=new EventEmitter<any>();

 student:Student | undefined;
 isOpen=true;


 saveStudent(id:string,name:string){
   this.student=new Student(parseInt(id),name,[],true);
   this.setStudent.emit(this.student)
 }

 setCloseComponent(){
  this.isOpen=false
}
}
