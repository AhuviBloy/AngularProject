import { Component, inject, Input, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../interfaces/course';
import { ColorBtnDirective } from '../../../directives/color-btn.directive';
import { Student } from '../../../models/student';
import { MyHighlightDirective } from '../../../directives/my-highlight.directive';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [ColorBtnDirective, MyHighlightDirective],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {

  @Input() curentStudent!:Student | null;
  courseList: Course[] | undefined;
  
  constructor(private coueseService: CourseService) { }

  ngOnInit() {
    this.courseList = this.coueseService.getCourses()
  }
}
