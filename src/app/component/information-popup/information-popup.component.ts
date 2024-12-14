import { Component } from '@angular/core';

@Component({
  selector: 'app-information-popup',
  standalone: true,
  imports: [],
  templateUrl: './information-popup.component.html',
  styleUrl: './information-popup.component.css',
})
export class InformationPopupComponent {
  msg: string = '';

  showPop(text: string) {
    this.msg = text;
  }
}
