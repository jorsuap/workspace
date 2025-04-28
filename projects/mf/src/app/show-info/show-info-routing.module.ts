import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInfoComponent } from './show-info.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: ShowInfoComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowInfoRoutingModule { }
