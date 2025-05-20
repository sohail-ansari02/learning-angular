import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponentUsingNgTemplateForDryComponent } from './display-component-using-ng-template-for-dry.component';

describe('DisplayComponentUsingNgTemplateForDryComponent', () => {
  let component: DisplayComponentUsingNgTemplateForDryComponent;
  let fixture: ComponentFixture<DisplayComponentUsingNgTemplateForDryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayComponentUsingNgTemplateForDryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComponentUsingNgTemplateForDryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
