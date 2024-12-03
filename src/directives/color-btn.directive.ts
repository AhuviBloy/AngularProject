import { Directive,HostListener, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorBtn]',
  standalone: true
})

export class ColorBtnDirective {
  
  @Input() courseType: number=0;
  color: string= "aqua";
  initColor:string="#fffa9f"

  constructor(private el: ElementRef) { }
  ngOnInit(){
		this.highlight(this.initColor);
	}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['courseType']) {
      this.setColor();
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.color);
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(this.initColor);
	}
  private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
  private setColor() {
    
    switch (this.courseType) {
      case 1:
        this.color = 'red';
        break;
      case 2:
        this.color = 'rgb(58 255 38)';
        break;
      case 3:
        this.color = 'aqua';
        break;
      default:
        this.color = 'lightblue';
    }

  }
}
