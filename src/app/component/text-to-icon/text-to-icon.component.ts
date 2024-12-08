import { Component } from '@angular/core';
import { IconPipe } from '../../../pipes/icon.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-text-to-icon',
  standalone: true,
  imports: [IconPipe,FormsModule,NgTemplateOutlet],
  templateUrl: './text-to-icon.component.html',
  styleUrl: './text-to-icon.component.css'
})
export class TextToIconComponent {

  public text:string =""
}
