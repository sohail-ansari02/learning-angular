import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentsUsingTemplateAndContextComponent } from './dynamic-components-using-template-and-context.component';

describe('DynamicComponentsUsingTemplateAndContextComponent', () => {
  let component: DynamicComponentsUsingTemplateAndContextComponent;
  let fixture: ComponentFixture<DynamicComponentsUsingTemplateAndContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentsUsingTemplateAndContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponentsUsingTemplateAndContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
