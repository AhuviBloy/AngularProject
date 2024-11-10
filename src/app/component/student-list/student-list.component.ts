import { Component } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../../../models/student';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  currentListStudent: Student[] = [
    new Student(1, "Ahuvi", ["LLM", "AI"], false),
    new Student(2, "Sara", ["LLM", "AI"], true),
    new Student(3, "Lea", ["LLM", "AI"], true),
  ]
  showComponent: any;

  setShowComponent(studentId : number){
    this.showComponent = studentId;
  }

  setStudentInList(stud:any){
    this.currentListStudent.push(stud)
  }

}
