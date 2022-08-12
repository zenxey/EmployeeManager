import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  login(params):Observable<any>{
    return this.httpClient.get(`https://retoolapi.dev/B13laa/getusers?user_id=${params.username}&password=${params.password}`)
  }

  // getUsers():Observable<any>{
  //   return this.httpClient.get(`https://retoolapi.dev/B13laa/getusers`)
  // }

  getUsers():Observable<any>{
    return this.httpClient.get(`https://retoolapi.dev/H2F0Ui/getemployedetail?`)
  }

  getDetails(params):Observable<any>{
    return this.httpClient.get(`https://retoolapi.dev/H2F0Ui/getemployedetail?id=${params.id}`)
  }
}
