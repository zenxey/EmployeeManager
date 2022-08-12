import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: "",
    password: ""
  }
  constructor(private userservice:UserService, private route: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.userservice.login(this.user).subscribe(res => {
      console.log(res)
      if(res.length > 0){
        console.log('in')
        this.route.navigate(['/home'])
      }
    }, error =>{
      console.log(error)
    })
  }
}
