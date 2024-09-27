import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [

  { 
    path: 'adminlogin', 
     component: AdminloginComponent
  }, 
    
];

@NgModule({
  declarations: [AdminloginComponent],
  imports: [
    CommonModule,
    FormsModule ,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
