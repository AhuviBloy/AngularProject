import { Component, ViewChild } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../../../models/student';
import { InformationPopupComponent } from '../information-popup/information-popup.component';
import { NgTemplateOutlet } from '@angular/common';




@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent,InformationPopupComponent,NgTemplateOutlet],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  currentListStudent: Student[] = [
    new Student(1, "Sara", ["MATH", "AI"], false,true),
    new Student(2, "Rivka", ["LLM", "ENGLISH"], true),
    new Student(2, "Rachel", ["Math", "ENGLISH"], true),
    new Student(3, "Lea", ["C++", "AI"], true),
  ]
  showComponent: any;
  emptyStudent:Student = new Student(0,"",[],false);
  isOpen=true;

  setShowComponent(studentId : number){
    this.showComponent = studentId;
    this.isOpen=true;
  }
  setCloseComponent(){
    this.isOpen=false
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

  @ViewChild(InformationPopupComponent) info !:InformationPopupComponent;
  sendPopup(){
     this.info.showPop("האם אתה בטוח שברצונך למחוק תלמיד זה?")
  }
}
