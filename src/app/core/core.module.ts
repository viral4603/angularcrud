import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    SidebarComponent,
    MainComponent
  ]
})
export class CoreModule { }
