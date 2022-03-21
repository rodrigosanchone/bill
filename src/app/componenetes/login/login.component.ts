import { Component, OnInit } from '@angular/core';
import { LoginServices } from 'src/app/services/login.services'; 
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email:string="";
   password:string=""
  constructor(
    private auth: LoginServices,
    private router: Router,
  ) { }
  
  ngOnInit(): void {
  }

  login(){
    {
    this.auth.login(this.email,this.password).then(
      res=>{
        this.router.navigate(['/prueba']);
      }
    ).catch(
      error=>{
        alert('usuario o contraseña erroneos')
      }
    )
  }
  }

  onGmailLogin(){
    this.auth.logGmail().
    then((res)=>{
    this.router.navigate(['/info']);
    }).catch(
      error=>{
        alert('usuario o contraseña erroneos')
      }
    )
  }

}
