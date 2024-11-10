import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './component/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent],
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
