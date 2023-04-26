import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sendingData: Boolean = false;
  form:FormGroup;
  constructor(
    private fb:FormBuilder, 
    private auth: AuthService, 
    private router: Router) {
      this.form = this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        password: ['',Validators.required]
      });
  }

  onSubmit(){
    const val = this.form.value;

    if (val.email && val.password) {
      this.auth.login(val.email, val.password)
          .subscribe(
              () => {
                  this.router.navigateByUrl('/modules');
              }
          );
    }
  }

  erros(){
  }
}
