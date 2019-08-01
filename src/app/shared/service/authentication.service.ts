import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.apiBaseUrl;

  constructor( private http : HttpClient) { }

  login(login : Login){
    return this.http.post<LoginResponse>(this.baseUrl + '/auth/login', login)
  }
}
