import { Injectable } from "@angular/core"
import { Teacher } from "../interfaces/teacher"


@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor() { }

  public teachers: Teacher[] = [
    { Id: 1, Name: 'Tova', Classes: ["א1", "א2"] },
    { Id: 2, Name: 'Sara', Classes: ["א1", "א2"] },
    { Id: 3, Name: 'Yehudit', Classes: ["א1", "א2"] }
  ]

  getTeachers(): Teacher[] {
    return this.teachers
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher)
  }

  updateTeacher(teacher: Teacher): void {
    let teacherToUpdate = this.teachers.find((t) => t.Id == teacher.Id)
    teacherToUpdate = teacher
  }

  deleteTeacher(teacher: Teacher): void {
    const index = this.teachers.findIndex(person => person.Id === teacher.Id);
    if (index !== -1) {
      this.teachers.splice(index, 1);
    }
  }
}
