import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, inject, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display-component-using-ng-template-for-dry',
  imports: [CommonModule],
  templateUrl: './display-component-using-ng-template-for-dry.component.html',
  styleUrl: './display-component-using-ng-template-for-dry.component.scss'
})
export class DisplayComponentUsingNgTemplateForDryComponent implements AfterViewInit {
  @ViewChild('A') templateA!: TemplateRef<unknown>;
  @ViewChild('CD') templateB!: TemplateRef<unknown>;

  aboveB!: TemplateRef<unknown>;
  belowA!: TemplateRef<unknown>;

  isMobile = false;

  cdRef = inject(ChangeDetectorRef);
  

  ngAfterViewInit(): void {
    // update isMobile here
    this.aboveB = this.isMobile ? this.templateA: this.templateB;
    this.belowA = this.isMobile ? this.templateB: this.templateA;
    this.cdRef.detectChanges();
  }

}
