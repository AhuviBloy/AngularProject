import { Component, Input, input, OnInit } from '@angular/core';
import { Teacher } from '../../../interfaces/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherServiceService } from '../../../services/teacher-service.service';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements OnInit{

  @Input()
  teacher: Teacher = { Id: 0, Name: "", Classes: [] }
  isNew: boolean = true

  constructor(private teacherService: TeacherServiceService) { }

  ngOnInit() {
    if(this.teacher.Id!=0)
      this.isNew=false
  }
  onSubmit() {
    const index = this.teacherService.getTeachers().findIndex((t) => t.Id == this.teacher.Id)
    if (index == -1)
      this.teacherService.addTeacher(this.teacher)
    else
      this.teacherService.updateTeacher(this.teacher)
  }

  removeClass(classIndex: number) {
    this.teacher.Classes.splice(classIndex, 1);
  }

  addClass() {
    this.teacher.Classes.push("");
  }
}
