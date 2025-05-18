import { Component } from '@angular/core';
import { DisplayScalesComponent } from '../display-scales/display-scales.component';
import { ScalesProjectionDirective } from '../scales-projection.directive';
import { NgTemplateOutlet } from '@angular/common';
import { ScalesProjectionHeaderDirective } from '../scales-projection-header.directive';

@Component({
  selector: 'app-display-multiple-content-using-template',
  imports: [DisplayScalesComponent, ScalesProjectionDirective, ScalesProjectionHeaderDirective],
  templateUrl: './display-multiple-content-using-template.component.html',
  styleUrl: './display-multiple-content-using-template.component.scss'
})
export class DisplayMultipleContentUsingTemplateComponent {

}
