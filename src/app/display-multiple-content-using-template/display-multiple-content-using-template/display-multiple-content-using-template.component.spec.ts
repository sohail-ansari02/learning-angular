import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMultipleContentUsingTemplateComponent } from './display-multiple-content-using-template.component';

describe('DisplayMultipleContentUsingTemplateComponent', () => {
  let component: DisplayMultipleContentUsingTemplateComponent;
  let fixture: ComponentFixture<DisplayMultipleContentUsingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayMultipleContentUsingTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMultipleContentUsingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
