import { Component, viewChild } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../../../models/student';
import { InformationPopupComponent } from '../information-popup/information-popup.component';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent,InformationPopupComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  currentListStudent: Student[] = [
    new Student(1, "Rivka", ["LLM", "AI"], false),
    new Student(2, "Sara", ["LLM", "AI"], true),
    new Student(3, "Lea", ["LLM", "AI"], true),
  ]
  showComponent: any;
  emptyStudent:Student = new Student(0,"",[],false)

  setShowComponent(studentId : number){
    this.showComponent = studentId;
  }

  setStudentInList(updatedStudent: Student) {
    const index = this.currentListStudent.findIndex(
      (student) => student.Id === updatedStudent.Id
    );

    if (index !== -1) {
      this.currentListStudent[index] = updatedStudent;
    } else {
      this.currentListStudent.push(updatedStudent);
    }
  }

  @viewChild(InformationPopupComponent) info
  sendPopup(){

  }
}
