import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignedService {

  constructor(private http: HttpClient) { }

  //generate token
  public generateToken(loginData:any){
    let url = "http://localhost:8080/generate-token"
    return this.http.post(url,loginData);
  }

  //login user:set token in localstorage
  // public loginUser(token){
  //   localStorage.setItem
  // }
}
