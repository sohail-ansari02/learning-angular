import { Routes } from '@angular/router';
import { DisplayMultipleContentUsingTemplateComponent } from './display-multiple-content-using-template/display-multiple-content-using-template/display-multiple-content-using-template.component';
import { DisplayComponentUsingNgTemplateForDryComponent } from './display-component-using-ng-template-for-dry/display-component-using-ng-template-for-dry.component';
import { DynamicComponentsUsingTemplateAndContextComponent } from './dynamic-components-using-template-and-context/dynamic-components-using-template-and-context.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dynamic-components-using-template-and-context',
    pathMatch: 'full',
  },
  {
    path: 'display-multiple-content-using-template',
    loadComponent: () => DisplayMultipleContentUsingTemplateComponent,
  },
  {
    path: 'display-component-using-ng-template-for-dry',
    loadComponent: () => DisplayComponentUsingNgTemplateForDryComponent,
  },
  {
    path: 'dynamic-components-using-template-and-context',
    loadComponent: () => DynamicComponentsUsingTemplateAndContextComponent,
  },
];
