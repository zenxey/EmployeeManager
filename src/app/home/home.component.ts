import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersList = [{name: "", company: "", designation: "", company_logo: ""}]
  constructor(private UserService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res =>{
      this.usersList = res
    }, error =>{
      console.log(error)
    });
  }
  goToDetails(records){
    // this.route.navigate(['details',records.id]);
      window.open(`http://localhost:4200/details/${records.id}`);
  }
}
