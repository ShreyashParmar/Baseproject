import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  // standalone: true,
  // imports: [],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  ok: any;

  login: any = {
    username: '',
    password: ''
  }
  constructor(private router: Router) { }

  adminlogin(){
    debugger
    if(this.login.username == 'admin' && this.login.password == 'admin@123'){
      this.router.navigate(['/main/dashboard']);
    }
  }

}
