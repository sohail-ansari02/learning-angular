import { Routes } from '@angular/router';
import { DisplayMultipleContentUsingTemplateComponent } from './display-multiple-content-using-template/display-multiple-content-using-template/display-multiple-content-using-template.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'display-multiple-content-using-template',
    pathMatch: 'full',
  },
  {
    path: 'display-multiple-content-using-template',
    loadComponent: () => DisplayMultipleContentUsingTemplateComponent,
  },
];
