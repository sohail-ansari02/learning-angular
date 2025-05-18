import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ScalesProjectionDirective } from '../scales-projection.directive';
import { CommonModule } from '@angular/common';
import { ScalesProjectionHeaderDirective } from '../scales-projection-header.directive';

@Component({
  selector: 'app-display-scales',
  imports: [CommonModule],
  templateUrl: './display-scales.component.html',
  styleUrl: './display-scales.component.scss',
})
export class DisplayScalesComponent {
  @Input({ required: true }) scaleSizes!: number[];
  @Input() mutlipleProject = false;
  @ContentChild(ScalesProjectionDirective) content!: ScalesProjectionDirective;
  @ContentChildren(ScalesProjectionDirective) contentArr!: QueryList<ScalesProjectionDirective>;

  @ContentChild(ScalesProjectionHeaderDirective) contentHeader!: ScalesProjectionHeaderDirective;


  @ContentChild('footerRef') footerRef!: TemplateRef<unknown>;

}
