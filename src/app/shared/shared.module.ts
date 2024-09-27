import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

  { 
    path: 'dashboard', 
     component: DashboradComponent
  }, 
    
];

@NgModule({
  declarations: [
    DashboradComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SharedModule { }
