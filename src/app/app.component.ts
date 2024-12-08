import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './component/student-list/student-list.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { TextToIconComponent } from "./component/text-to-icon/text-to-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent, TemplateFormComponent, TextToIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ahuvi-bloy';

  currentHourFunc(){
  let time=new Date().getHours();
  if (time>6 && time<13)
    return 'Good Morning'
  if (time>13 && time<19)
    return 'Good Afternoon'
  return 'Good Night'
  }
}
