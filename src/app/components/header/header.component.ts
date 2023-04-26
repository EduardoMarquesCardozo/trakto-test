import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  dropdown:boolean = false;
  isLoggedin: boolean = false;
  constructor(private auth: AuthService, public router: Router) { 
    
  }

  ngOnInit() {
    this.auth.user.subscribe(val =>{
      this.isLoggedin = !!val;
    })
  }

  onLogout(){
    this.auth.logout();
  }

  imageReturn(){
    return this.router.url.includes('modules') ? 'assets/trakto-logo-edu-white.svg': 'assets/trakto-logo-edu.svg';
  }
}
