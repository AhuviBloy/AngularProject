import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToIconComponent } from './text-to-icon.component';

describe('TextToIconComponent', () => {
  let component: TextToIconComponent;
  let fixture: ComponentFixture<TextToIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextToIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
