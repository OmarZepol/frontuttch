import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log;

  constructor(private autSvc: UserService,
    private router: Router, private formBuilder: FormBuilder) { 
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
         
       }else{
         this.router.navigate(['/inicio']);
       }
     });
   }

}
