import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onLoginButtonClicked(email:string,password:string){
    this.authService.login(email,password).subscribe((res: HttpResponse<any>) => {
      if(res.status=== 200) {
        this.router.navigate(['/lists'])
      }
      console.log(res);
    } );
  }

}
