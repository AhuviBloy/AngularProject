import { Injectable } from "@angular/core"
import { Teacher } from "../interfaces/teacher"


@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor() { }

  public teachers: Teacher[] = [
    { Id: 111, Name: 'Tova', Classes: ["A1","A2"] },
    { Id: 222, Name: 'Sara', Classes: ["B1","B2"] },
    { Id: 333, Name: 'Yehudit', Classes: ["C1","C2"] }
  ]

  getTeachers(): Teacher[] {
    return this.teachers
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher)
  }

  updateTeacher(teacher: Teacher): void {
    this.teachers.forEach(t=>{
      if(t.Id==teacher.Id){
        t.Name=teacher.Name;
        t.Classes=teacher.Classes
      }
  })
  }

  deleteTeacher(teacher: Teacher): void {
    const index = this.teachers.findIndex(person => person.Id === teacher.Id);
    if (index !== -1) {
      this.teachers.splice(index, 1);
    }
  }
}
