import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appScalesProjectionHeader]'
})
export class ScalesProjectionHeaderDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
