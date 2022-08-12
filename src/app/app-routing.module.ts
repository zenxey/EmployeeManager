import {RouterModule, Routes} from '@angular/router'
import {NgModule, Component} from '@angular/core'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const appRoutes : Routes = [
    {path: '', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'details/:id', component:EmployeeDetailsComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {

}

