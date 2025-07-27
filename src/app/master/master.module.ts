import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OttComponent } from './ott/ott.component';
import { SharedModule } from "../shared/shared.module";

export const routes: Routes = [

  { 
    path: 'ott', 
     component: OttComponent
  }, 
    
];

@NgModule({
  declarations: [
    OttComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
]
})
export class MasterModule { }
