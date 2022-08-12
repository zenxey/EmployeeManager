import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  userId;
  userListDetails = [{id:"", name: "", company: "", designation: "", company_logo: "", interests: "", job_descripton: "", rating: "", view_more: ""}]

  constructor(private activatedRoute:ActivatedRoute, private UserService: UserService, private Routes: Router) {
    this.activatedRoute.params.subscribe(param=>{
      this.userId=param;
    })
}

  ngOnInit(): void {
    this.UserService.getDetails(this.userId).subscribe(res =>{
      this.userListDetails=res
    }, error => {
      console.log(error)
    })
  }
}
