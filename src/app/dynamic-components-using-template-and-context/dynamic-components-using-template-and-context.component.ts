import { Component } from '@angular/core';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-dynamic-components-using-template-and-context',
  imports: [SelectComponent],
  templateUrl: './dynamic-components-using-template-and-context.component.html',
  styleUrl: './dynamic-components-using-template-and-context.component.scss',
})
export class DynamicComponentsUsingTemplateAndContextComponent {
  options = [
    { name: 'Alice', id: 101 },
    { name: 'Bob', id: 102 },
    { name: 'Charlie', id: 103 },
    { name: 'Diana', id: 104 },
  ];
}
