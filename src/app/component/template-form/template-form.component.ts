import { Component, Input, input, OnInit } from '@angular/core';
import { Teacher } from '../../../interfaces/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherServiceService } from '../../../services/teacher-service.service';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { log } from 'node:console';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent implements OnInit {
  @Input()
  teacher: Teacher = { Id: 0, Name: '', Classes: [] };

  isNew: boolean = true;
  teacherList: Teacher[] = this.teacherService.getTeachers();

  constructor(private teacherService: TeacherServiceService) {}

  ngOnInit() {
    if (this.teacher.Id != 0) this.isNew = false;
    console.log(this.teacherList);
    this.teacherList = this.teacherService.getTeachers(); // עדכון רשימת המורות
  }

  onSubmit() {
    const index = this.teacherService
      .getTeachers()
      .findIndex((t) => t.Id == this.teacher.Id);
    if (index == -1) {
      this.teacherService.addTeacher(this.teacher);
      this.teacher = { Id: 0, Name: '', Classes: [] };
    }
    else this.teacherService.updateTeacher(this.teacher);
  }

  removeClass(classIndex: number) {
    this.teacher.Classes.splice(classIndex, 1);
  }

  addClass() {
    this.teacher.Classes.push('');
  }
}
