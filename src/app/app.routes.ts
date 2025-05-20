import { Routes } from '@angular/router';
import { DisplayMultipleContentUsingTemplateComponent } from './display-multiple-content-using-template/display-multiple-content-using-template/display-multiple-content-using-template.component';
import { DisplayComponentUsingNgTemplateForDryComponent } from './display-component-using-ng-template-for-dry/display-component-using-ng-template-for-dry.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'display-component-using-ng-template-for-dry',
    pathMatch: 'full',
  },
  {
    path: 'display-multiple-content-using-template',
    loadComponent: () => DisplayMultipleContentUsingTemplateComponent,
  },
  {
    path: 'display-component-using-ng-template-for-dry',
    loadComponent: () => DisplayComponentUsingNgTemplateForDryComponent
  }
];
