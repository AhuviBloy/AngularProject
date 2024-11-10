import { Component, Input, Output } from '@angular/core';
import { Student } from '../../../models/student';
import { EventEmitter } from 'stream';



@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {


 @Input() curentStudent!:Student | null;
 @Output() setStudent:EventEmitter<any>=new EventEmitter<any>();

 student:Student | undefined;


 saveStudent(id:string,name:string){
   this.student=new Student(parseInt(id),name,[],true);
   this.setStudent.emit(this.student)
 }

}
