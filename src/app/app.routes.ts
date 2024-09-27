import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';



export const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    { 
      path: 'login', 
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
    }, 

    { 
      path: 'main', 
      loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) 
    }, 
    // {path: 'login', component: LoginComponent},
    // { path: '**', redirectTo: '/login' }    
  ];


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      // BrowserModule
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule,
      AuthModule
    ],
    declarations: [],
    providers: [],
  })
  export class AppRoutingModule { }
