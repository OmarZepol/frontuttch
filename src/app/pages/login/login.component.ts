import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log;

  constructor(private autSvc: UserService, private router: Router, private formBuilder: FormBuilder, private toastrSvc:ToastrService) { 
      this.log = formBuilder.group({
        email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
        password:['', [ Validators.required]],
      
      });
    }

  ngOnInit(): void {
  }

  loginUser():void{
    console.log(this.log);
     this.autSvc.login(this.log.value).subscribe(
       (data:any)=>{
       if(!data.token){
         console.log(data);
         this.toastrSvc.error(`Correo o contraseña incorrecta`, 'UTVCO TECHNOLOGY');         
       }else{
         this.router.navigate(['/inicio']);
         this.toastrSvc.success(`Bienvenido`, 'UTVCO TECHNOLOGY');
       }
     });
   }

}
