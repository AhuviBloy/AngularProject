import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[appMyHighlight]',
  standalone:true
})

export class MyHighlightDirective implements OnInit {
	@Input() highlightColor: string = 'yellow';
	hoverColor:string = 'aqua';
	constructor(private el: ElementRef){
	}
	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.hoverColor);
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(this.highlightColor);
	}
	ngOnInit(){
		this.highlight(this.highlightColor);
	}
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}
