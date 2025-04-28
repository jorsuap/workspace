import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./show-info/show-info.module').then((m) => m.ShowInfoModule),
  },
];
