import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowInfoRoutingModule } from './show-info-routing.module';
import { ShowInfoComponent } from './show-info.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ShowInfoRoutingModule,
    ShowInfoComponent
  ]
})
export class ShowInfoModule { }
